const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

btn.addEventListener('click', () => {
     btn.classList.toggle('open')
     nav.classList.toggle('flex')
     nav.classList.toggle('hidden')
})

form.addEventListener('submit', (e) =>{
     e.preventDefault();
     let messages = []
     if (email.value === '' || email.value == null) {
       messages.push('Name is required')
     }
     if (messages.length > 0) {
          e.preventDefault()
          errorElement.innerText = messages.join(', ')
     }
})