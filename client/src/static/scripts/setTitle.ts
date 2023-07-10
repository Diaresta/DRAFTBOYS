export const setTitle = () => {
  const setCode: string = window.location.pathname.split('/')[2];

  switch (setCode) {
    case 'mom':
      return 'March of the Machine';

    case 'one':
      return 'Phyrexia: All Will Be One';

    case 'bro':
      return "The Brother's War";

    case 'dmu':
      return 'Dominaria United';

    case 'snc':
      return 'Streets of New Capenna';

    case 'neo':
      return 'Kamigawa: Neon Dynasty';

    case 'vow':
      return 'Innistrad: Crimson Vow';

    case 'mid':
      return 'Innistrad: Midnight Hunt';

    case 'afr':
      return 'Adventures in the Forgotten Realms';

    case 'stx':
      return 'Strixhaven';

    case 'khm':
      return 'Kaldheim';

    case 'znr':
      return 'Zendikar Rising';

    case 'm21':
      return 'Core 2021';

    case 'iko':
      return 'Ikoria: Lair of Behemoths';

    case 'thb':
      return 'Theros Beyond Death';

    case 'eld':
      return 'Throne of Eldraine';
  }
};
