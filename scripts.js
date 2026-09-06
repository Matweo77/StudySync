document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#signup-form')
  const email = document.querySelector('#academic-email')
  const message = document.querySelector('#form-message')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!email.value.trim() || !email.checkValidity()) {
      email.reportValidity()
      return
    }
    message.className = 'success-message'
    message.textContent = '¡Listo! Te avisaremos cuando abramos la beta.'
    form.reset()
  })
 
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'))
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
})
