import { STEAM_CDN } from './constants';

export function heroImageUrl(imgPath: string): string {
  return `${STEAM_CDN}${imgPath}`;
}

export function itemImageUrl(imgPath: string): string {
  return `${STEAM_CDN}${imgPath}`;
}
