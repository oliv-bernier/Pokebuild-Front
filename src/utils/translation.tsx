const translationStat = (stat: string) => {
  switch (stat) {
    case 'HP':
      return 'PV';
    case 'attack':
      return 'Attaque';
    case 'defense':
      return 'Défense';
    case 'special_attack':
      return 'Attaque Spéciale';
    case 'special_defense':
      return 'Défense Spéciale';
    case 'speed':
      return 'Vitesse';
    default:
      return 'Default';
  }
};

export default translationStat;
