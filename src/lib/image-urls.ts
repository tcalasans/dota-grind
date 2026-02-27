import { STEAM_CDN } from './constants';

export function heroImageUrl(imgPath: string): string {
  return `${STEAM_CDN}${imgPath}`;
}

export function heroImageFromName(heroName: string): string {
  const slug = heroName.replace('npc_dota_hero_', '');
  return `${STEAM_CDN}/apps/dota2/images/dota_react/heroes/${slug}.png`;
}

export function itemImageUrl(imgPath: string): string {
  return `${STEAM_CDN}${imgPath}`;
}

export function itemImageFromName(itemName: string): string {
  const slug = itemName.replace('item_', '');
  return `${STEAM_CDN}/apps/dota2/images/dota_react/items/${slug}.png`;
}
