// index.js

// Callbacks
const handleClick = (ramen) => {
  const detailImageElement = document.querySelector('.detail-image')
  detailImageElement.src = ramen.image
  const nameElement = document.querySelector('.name')
  nameElement.textContent = ramen.name
  const restaurantElement = document.querySelector('.restaurant')
  restaurantElement.textContent = ramen.restaurant
  const ratingDisplayElement = document.getElementById('rating-display')
  ratingDisplayElement.textContent = ramen.rating
  const commentDisplayElement = document.getElementById('comment-display')
  commentDisplayElement.textContent = ramen.comment
};

const addSubmitListener = () => {
  const newRamenFormElement = document.getElementById('new-ramen')
  newRamenFormElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const newNameInputElement = document.getElementById('new-name')
    const newRestaurantInputElement = document.getElementById('new-restaurant')
    const newImageInputElement = document.getElementById('new-image')
    const newRatingInputElement = document.getElementById('new-rating')
    const newCommentInputElement = document.getElementById('new-comment')

    const newRamen = {
      name: newNameInputElement.value,
      restaurant: newRestaurantInputElement.value,
      image: newImageInputElement.value,
      rating: newRatingInputElement.value,
      comment: newCommentInputElement.value
    }

    const imgElement = document.createElement('img')
    imgElement.src = newRamen.image
    const ramenMenuDivElement = document.getElementById('ramen-menu')
    ramenMenuDivElement.appendChild(imgElement)
    imgElement.addEventListener('click', () => {
      handleClick(newRamen)
    })
  })
}

const displayRamens = () => {
  const ramenMenuDivElement = document.getElementById('ramen-menu')
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(ramens => {
    ramens.forEach(ramen => {
      const imgElement = document.createElement('img')
      imgElement.src = ramen.image
      ramenMenuDivElement.appendChild(imgElement)
      imgElement.addEventListener('click', () => {
        handleClick(ramen)
      })
    })
  })
};

const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
    displayRamens()
    addSubmitListener()
  })
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
