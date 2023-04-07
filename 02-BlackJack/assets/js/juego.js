let deck = [];
const tipos = ['C', 'H', 'D', 'S'];
const especiales = [ 'A', 'J', 'Q', 'K' ];

//Esta función crea una nueva baraja

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
  
  deck = _.shuffle(deck);
  console.log(deck);
  return deck
};

crearDeck();


//Esta función me permite una carta

const pedirCarta = () => {
  return "2C"
}
