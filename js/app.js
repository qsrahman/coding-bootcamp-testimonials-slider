'use strict'

let index = 0

function showSlide(num) {
  const slides = document.querySelectorAll('.slide');

  index = num % slides.length

  // console.log(index)

  slides.forEach(slide => {
    slide.style.display = 'none'
  })

  slides[index].style.display = 'flex'
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(index -= 1)
})

document.querySelector('.next').addEventListener('click', () => {
  showSlide(index += 1)
})

showSlide(index)
