import { AddPlayer, GetPlayers } from './apiManagement.js';

const btnRefresh = document.querySelector('.btnRefresh');
const formAddNewData = document.querySelector('.formAddNewData');
const txtName = document.getElementById('name');
const txtScore = document.getElementById('score');
const picture = document.getElementById('pictures');
const imgBG = document.createElement('img');

const updateDom = () => {
  let cAux = '';
  GetPlayers()
    .then((data) => {
      data.result.sort((a, b) => a.score - b.score).forEach((item) => {
        cAux += `<li>${item.user}: ${item.score}</li>`;
      });
      document.getElementById('playersList').innerHTML = cAux;
    });
};

imgBG.setAttribute('src', './assets/images/GameBackground.jpg');
imgBG.setAttribute('alt', 'Game Background');
picture.appendChild(imgBG);
if (window.matchMedia('(max-width: 767px)').matches) {
  picture.appendChild(imgBG.cloneNode(true));
}

btnRefresh.addEventListener('click', () => {
  document.getElementById('playersList').innerHTML = '';
  updateDom();
});

formAddNewData.addEventListener('submit', (e) => {
  let newErr = false;
  e.preventDefault();

  if (txtName.value.trim() === '') {
    newErr = true;
  }
  if (txtScore.value.trim() === '') {
    newErr = true;
  } else if (Number.isNaN(txtScore.value.trim())) {
    newErr = true;
  }

  if (!newErr) {
    const aPlayer = {
      user: txtName.value,
      score: Number(txtScore.value),
    };
    AddPlayer(aPlayer)
      .then(() => formAddNewData.submit());
  }
});

export default updateDom;