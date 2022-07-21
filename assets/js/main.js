const navToggler = document.querySelector('.navbar-toggler')

navToggler.addEventListener('click', () => {
  console.log('clicked')
  document.body.classList.toggle('not-scroll')
  navToggler.classList.toggle('active')
  document.querySelector('.navbar-collapse').classList.toggle('show')
})

window.addEventListener('scroll', () => {
  const scrollFromTop = window.pageYOffset
  const header = document.querySelector('.main-header')
  if (scrollFromTop > 40) {
    console.log('scrolled')
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})
