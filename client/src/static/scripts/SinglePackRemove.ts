export const singlePackRemove = (
  updateState: Function,
  boosterPack: Array<any>,
  formatter: Function,
  card: HTMLElement
) => {
  updateState(
    boosterPack.filter(
      (boosterPack) => formatter(boosterPack.name, boosterPack.img) !== card.id
    )
  );
};
