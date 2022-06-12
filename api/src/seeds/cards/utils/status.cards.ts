import { CardStatus } from '../../../cards/cardstatus/cardstatus.entity';

export const unlimited = new CardStatus();
unlimited.fr_name = 'Illimité';
unlimited.en_name = 'Unlimited';
unlimited.max_amount = 4;

export const banned = new CardStatus();
banned.fr_name = 'Bannie';
banned.en_name = 'Banned';
banned.max_amount = 0;

export const limited = new CardStatus();
limited.fr_name = 'Limitée';
limited.en_name = 'Limited';
limited.max_amount = 1;

export const semiLimited = new CardStatus();
semiLimited.fr_name = 'Semi-limitée';
semiLimited.en_name = 'Semi-limited';
semiLimited.max_amount = 2;
