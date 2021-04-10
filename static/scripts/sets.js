const SETS = {
  khm: '/sets/khm.json',
  znr: '/sets/znr.json',
  m21: '/sets/m21.json',
  iko: '/sets/iko.json',
  thb: '/sets/thb.json',
  eld: '/sets/eld.json',
};
// /static/sets/znr.json for non-hbs

var SET;
const setTitle = document.getElementById('selectSet');

// Sets SET variable to import from JSON
if (setTitle.innerHTML == 'Kaldheim') {
  SET = SETS.khm;
} else if (setTitle.innerHTML == 'Zendikar Rising') {
  SET = SETS.znr;
} else if (setTitle.innerHTML == 'Core Set 2021') {
  SET = SETS.m21;
} else if (setTitle.innerHTML == 'Ikoria: Lair of Behemoths') {
  SET = SETS.iko;
} else if (setTitle.innerHTML == 'Theros Beyond Death') {
  SET = SETS.thb;
} else if (setTitle.innerHTML == 'Throne of Eldraine') {
  SET = SETS.eld;
}

export { SET };
