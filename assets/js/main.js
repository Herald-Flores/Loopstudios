const navToggler = document.querySelector('.navbar-toggler')

navToggler.addEventListener('click', () => {
  console.log('clicked')
  document.body.classList.toggle('not-scroll')
  navToggler.classList.toggle('active')
  document.querySelector('.navbar-collapse').classList.toggle('show')
})
