import { CardRarity } from '../../../cards/cardrarity/cardrarity.entity';

export const leaderRare = new CardRarity();
leaderRare.fr_name = 'Leader';
leaderRare.en_name = 'Leader';
leaderRare.abbr = 'L';

export const common = new CardRarity();
common.fr_name = 'Commune';
common.en_name = 'Common';
common.abbr = 'C';

export const uncommon = new CardRarity();
uncommon.fr_name = 'Peu Commune';
uncommon.en_name = 'Uncommon';
uncommon.abbr = 'UC';

export const rare = new CardRarity();
rare.fr_name = 'Rare';
rare.en_name = 'Rare';
rare.abbr = 'R';

export const superRare = new CardRarity();
superRare.fr_name = 'Super Rare';
superRare.en_name = 'Super Rare';
superRare.abbr = 'SR';

export const specialRare = new CardRarity();
specialRare.fr_name = 'Special Rare';
specialRare.en_name = 'Special Rare';
specialRare.abbr = 'SEC';

export const promotionRare = new CardRarity();
promotionRare.fr_name = 'Promotion Rare';
promotionRare.en_name = 'Promotion Rare';
promotionRare.abbr = 'P';
