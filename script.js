import Swup from 'https://unpkg.com/swup@4?module';
const swup = new Swup();

const button = document.getElementsByClassName('button')[0]
const links = document.getElementsByClassName('tab-but-container')[0]

button.addEventListener('click', () => {
    links.classList.toggle('clicked')
})

links.addEventListener('click', () => {
    links.classList.toggle('clicked')
})