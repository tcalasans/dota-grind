export interface ItemAbility {
  type: string;
  title: string;
  description: string;
}

export interface ItemAttrib {
  key: string;
  value: string;
  display?: string;
}

export type ItemQuality =
  | 'component'
  | 'consumable'
  | 'common'
  | 'rare'
  | 'epic'
  | 'artifact'
  | 'secret_shop';

export interface Item {
  id: number;
  img: string;
  dname?: string | null;
  qual?: ItemQuality | string;
  cost: number | null;
  abilities?: ItemAbility[];
  hint?: string[];
  behavior?: string | string[] | boolean;
  dmg_type?: string;
  notes?: string;
  attrib?: ItemAttrib[];
  mc?: boolean | number | string;
  hc?: boolean | number;
  cd?: number | false;
  lore?: string;
  components?: string[] | null;
  created?: boolean;
  charges?: boolean | number | string;
  [key: string]: unknown;
}

export type ItemsMap = Record<string, Item>;
