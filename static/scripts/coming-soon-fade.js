const fadeOutWait = (time) => {
  return new Promise((res) => setTimeout(res, time));
};

const fadeOutElement = () => {
  const comingSoonElement = document.getElementById('coming-soon');

  comingSoonElement.style.opacity = '1';
  comingSoonElement.style.display = 'flex';

  fadeOutWait(500).then(() => {
    comingSoonElement.style.opacity = '0';
    comingSoonElement.style.transition = 'opacity .75s linear';
  });

  fadeOutWait(1250).then(() => {
    comingSoonElement.style.display = 'none';
  });

  comingSoonElement.style.transition = '';
};
