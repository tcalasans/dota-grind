'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { trackEvent } from '@/lib/mixpanel';
import PageHeader from '@/components/page-header';
import { useTriviaGame, getGrade } from './use-trivia-game';

export default function HeroTriviaPage() {
  const {
    screen,
    round,
    score,
    answered,
    selectedAnswer,
    currentQuestion,
    totalRounds,
    globalTimeLeft,
    startGame,
    handleAnswer,
    goToPregame,
  } = useTriviaGame();

  useEffect(() => {
    trackEvent('open page', { page: 'Hero Trivia' });
  }, []);

  return (
    <>
      <PageHeader title="Hero Trivia" />

      {/* Pregame */}
      {screen === 'pregame' && (
        <div className="flex justify-center items-center min-h-[calc(100vh-72px)] p-5">
          <div className="bg-header border border-border rounded-xl p-10 max-w-[520px] w-full text-center">
            <h2 className="text-[1.5rem] text-accent mb-4 font-bold">Hero Trivia</h2>
            <p className="text-[#aaa] text-[0.9rem] leading-relaxed mb-3">
              Test your Dota 2 hero knowledge! Answer 30 trivia questions about heroes, abilities, and attributes.
            </p>
            <div className="text-left mx-auto my-5 p-4 bg-primary rounded-lg">
              <RuleItem icon="&#9881;" text="30 questions, 3 seconds each" />
              <RuleItem icon="&#9733;" text="Answer hero questions for 1 point each (press 1-4)" />
              <RuleItem icon="&#9876;" text="Max score: 30" last />
            </div>
            <button
              className="bg-accent text-white border-none px-12 py-3.5 text-[1.1rem] font-semibold rounded-lg cursor-pointer tracking-wide transition-colors duration-200 hover:bg-[#d63651] mt-2.5"
              onClick={startGame}
            >
              Start Game
            </button>
          </div>
        </div>
      )}

      {/* Game */}
      {screen === 'game' && currentQuestion && (
        <div>
          <div className="flex justify-center items-center gap-8 px-5 py-3 bg-header border-b border-border flex-wrap">
            <HudItem label="Round" value={`${round} / ${totalRounds}`} />
            <HudItem label="Timer" value={`${globalTimeLeft}s`} accent />
            <HudItem label="Score" value={String(score)} />
          </div>

          <div className="flex justify-center items-center min-h-[calc(100vh-72px-65px)] p-5">
            <div className="flex flex-col items-center p-5 bg-header border border-border rounded-xl max-w-[400px] w-[90%]">
              <Image
                src={currentQuestion.img}
                alt=""
                width={180}
                height={101}
                className="rounded-lg border-2 border-border mb-4 aspect-video object-cover bg-primary"
              />
              <div className="text-base text-center mb-4 min-h-[28px]">{currentQuestion.text}</div>
              <div className="grid grid-cols-2 gap-2.5 w-full max-w-[360px]">
                {currentQuestion.options.map((opt, i) => {
                  const isCorrect = opt === currentQuestion.answer;
                  const isSelected = opt === selectedAnswer;
                  const isMissed = selectedAnswer === '__missed__';

                  let cls = 'bg-primary border border-border rounded-lg text-text-primary text-[0.85rem] text-center font-medium px-2 py-3 transition-all duration-150';

                  if (answered) {
                    if (isCorrect) {
                      cls += ' bg-[rgba(39,174,96,0.25)] border-[#27ae60] text-[#2ecc71]';
                    } else if (isSelected && !isCorrect) {
                      cls += ' bg-[rgba(231,76,60,0.25)] border-[#e74c3c] text-[#e74c3c]';
                    } else {
                      cls += ' opacity-50';
                    }
                  } else {
                    cls += ' cursor-pointer hover:border-accent hover:bg-accent/10';
                  }

                  return (
                    <button
                      key={i}
                      className={cls}
                      onClick={() => !answered && handleAnswer(opt)}
                      disabled={answered}
                    >
                      <span className="inline-block w-5 h-5 leading-5 rounded bg-white/10 border border-border text-[0.7rem] font-bold text-text-muted text-center mr-1.5 align-middle">
                        {i + 1}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              <div className={`mt-3 text-[0.85rem] min-h-[22px] font-semibold ${
                answered
                  ? selectedAnswer === '__missed__'
                    ? 'text-text-muted'
                    : selectedAnswer === currentQuestion.answer
                      ? 'text-[#2ecc71]'
                      : 'text-[#e74c3c]'
                  : ''
              }`}>
                {answered && (
                  selectedAnswer === '__missed__'
                    ? `Missed! ${currentQuestion.answer}`
                    : selectedAnswer === currentQuestion.answer
                      ? 'Correct!'
                      : `Wrong! ${currentQuestion.answer}`
                )}
              </div>
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
            <div className="flex justify-center gap-6 mb-5">
              <div className="text-center p-4 bg-primary rounded-lg min-w-[110px]">
                <div className="text-[2rem] font-bold text-white">{score}</div>
                <div className="text-[0.7rem] uppercase tracking-wide text-text-muted mt-1">Score (/ 30)</div>
              </div>
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
