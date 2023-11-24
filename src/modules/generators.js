const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateUpperCase = () => String.fromCharCode(rand(65, 91));
const generateLowerCase = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbols = '\'.,:;-_<>|!"@#£$§%€()[]{}=?«»+*¨`´~^';
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function passwordGenerator(
    amount, uppercase, lowercase, numbers, symbols
  ) {
  const passwordArray = [];
  amount = Number(amount);

  for (let i = 0; i < amount; i++) {
    uppercase && passwordArray.push(generateUpperCase());
    lowercase && passwordArray.push(generateLowerCase());
    numbers && passwordArray.push(generateNumber());
    symbols && passwordArray.push(generateSymbol());
  }

  return passwordArray.join('').slice(0, amount);
}
