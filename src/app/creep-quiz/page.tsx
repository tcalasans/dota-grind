'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/mixpanel';
import PageHeader from '@/components/page-header';
import { useCreepGame, getGrade, formatTime, POINT_LABELS } from './use-creep-game';

export default function CreepQuizPage() {
  const {
    screen,
    round,
    score,
    answered,
    selectedPoint,
    currentQuestion,
    totalRounds,
    elapsedTime,
    startGame,
    handleAnswer,
    goToPregame,
  } = useCreepGame();

  useEffect(() => {
    trackEvent('open page', { page: 'Creep Wave Timer' });
  }, []);

  return (
    <>
      <PageHeader title="Creep Wave Quiz" />

      {/* Pregame */}
      {screen === 'pregame' && (
        <div className="flex justify-center items-center min-h-[calc(100vh-72px)] p-5">
          <div className="bg-header border border-border rounded-xl p-10 max-w-[520px] w-full text-center">
            <h2 className="text-[1.5rem] text-accent mb-4 font-bold">Creep Wave Timers</h2>
            <p className="text-[#aaa] text-[0.9rem] leading-relaxed mb-3">
              Test your knowledge of creep wave timing! Given a team, lane, and game clock time, identify which checkpoint the creep wave is at on the minimap.
            </p>
            <div className="text-left mx-auto my-5 p-4 bg-primary rounded-lg">
              <RuleItem icon="&#9881;" text="10 rounds per game" />
              <RuleItem icon="&#9733;" text="Each lane has 3 checkpoints: Tower 2, Tower 1, Wave Meet" />
              <RuleItem icon="&#9678;" text="Pick the correct point — click a button or press 1-3" />
              <RuleItem icon="&#9876;" text="Learn wave timings to improve your map awareness" last />
            </div>
            <button
              className="bg-accent text-white border-none px-12 py-3.5 text-[1.1rem] font-semibold rounded-lg cursor-pointer tracking-wide transition-colors duration-200 hover:bg-[#d63651] mt-2.5"
              onClick={startGame}
            >
              Start Quiz
            </button>
          </div>
        </div>
      )}

      {/* Game */}
      {screen === 'game' && currentQuestion && (
        <div>
          <div className="flex justify-center items-center gap-8 px-5 py-3 bg-header border-b border-border flex-wrap">
            <HudItem label="Round" value={`${round} / ${totalRounds}`} />
            <HudItem label="Score" value={String(score)} accent />
            <HudItem label="Time" value={elapsedTime} />
          </div>

          <div className="flex flex-col items-center p-5 gap-4">
            <div className="text-[1.1rem] text-center min-h-[28px]">
              <span className={currentQuestion.team === 'radiant' ? 'text-[#27ae60] font-bold' : 'text-[#e74c3c] font-bold'}>
                {currentQuestion.team.charAt(0).toUpperCase() + currentQuestion.team.slice(1)}
              </span>{' '}
              <span className="text-accent font-bold">
                {currentQuestion.lane.charAt(0).toUpperCase() + currentQuestion.lane.slice(1)}
              </span>{' '}
              — At which point is the creep wave at{' '}
              <span className="text-[#f1c40f] font-bold">{formatTime(currentQuestion.gameTime)}</span>?
            </div>

            <div className="w-full max-w-[500px] max-md:max-w-[360px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/minimap/minimap-${currentQuestion.team}-${currentQuestion.lane}.png`}
                alt="Minimap"
                className="w-full h-auto block rounded-lg border-2 border-border"
              />
            </div>

            <div className="flex gap-2.5 flex-wrap justify-center">
              {(['1', '2', '3'] as const).map((pt, i) => {
                const isCorrect = pt === currentQuestion.correctPoint;
                const isSelected = pt === selectedPoint;
                const isWrong = isSelected && !isCorrect;

                let cls = 'px-6 py-3 bg-primary border-2 border-border rounded-lg text-text-primary text-base font-semibold cursor-pointer transition-all duration-150 min-w-[80px] text-center';

                if (answered) {
                  cls += ' cursor-default';
                  if (isCorrect) {
                    cls = cls.replace('bg-primary', 'bg-[rgba(39,174,96,0.25)]').replace('border-border', 'border-[#27ae60]') + ' text-[#2ecc71]';
                  } else if (isWrong) {
                    cls = cls.replace('bg-primary', 'bg-[rgba(231,76,60,0.25)]').replace('border-border', 'border-[#e74c3c]') + ' text-[#e74c3c]';
                  } else {
                    cls += ' opacity-40';
                  }
                } else {
                  cls += ' hover:border-accent hover:bg-accent/10';
                }

                return (
                  <button
                    key={pt}
                    className={cls}
                    onClick={() => !answered && handleAnswer(pt)}
                    disabled={answered}
                  >
                    <span className="inline-block w-5 h-5 leading-5 rounded bg-white/10 border border-border text-[0.7rem] font-bold text-text-muted text-center mr-2 align-middle">
                      {i + 1}
                    </span>
                    {POINT_LABELS[pt]}
                  </button>
                );
              })}
            </div>

            <div className={`text-[0.9rem] font-semibold min-h-[22px] text-center ${
              answered
                ? selectedPoint === currentQuestion.correctPoint
                  ? 'text-[#2ecc71]'
                  : 'text-[#e74c3c]'
                : ''
            }`}>
              {answered && (
                selectedPoint === currentQuestion.correctPoint
                  ? 'Correct!'
                  : `Wrong! The answer is ${POINT_LABELS[currentQuestion.correctPoint]}.`
              )}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {screen === 'results' && (
        <div className="flex justify-center items-center min-h-[calc(100vh-72px)] p-5">
          <div className="bg-header border border-border rounded-xl p-10 max-w-[480px] w-full text-center">
            <div className="text-[4rem] font-extrabold text-accent leading-none mb-1">{getGrade(score).grade}</div>
            <div className="text-base text-[#aaa] mb-6">{getGrade(score).comment}</div>
            <div className="text-[1.1rem] mb-2 text-[#ccc]">
              Score: <strong className="text-accent text-[1.4rem]">{score}</strong> / {totalRounds}
            </div>
            <div className="text-[1.1rem] mb-6 text-[#ccc]">
              Time: <strong className="text-accent text-[1.4rem]">{elapsedTime}</strong>
            </div>
            <button
              className="bg-accent text-white border-none px-10 py-3 text-base font-semibold rounded-lg cursor-pointer tracking-wide transition-colors duration-200 hover:bg-[#d63651]"
              onClick={goToPregame}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function RuleItem({ icon, text, last }: { icon: string; text: string; last?: boolean }) {
  return (
    <div className={`flex gap-2.5 py-2 text-[0.85rem] text-[#ccc] ${last ? '' : 'border-b border-border'}`}>
      <span className="text-accent text-base min-w-[20px] text-center" dangerouslySetInnerHTML={{ __html: icon }} />
      <span>{text}</span>
    </div>
  );
}

function HudItem({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="text-center">
      <div className="text-[0.65rem] uppercase tracking-wide text-text-muted mb-0.5">{label}</div>
      <div className={`text-[1.3rem] font-bold ${accent ? 'text-accent' : 'text-text-primary'}`}>{value}</div>
    </div>
  );
}
