const heroBtnOne = document.querySelector('.hero__btn_one')
const heroBtnTwo = document.querySelector('.hero__btn_two')
const cardOne = document.querySelector('.hero__content')
const cardTwo = document.querySelector('.hero__content-two')

heroBtnOne.addEventListener('click', () => {
    heroBtnOne.style.background = 'rgb(59, 23, 23)'
    cardOne.style.display = 'grid'
    cardTwo.style.display = 'none'
    heroBtnTwo.style.background = '#D5621D0D'

})

heroBtnTwo.addEventListener('click', () => {
    heroBtnTwo.style.background = 'rgb(59, 23, 23)'
    cardTwo.style.display = 'block'
    cardOne.style.display = 'none'
    heroBtnOne.style.background = '#D5621D0D'

})


const btnLeft = document.querySelector('.arrow__btn-one')
const btnRight = document.querySelector('.arrow__btn-two')
const menuOne = document.querySelector('.kitchen__grids_one')
const menuTwo = document.querySelector('.kitchen__grids_two')

btnLeft.addEventListener('click', () => {
    menuTwo.style.display = 'none'
    menuOne.style.display = 'grid'
    btnRight.style.display = 'block'
})

btnRight.addEventListener('click', () => {
    menuOne.style.display = 'none'
    menuTwo.style.display = 'grid'
    btnRight.style.display = 'none'
})




