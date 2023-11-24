import passwordGenerator from './generators';

const generatedPassword = document.querySelector('.generated-password');
const chrAmount = document.querySelector('.chr-amount');
const chkUpper = document.querySelector('.chk-upper');
const chkLower = document.querySelector('.chk-lower');
const chkNumbers = document.querySelector('.chk-numbers');
const chkSymbols = document.querySelector('.chk-symbols');
const generatePassword = document.querySelector('.generate-password');

export default () => {
  generatePassword.addEventListener('click', () => {
    generatedPassword.innerHTML = generate();
  });
};

function generate() {
  const password = passwordGenerator(
    chrAmount.value,
    chkUpper.checked,
    chkLower.checked,
    chkNumbers.checked,
    chkSymbols.checked
  );

  return password || 'Nothing checked.';
};