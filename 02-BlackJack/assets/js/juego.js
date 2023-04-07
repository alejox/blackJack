let deck = [];
const tipos = ['C', 'H', 'D', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  console.log(deck);
};

crearDeck();
