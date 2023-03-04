let card = document.querySelector('.card')

card.addEventListener('click', function (event) {
    this.classList.toggle('open');
})