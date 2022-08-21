import { useState, useEffect } from 'react';
import axios from 'axios';
import { setTitle } from '../static/scripts/setTitle';
import { downloadDraft } from '../static/scripts/downloadDraft';

interface DraftCards {
  name: string;
  img: string;
  cmc: number;
}

// Draftd cards array for end screen/draft download
var draftedPack: Array<DraftCards> = [];

export const Draft = () => {
  const [hoverSource, setHoverSource] = useState();
  const [hoverShow, setHoverShow] = useState(false);
  const [packCount, setPackCount] = useState(1);
  const [draftCount, setDraftCount] = useState(0);
  const [passCount, setPassCount] = useState(0);

  const [packCards, setPackCards] = useState<Array<DraftCards>>([]);

  // Array of drafted cards
  const [draftedCards, setDraftedCards] = useState<Array<DraftCards>>([]);

  // Array of all 8 draft packs
  const [multiPackCards, setMultiPackCards] = useState<Array<[DraftCards]>>([]);

  // Array of completed draft cards
  const [endScreen, setEndScreen] = useState<Array<DraftCards>>([]);

  const [endScreenStyling, setEndScreenStyling] = useState({
    draft: 'flex',
    drafted: 'inline-block',
    end: 'none',
    headerSet: '',
    headerBtn: 'none',
  });

  // Hides drafted card title when draft is complete
  const [endMediaQ, setEndMediaQ] = useState('');

  // Timeout variable for clearing hovered image state
  let timeout: any = null;

  // Initial pack array
  let packArray: Array<DraftCards> = [];

  // Array of all 8 draft packs
  let multiPacksArray: any = [];

  // Filters card sets for specific card rarities
  const cardFilter = (type: any, amount: number) => {
    for (let i = 0; i < amount; i++) {
      let filteredCards = type[Math.floor(Math.random() * type.length)];

      packArray.push({
        name: filteredCards.name,
        img: filteredCards.card_image[0],
        cmc: filteredCards.cmc,
      });
    }

    // if (amount === 3 || amount === 10) {
    //   checkDuplicates(packArray, type);
    // }
  };

  // Checks array of cards for duplicates and replaces them with new, non-duplicate
  const checkDuplicates = (boosterPack: any, type: Function) => {
    let duplicateCount: number = 0;

    let cardsInPack = boosterPack.map((card: any) => {
      return card.name;
    });

    cardsInPack.some((card: any, idx: any) => {
      const checkedCard = cardsInPack.indexOf(card);
      if (checkedCard !== idx) {
        if (idx > -1) {
          if (boosterPack[idx].name === boosterPack[checkedCard].name) {
            boosterPack.splice(boosterPack[idx], 1);
            duplicateCount++;
          }
        }
      }

      if ((cardsInPack.indexOf(card) !== idx) === true) {
        checkDuplicates(boosterPack, type);
        cardFilter(type, duplicateCount);
      }
    });
  };

  // Drafts x amount of packs. Adds proper amount of common, uncommon, and rare/mythic cards to pack state
  const draftPack = (
    packsAmount: number,
    commons: Function,
    uncommons: Function,
    rareMythic: Function
  ) => {
    if (multiPacksArray.length > 0) {
      multiPacksArray.length = 0;
    }

    for (let i = 0; i < packsAmount; i++) {
      if (packArray.length > 0) {
        packArray = [];
      }

      cardFilter(commons, 10);
      cardFilter(uncommons, 3);
      cardFilter(rareMythic, 1);

      multiPacksArray.push(packArray);
    }

    setMultiPackCards(multiPacksArray);
    setPackCards(packArray);
  };

  // Fetches Specific Set to Draft
  const draftApiCall = async () => {
    const setCode: string = window.location.pathname.split('/')[2];

    if (setCode.length !== 3) {
      window.location.href = '/404-error';
    }

    axios
      .get(`/sets/${setCode}.json`)
      .then((res: any) => {
        const commons = res.data.filter((set: any) => {
          return set.rarity === 'common';
        });

        const uncommons = res.data.filter((set: any) => {
          return set.rarity === 'uncommon';
        });

        const rareMythic = res.data.filter((set: any) => {
          if (Math.random() <= 1 / 8) {
            return set.rarity === 'mythic';
          } else {
            return set.rarity === 'rare';
          }
        });

        draftPack(8, commons, uncommons, rareMythic);
      })
      .catch((err: Error) => {
        console.error(err);
      });
  };

  // Sets selected card hover state on mouse over
  const hoverZoom = (e: any) => {
    if (hoverShow === false) {
      timeout = setTimeout(() => {
        setHoverSource(e.src);
        setHoverShow(true);
      }, 500);
    } else {
      setHoverShow(false);
    }
  };

  // Removes selected card hover state on mouse exit
  const clearHoverZoom = () => {
    clearTimeout(timeout);
    setHoverShow(false);
  };

  // Adds card to drafted array
  const selectCard = (e: any) => {
    draftedPack.push({ name: e.alt, img: e.src, cmc: e.cmc });
    setDraftedCards([...draftedCards, { name: e.alt, img: e.src, cmc: e.cmc }]);
    setDraftCount(draftCount + 1);
    packCounter();
  };

  // Formats card name and image
  const cardIDFormat = (name: string, img: string) => {
    let formattedID = `{name: "${name}", img: "${img}"}`;

    return formattedID;
  };

  // Removes card from pack array
  const packRemove = (e: React.MouseEvent<HTMLElement>) => {
    multiPacksArray = multiPackCards;
    let card = e.target as HTMLElement;

    multiPacksArray[passCount].splice(card.id, 1);

    // Removes cards from other packs
    for (let j = 0; j < multiPacksArray.length; j++) {
      if (j !== passCount) {
        multiPacksArray[j].splice(
          Math.floor(Math.random() * multiPacksArray[j].length),
          1
        );
      }
    }

    setMultiPackCards(multiPacksArray);
  };

  // Sets which draft pack is visible
  const packPassCount = () => {
    if (passCount === 7) {
      setPassCount(0);
    } else {
      setPassCount(passCount + 1);
    }
  };

  // Sets array of completed draft card names for download
  const downloadFormat = (draftedCards: Array<DraftCards>) => {
    let downloadArray: string[] = [];

    for (let i = 0; i < draftedCards.length; i++) {
      downloadArray.push(draftedCards[i].name);
    }

    return downloadArray.join('\n');
  };

  // Sets pack count
  const packCounter = () => {
    if (draftCount === 13) {
      setPackCount(2);
      draftApiCall();
    } else if (draftCount === 27) {
      setPackCount(3);
      draftApiCall();
    } else if (draftCount === 41) {
      setEndScreenStyling({
        draft: 'none',
        drafted: 'none',
        end: 'flex',
        headerSet: 'none',
        headerBtn: 'initial',
      });
      setEndMediaQ('none');
      setEndScreen(draftedPack);
      downloadFormat(endScreen);
    }
  };

  useEffect(() => {
    draftApiCall();

    document.title = `DRAFTBOYS - ${setTitle()}`;
  }, []);

  return (
    <div id='draft-page-container'>
      <div
        className='header-container'
        style={{ display: endScreenStyling.headerSet }}
      >
        <div></div>
        <div>
          <h1>{setTitle()}</h1>
        </div>
        <div id='draft-count'>
          <p>
            Pack: {packCount} | Drafted: {draftCount}
          </p>
        </div>
      </div>

      <div className='header-container'>
        <button
          style={{
            display: endScreenStyling.headerBtn,
            width: '175px',
            margin: 'auto',
            marginBottom: '15px',
          }}
          onClick={() => {
            downloadDraft(downloadFormat(draftedPack), 'draft.txt');
          }}
        >
          Download Draft
        </button>
      </div>

      <img
        id='hover-card'
        src={hoverSource}
        style={
          hoverShow
            ? {
                display: 'flex',
                position: 'absolute',
                left: '0',
                right: '0',
                margin: 'auto',
                objectFit: 'cover',
                borderRadius: '4%',
                border: '2px solid grey',
                boxShadow: '2px 2px 8px',
                height: '50%',
              }
            : { display: 'none' }
        }
      />
      <div id='draft-area'>
        <div
          className='draft-cards'
          style={{ display: endScreenStyling.draft }}
        >
          {multiPackCards[passCount]?.map((card, i) => (
            <img
              className='cards'
              src={card.img}
              alt={card.name}
              onClick={(e) => {
                selectCard(e.target);
                packRemove(e);
                packPassCount();
              }}
              key={i}
            ></img>
          ))}
        </div>

        <div
          className='draft-cards end-screen'
          style={{ display: endScreenStyling.end, width: '100%' }}
        >
          {endScreen.map((card) => (
            <img
              className='cards'
              src={card.img}
              alt={card.name}
              onClick={(e) => {
                selectCard(e.target);
                packRemove(e);
                packPassCount();
              }}
              id={`{name: "${card.name}", img: "${card.img}"}`}
            ></img>
          ))}
        </div>
        <div id='selected-name'>
          <p style={{ display: endMediaQ }}>Drafted Cards:</p>
        </div>
        <div id='selected-cards' style={{ display: endScreenStyling.drafted }}>
          <ul>
            {draftedCards.map((card, i) => (
              <li key={i}>
                <img
                  className='cards'
                  src={card.img}
                  alt={card.name}
                  onMouseEnter={(e) => {
                    hoverZoom(e.target);
                  }}
                  onMouseLeave={clearHoverZoom}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
