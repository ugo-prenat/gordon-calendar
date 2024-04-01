// SPORTS
export const MOTORSPORT = 'motorsport';
export const SPORTS_TYPES = [MOTORSPORT] as const;

// CHAMIPONSHIPS

// /!\ à chaque ajout d'un nouveau championnat :
//        - ajouter son id ci-dessous
//        - ajouter son id dans le tableau {SPORT_TYPE}_CHAMPIONSHIPS

export const F1 = 'f1';
export const F2 = 'f2';
export const F3 = 'f3';
export const FA = 'fa';

export const MOTORSPORT_CHAMPIONSHIPS = [F1, F2, F3, FA] as const;
export const CHAMPIONSHIPS = [...MOTORSPORT_CHAMPIONSHIPS] as const;
