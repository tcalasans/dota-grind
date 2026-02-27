'use client';

const LEVELS = [1, 5, 10, 15, 20, 25, 30];

interface LevelSelectorProps {
  selectedLevel: number;
  onLevelChange: (level: number) => void;
}

export default function LevelSelector({ selectedLevel, onLevelChange }: LevelSelectorProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <span className="text-text-muted text-sm font-semibold uppercase tracking-wide">Level</span>
      {LEVELS.map((lvl) => (
        <button
          key={lvl}
          onClick={() => onLevelChange(lvl)}
          className={`px-3 py-1.5 rounded-md border text-sm cursor-pointer transition-all duration-200 ${
            selectedLevel === lvl
              ? 'bg-accent border-accent text-white'
              : 'bg-primary border-border text-text-primary hover:bg-border'
          }`}
        >
          {lvl}
        </button>
      ))}
    </div>
  );
}
