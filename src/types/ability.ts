export interface Ability {
  dname: string;
  img: string;
  desc?: string;
  behavior?: string | string[];
  dmg_type?: string;
  cd?: string[] | string;
  mc?: string[] | string;
  bkbpierce?: string;
  dmg?: string | string[];
}

export type AbilitiesMap = Record<string, Ability>;
export type HeroAbilitiesMap = Record<string, string[]>;
