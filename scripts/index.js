const cardTemplate = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');

function handleDeleteCard(cardElement) {
  cardElement.remove();
}

function createCard(cardData, deleteCardCallback) {
  const cardElement = cardTemplate.content.cloneNode(true).children[0];
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  deleteButton.addEventListener('click', () => deleteCardCallback(cardElement));

  return cardElement;
}

function renderInitialCards() {
  initialCards.forEach((cardData) => {
    const card = createCard(cardData, handleDeleteCard);
    placesList.append(card);
  });
}

renderInitialCards();
