export const setTitle = () => {
  const setCode: string = window.location.pathname.split('/')[2];

  switch (setCode) {
    case 'bro':
      return "The Brother's War";
      break;

    case 'dmu':
      return 'Dominaria United';
      break;

    case 'snc':
      return 'Streets of New Capenna';
      break;

    case 'neo':
      return 'Kamigawa: Neon Dynasty';
      break;

    case 'vow':
      return 'Innistrad: Crimson Vow';
      break;

    case 'mid':
      return 'Innistrad: Midnight Hunt';
      break;

    case 'afr':
      return 'Adventures in the Forgotten Realms';
      break;

    case 'stx':
      return 'Strixhaven';
      break;

    case 'khm':
      return 'Kaldheim';
      break;

    case 'znr':
      return 'Zendikar Rising';
      break;

    case 'm21':
      return 'Core 2021';
      break;

    case 'iko':
      return 'Ikoria: Lair of Behemoths';
      break;

    case 'thb':
      return 'Theros Beyond Death';
      break;

    case 'eld':
      return 'Throne of Eldraine';
      break;
  }
};
