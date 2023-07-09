const slideLeft = document.getElementById('slideLeft')
const slideRight = document.getElementById('slideRight')
const sliderWrapper = document.querySelector('.sliderWrapper')
const slideItems = document.querySelectorAll('.slideItem')

slideLeft.addEventListener('click',(e) => {
    scrollTop(e)
})

slideRight.addEventListener('click',(e) => {
    scrollTop(e)
})

function scrollTop (e) {
    const totalMargin = slideItems.length / 3
    const slideObjectHeigh = slideItems[0].clientHeight + totalMargin
    if (e.target === slideLeft) {
        sliderWrapper.scrollTop -= slideObjectHeigh * 2
    } else {
        sliderWrapper.scrollTop += slideObjectHeigh * 2
    }
}