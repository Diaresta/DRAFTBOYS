import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { standardSets } from '../static/scripts/standardSets';
import { standardCardSet } from '../static/scripts/standardSets';
import { eternalCardSet } from '../static/scripts/eternalSets';
import { eternalSets } from '../static/scripts/eternalSets';
import { fadeOutWait } from '../static/scripts/fadeOut';

export const AllSets = () => {
  const [formatButton, setFormatButton] = useState(true);
  const [formatName, setFormatName] = useState('Standard');
  const [formatStyle, setFormatStyle] = useState([
    {
      opacity: '',
    },
    {
      opacity: '',
    },
  ]);
  const [formatDisplay, setFormatDisplay] = useState([
    { display: '' },
    { display: '' },
  ]);

  const [alertStyle, setAlertStyle] = useState({
    display: '',
    opacity: '',
    transition: '',
  });

  const formatInfo = (
    boolean: boolean,
    name: string,
    eternalStyle: string,
    standardStyle: string,
    eternalDisplay: string,
    standardDisplay: string
  ) => {
    setFormatButton(boolean);
    setFormatName(name);
    setFormatStyle([
      {
        opacity: eternalStyle,
      },
      {
        opacity: standardStyle,
      },
    ]);

    setTimeout(() => {
      setFormatDisplay([
        { display: eternalDisplay },
        { display: standardDisplay },
      ]);
    }, 150);
  };

  const changeFormat = () => {
    formatButton === true
      ? formatInfo(false, 'Eternal', '0', '1', 'none', 'initial')
      : formatInfo(true, 'Standard', '1', '0', 'initial', 'none');
  };

  const fadeOutElement = () => {
    setAlertStyle({ opacity: '1', display: 'flex', transition: '' });

    fadeOutWait(1000).then(() => {
      setAlertStyle({
        opacity: '0',
        display: 'flex',
        transition: 'opacity .75s linear',
      });
    });

    fadeOutWait(1500).then(() => {
      setAlertStyle({
        opacity: '0',
        display: 'none',
        transition: '',
      });
    });
  };

  useEffect(() => {
    document.title = `DRAFTBOYS - All Sets`;
  }, []);

  return (
    <div id='all-sets-container'>
      <h1 className='page-titles'>All Sets</h1>
      <button id='format-button' onClick={changeFormat}>
        {formatName}
      </button>
      <div id='standard-eternal-container'>
        <div
          id='standard-container'
          style={{ ...formatStyle[0], ...formatDisplay[0] }}
        >
          <h2 className='sets-header'>Standard</h2>
          <div>
            {standardSets.map((set: standardCardSet) => (
              <ul key={`${set.code} - list`}>
                <li>{set.name} -&nbsp;</li>
                <li>
                  <NavLink className='set-title' to={set.link}>
                    Draft
                  </NavLink>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div id='coming-soon' style={alertStyle}>
          <p>&nbsp;Fixing this set. Come back soon!</p>
        </div>
        <div
          id='eternal-container'
          style={{ ...formatStyle[1], ...formatDisplay[1] }}
        >
          <h2 className='sets-header'>Eternal</h2>
          <div>
            {eternalSets.map((set: eternalCardSet) => (
              <ul key={`${set.code} - list`}>
                <li>{set.name} -&nbsp;</li>
                <li>
                  <NavLink className='set-title' to={set.link}>
                    Draft
                  </NavLink>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
