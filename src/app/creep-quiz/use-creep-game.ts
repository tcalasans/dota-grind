'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { RADIANT, DIRE } from '@/data/creep-wave-timers';
import { trackEvent } from '@/lib/mixpanel';

const TOTAL_ROUNDS = 10;
const FEEDBACK_DELAY = 1500;

const TEAMS = ['radiant', 'dire'] as const;
const LANES = ['safelane', 'midlane', 'offlane'] as const;
const POINTS = ['1', '2', '3'] as const;
export const POINT_LABELS: Record<string, string> = { '1': 'Tower 1', '2': 'Tower 2', '3': 'Wave Meet' };

type Team = typeof TEAMS[number];
type Lane = typeof LANES[number];

export type Screen = 'pregame' | 'game' | 'results';

export interface Question {
  team: Team;
  lane: Lane;
  correctPoint: string;
  gameTime: number;
}

export function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return m + ':' + String(s).padStart(2, '0');
}

export function useCreepGame() {
  const [screen, setScreen] = useState<Screen>('pregame');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [elapsedTime, setElapsedTime] = useState('0:00');

  const scoreRef = useRef(0);
  const roundRef = useRef(0);
  const answeredRef = useRef(false);
  const currentQuestionRef = useRef<Question | null>(null);
  const usedCombosRef = useRef<string[]>([]);
  const startTimeRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cleanup = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    if (feedbackTimeoutRef.current) { clearTimeout(feedbackTimeoutRef.current); feedbackTimeoutRef.current = null; }
  }, []);

  const generateQuestion = useCallback((): Question => {
    let available: { team: Team; lane: Lane; key: string }[] = [];
    for (const team of TEAMS) {
      for (const lane of LANES) {
        const key = `${team}-${lane}`;
        if (!usedCombosRef.current.includes(key)) {
          available.push({ team, lane, key });
        }
      }
    }
    if (available.length === 0) {
      usedCombosRef.current = [];
      for (const team of TEAMS) {
        for (const lane of LANES) {
          available.push({ team, lane, key: `${team}-${lane}` });
        }
      }
    }

    const pick = available[Math.floor(Math.random() * available.length)];
    usedCombosRef.current.push(pick.key);

    const correctPoint = POINTS[Math.floor(Math.random() * POINTS.length)];
    const data = pick.team === 'radiant' ? RADIANT : DIRE;
    const delta = data[pick.lane][correctPoint];

    const maxGameTime = 40 * 60;
    const maxN = Math.floor((maxGameTime - 1 - delta) / 30);
    const n = Math.floor(Math.random() * (maxN + 1));
    const gameTime = n * 30 + delta;

    return { team: pick.team, lane: pick.lane, correctPoint, gameTime };
  }, []);

  const showResults = useCallback(() => {
    cleanup();
    const elapsedMs = Date.now() - startTimeRef.current;
    const elapsedSec = Math.round(elapsedMs / 1000);
    const mins = Math.floor(elapsedSec / 60);
    const secs = elapsedSec % 60;
    const timeStr = mins > 0 ? mins + 'm ' + secs + 's' : secs + 's';
    setElapsedTime(timeStr);

    const pct = Math.round((scoreRef.current / TOTAL_ROUNDS) * 100);
    trackEvent('Creep Quiz Completed', {
      score: scoreRef.current,
      total_rounds: TOTAL_ROUNDS,
      percentage: pct,
      time_seconds: elapsedSec,
    });

    setScreen('results');
  }, [cleanup]);

  const nextRound = useCallback(() => {
    roundRef.current++;
    if (roundRef.current > TOTAL_ROUNDS) {
      showResults();
      return;
    }

    answeredRef.current = false;
    const q = generateQuestion();
    currentQuestionRef.current = q;

    setRound(roundRef.current);
    setAnswered(false);
    setSelectedPoint(null);
    setCurrentQuestion(q);
  }, [generateQuestion, showResults]);

  const handleAnswer = useCallback((point: string) => {
    if (answeredRef.current || !currentQuestionRef.current) return;
    answeredRef.current = true;
    setAnswered(true);
    setSelectedPoint(point);

    if (point === currentQuestionRef.current.correctPoint) {
      scoreRef.current++;
      setScore(scoreRef.current);
    }

    feedbackTimeoutRef.current = setTimeout(() => nextRound(), FEEDBACK_DELAY);
  }, [nextRound]);

  const startGame = useCallback(() => {
    roundRef.current = 0;
    scoreRef.current = 0;
    answeredRef.current = false;
    usedCombosRef.current = [];
    startTimeRef.current = Date.now();

    setRound(0);
    setScore(0);
    setScreen('game');

    trackEvent('Creep Quiz Started');

    timerRef.current = setInterval(() => {
      const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
      const m = Math.floor(elapsed / 60);
      const s = elapsed % 60;
      setElapsedTime(m + ':' + (s < 10 ? '0' : '') + s);
    }, 1000);

    nextRound();
  }, [nextRound]);

  const goToPregame = useCallback(() => {
    cleanup();
    setScreen('pregame');
  }, [cleanup]);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  // Keyboard shortcuts 1-3
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (screen !== 'game' || answeredRef.current) return;
      const idx = parseInt(e.key) - 1;
      if (idx >= 0 && idx <= 2) {
        const pts = ['1', '2', '3'];
        handleAnswer(pts[idx]);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [screen, handleAnswer]);

  return {
    screen,
    round,
    score,
    answered,
    selectedPoint,
    currentQuestion,
    totalRounds: TOTAL_ROUNDS,
    elapsedTime,
    startGame,
    handleAnswer,
    goToPregame,
  };
}

export function getGrade(score: number) {
  const pct = Math.round((score / TOTAL_ROUNDS) * 100);
  if (pct >= 90) return { grade: 'S', comment: 'Immortal-tier creep knowledge!' };
  if (pct >= 80) return { grade: 'A', comment: 'Divine — you know your wave timings' };
  if (pct >= 70) return { grade: 'B', comment: 'Ancient — solid understanding' };
  if (pct >= 60) return { grade: 'C', comment: 'Legend — keep practicing' };
  if (pct >= 50) return { grade: 'D', comment: 'Archon — room to improve' };
  return { grade: 'F', comment: 'Herald — the journey begins here' };
}
