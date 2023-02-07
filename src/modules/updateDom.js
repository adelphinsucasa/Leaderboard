import arrayScores from './listOfScores.js';

const updateDom = () => {
  let cAux = '';
  arrayScores.forEach((item) => {
    cAux += `<li>${item.cName}: ${item.nScore}</li>`;
  });
  document.getElementById('playersList').innerHTML = cAux;
};

export default updateDom;