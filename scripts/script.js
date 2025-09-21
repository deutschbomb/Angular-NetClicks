
const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

const movies = [
    {
        id: 0,
        title: 'Марсианин 1',
        original: 'The Martian 2015',
        description: 'Фантастика, приключения',
        rating: 7.8,
        link: './martian.html',
        image: './media/images/martian.png'
    },
    {
        id: 1,
        title: 'Марсианин 2',
        original: 'The Martian 2015',
        description: 'Фантастика, приключения',
        rating: 7.8,
        link: './martian.html',
        image: './media/images/martian.png'
    },
    {
        id: 2,
        title: 'Марсианин 3 ',
        original: 'The Martian 2015',
        description: 'Фантастика, приключения',
        rating: 7.8,
        link: './martian.html',
        image: './media/images/martian.png'
    }
]

const render = (array) => {
    cardWrapper.innerHTML = ''

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
                <a href="${item.link}" class="content-cards__item">
                    <div class="content-cards__item__img">
                        <img src="${item.image}" alt="martian" />
                    </div>

                    <div class="content-cards__item__title">
                        <h5>${item.title},</h5>
                        <span>${item.original}</span>
                    </div>

                    <p class="content-cards__item__description">${item.description}</p>

                    <p class="content-cards__item__rating">${item.rating}</p>
                </a>
            `)
    })
}

searchButton.addEventListener('click', () => {
    render(movies.filter((item) => item.title.includes(searchInput.value)))
})

render(movies)
