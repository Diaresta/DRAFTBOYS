export interface cardSets {
  name: string;
  card_image: string;
  type: string;
  text: string;
  mana: string;
  cmc: number;
  colors: string[];
  rarity: string;
  set: string;
}

export interface DraftCards {
  name: string;
  img: string;
  cmc: number;
  colors: string;
  type: string;
}
