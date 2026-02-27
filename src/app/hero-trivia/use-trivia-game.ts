'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { HERO_TRIVIA_QUIZZES } from '@/data/hero-trivia-quizzes';
import { STEAM_CDN } from '@/lib/constants';

const TOTAL_ROUNDS = 30;
const ROUND_DURATION = 3000;

export type Screen = 'pregame' | 'game' | 'results';

export interface QuizQuestion {
  img: string;
  text: string;
  options: string[];
  answer: string;
}

export interface TriviaGameState {
  screen: Screen;
  round: number;
  score: number;
  answered: boolean;
  selectedAnswer: string | null;
  currentQuestion: QuizQuestion | null;
  totalRounds: number;
  globalTimeLeft: number;
}

export function useTriviaGame() {
  const [screen, setScreen] = useState<Screen>('pregame');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [globalTimeLeft, setGlobalTimeLeft] = useState(TOTAL_ROUNDS * ROUND_DURATION / 1000);

  const usedIndicesRef = useRef<number[]>([]);
  const roundIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const globalTimerRef = useRef<NodeJS.Timeout | null>(null);
  const gameStartTimeRef = useRef(0);
  const roundRef = useRef(0);
  const scoreRef = useRef(0);
  const answeredRef = useRef(false);
  const correctAnswerRef = useRef<string | null>(null);

  const generateQuestion = useCallback(() => {
    if (usedIndicesRef.current.length >= HERO_TRIVIA_QUIZZES.length) {
      usedIndicesRef.current = [];
    }
    let idx: number;
    do {
      idx = Math.floor(Math.random() * HERO_TRIVIA_QUIZZES.length);
    } while (usedIndicesRef.current.includes(idx));
    usedIndicesRef.current.push(idx);

    const q = HERO_TRIVIA_QUIZZES[idx];
    return {
      img: STEAM_CDN + q.img,
      text: q.text,
      options: q.options,
      answer: q.answer,
    };
  }, []);

  const cleanup = useCallback(() => {
    if (roundIntervalRef.current) { clearInterval(roundIntervalRef.current); roundIntervalRef.current = null; }
    if (globalTimerRef.current) { clearInterval(globalTimerRef.current); globalTimerRef.current = null; }
  }, []);

  const showResults = useCallback(() => {
    cleanup();
    setScreen('results');
  }, [cleanup]);

  const nextRound = useCallback(() => {
    roundRef.current++;
    if (roundRef.current > TOTAL_ROUNDS) {
      showResults();
      return;
    }

    const q = generateQuestion();
    correctAnswerRef.current = q.answer;
    answeredRef.current = false;

    setRound(roundRef.current);
    setAnswered(false);
    setSelectedAnswer(null);
    setCurrentQuestion(q);
  }, [generateQuestion, showResults]);

  const startGame = useCallback(() => {
    roundRef.current = 0;
    scoreRef.current = 0;
    answeredRef.current = false;
    usedIndicesRef.current = [];

    setRound(0);
    setScore(0);
    setScreen('game');
    gameStartTimeRef.current = Date.now();

    globalTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - gameStartTimeRef.current;
      const remaining = Math.max(0, Math.ceil((TOTAL_ROUNDS * ROUND_DURATION - elapsed) / 1000));
      setGlobalTimeLeft(remaining);
    }, 250);

    nextRound();
    roundIntervalRef.current = setInterval(() => {
      // Mark missed if not answered
      if (!answeredRef.current) {
        answeredRef.current = true;
        setAnswered(true);
        setSelectedAnswer('__missed__');
      }
      nextRound();
    }, ROUND_DURATION);
  }, [nextRound]);

  const handleAnswer = useCallback((answer: string) => {
    if (answeredRef.current) return;
    answeredRef.current = true;
    setAnswered(true);
    setSelectedAnswer(answer);

    if (answer === correctAnswerRef.current) {
      scoreRef.current++;
      setScore(scoreRef.current);
    }
  }, []);

  const goToPregame = useCallback(() => {
    cleanup();
    setScreen('pregame');
  }, [cleanup]);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (screen !== 'game' || answeredRef.current || !currentQuestion) return;
      const idx = parseInt(e.key) - 1;
      if (idx >= 0 && idx < currentQuestion.options.length) {
        handleAnswer(currentQuestion.options[idx]);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [screen, currentQuestion, handleAnswer]);

  return {
    screen,
    round,
    score,
    answered,
    selectedAnswer,
    currentQuestion,
    totalRounds: TOTAL_ROUNDS,
    globalTimeLeft,
    startGame,
    handleAnswer,
    goToPregame,
  };
}

export function getGrade(score: number) {
  const pct = Math.round((score / 30) * 100);
  if (pct >= 90) return { grade: 'S', comment: 'Immortal — you are the top 0.1%' };
  if (pct >= 80) return { grade: 'A', comment: 'Divine — exceptional hero knowledge' };
  if (pct >= 70) return { grade: 'B', comment: 'Ancient — solid game knowledge' };
  if (pct >= 60) return { grade: 'C', comment: 'Legend — room to improve' };
  if (pct >= 50) return { grade: 'D', comment: 'Archon — keep practicing!' };
  return { grade: 'F', comment: 'Herald — the journey begins here' };
}
