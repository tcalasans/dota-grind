'use client';

import Image from 'next/image';
import { HeroAbilityV2 } from '@/types/hero-v2';
import { STEAM_CDN } from '@/lib/constants';

function abilityImageUrl(abilityName: string): string {
  return `${STEAM_CDN}/apps/dota2/images/dota_react/abilities/${abilityName}.png`;
}

/** Check if an ability is an ultimate (type 1 = ultimate in Dota 2 data) */
function isUltimate(ability: HeroAbilityV2): boolean {
  // Ultimates typically have max_level === 3
  return ability.max_level === 3;
}

interface SkillBuilderProps {
  abilities: HeroAbilityV2[];
  skills: number[];
  onSkillsChange: (skills: number[]) => void;
}

export default function SkillBuilder({ abilities, skills, onSkillsChange }: SkillBuilderProps) {
  const TOTAL_LEVELS = 18;
  const ULT_LEVELS = [6, 12, 18]; // Levels at which ultimate can be skilled

  function getSkillCount(abilityIndex: number): number {
    return skills.filter((s) => s === abilityIndex).length;
  }

  function canAddSkill(abilityIndex: number): boolean {
    if (skills.length >= TOTAL_LEVELS) return false;
    const ability = abilities[abilityIndex];
    const currentCount = getSkillCount(abilityIndex);
    if (currentCount >= ability.max_level) return false;

    const nextLevel = skills.length + 1;

    // Ultimate can only be skilled at levels 6, 12, 18
    if (isUltimate(ability)) {
      if (!ULT_LEVELS.includes(nextLevel)) return false;
    }

    return true;
  }

  function addSkill(abilityIndex: number) {
    if (!canAddSkill(abilityIndex)) return;
    onSkillsChange([...skills, abilityIndex]);
  }

  function undo() {
    if (skills.length === 0) return;
    onSkillsChange(skills.slice(0, -1));
  }

  function clear() {
    onSkillsChange([]);
  }

  // Colors for each ability slot
  const ABILITY_COLORS = ['#3498db', '#27ae60', '#e4ae39', '#e94560', '#8e44ad', '#e67e22'];

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-3">
        Skill Build
      </h3>

      {/* Ability buttons */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {abilities.map((ability, idx) => {
          const count = getSkillCount(idx);
          const canAdd = canAddSkill(idx);
          const isUlt = isUltimate(ability);
          return (
            <button
              key={ability.id}
              onClick={() => addSkill(idx)}
              disabled={!canAdd}
              className={`flex items-center gap-2 px-3 py-2 rounded-md border text-sm transition-all duration-200 ${
                canAdd
                  ? 'border-border bg-header hover:border-accent hover:bg-accent/10 cursor-pointer'
                  : 'border-border/50 bg-header/50 opacity-40 cursor-not-allowed'
              }`}
              title={`${ability.name_loc} (${count}/${ability.max_level})${isUlt ? ' — Ultimate' : ''}`}
            >
              <Image
                src={abilityImageUrl(ability.name)}
                alt={ability.name_loc}
                width={32}
                height={32}
                className="rounded"
                loading="lazy"
              />
              <div className="text-left">
                <div className="text-xs font-semibold leading-tight">{ability.name_loc}</div>
                <div className="text-[0.6rem] text-text-muted">
                  {count}/{ability.max_level}{isUlt ? ' (Ult)' : ''}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Level slots row */}
      <div className="flex gap-1 mb-3 flex-wrap">
        {Array.from({ length: TOTAL_LEVELS }, (_, i) => {
          const level = i + 1;
          const assignedAbilityIdx = skills[i];
          const ability = assignedAbilityIdx !== undefined ? abilities[assignedAbilityIdx] : null;
          const color = assignedAbilityIdx !== undefined ? ABILITY_COLORS[assignedAbilityIdx % ABILITY_COLORS.length] : undefined;
          const isUltLevel = ULT_LEVELS.includes(level);

          return (
            <div
              key={i}
              className={`flex flex-col items-center gap-0.5 min-w-[36px] ${
                isUltLevel && !ability ? 'opacity-80' : ''
              }`}
            >
              <span className="text-[0.55rem] text-text-dim">{level}</span>
              <div
                className={`w-[36px] h-[36px] rounded border flex items-center justify-center text-[0.6rem] font-bold transition-all duration-200 ${
                  ability
                    ? 'border-transparent'
                    : isUltLevel
                      ? 'border-accent/40 bg-accent/5'
                      : 'border-border bg-header/50'
                }`}
                style={ability ? { backgroundColor: color, borderColor: color } : undefined}
                title={ability ? `${ability.name_loc} (Level ${level})` : `Level ${level}${isUltLevel ? ' — Ultimate available' : ''}`}
              >
                {ability ? (
                  <Image
                    src={abilityImageUrl(ability.name)}
                    alt={ability.name_loc}
                    width={28}
                    height={28}
                    className="rounded"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-text-dim">{isUltLevel ? 'R' : '—'}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={undo}
          disabled={skills.length === 0}
          className={`px-3 py-1.5 rounded-md border text-xs transition-all duration-200 ${
            skills.length > 0
              ? 'border-border bg-header hover:border-accent cursor-pointer'
              : 'border-border/50 bg-header/50 opacity-40 cursor-not-allowed'
          }`}
        >
          Undo
        </button>
        <button
          onClick={clear}
          disabled={skills.length === 0}
          className={`px-3 py-1.5 rounded-md border text-xs transition-all duration-200 ${
            skills.length > 0
              ? 'border-border bg-header hover:border-accent cursor-pointer'
              : 'border-border/50 bg-header/50 opacity-40 cursor-not-allowed'
          }`}
        >
          Clear
        </button>
        <span className="text-xs text-text-muted self-center ml-2">
          {skills.length}/{TOTAL_LEVELS} levels assigned
        </span>
      </div>
    </div>
  );
}
