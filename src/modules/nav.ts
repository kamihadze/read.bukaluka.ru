export function initNav() {
  const nav = document.getElementById('nav')
  const menuBtn = document.getElementById('menuBtn')
  const navLinks = document.getElementById('navLinks')

  if (!nav || !menuBtn || !navLinks) return

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50)
  })

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navLinks.classList.toggle('open')
  })

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navLinks.classList.remove('open')
    })
  })
}
