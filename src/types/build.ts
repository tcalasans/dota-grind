/** Compact JSON shape for URL-encoded build state */
export interface BuildJSON {
  /** Hero ID */
  h?: number;
  /** Facet index */
  f?: number;
  /** Role */
  r?: string;
  /** Skill leveling order (ability indices, -1 for stats) */
  s?: number[];
  /** Talents: 4 chars, L/R/_ */
  t?: string;
  /** Items: [itemId, timing, upgradeOf index or null][] */
  i?: [number, number, number | null][];
}
