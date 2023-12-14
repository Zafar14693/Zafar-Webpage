const scriptURL = 'https://docs.google.com/spreadsheets/d/1tA9-jlnK3JFcYPaeB2jJsadNo2pIGcJhWBQyDBwteBA/edit?usp=drivesdk'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully Asad is Connect with you." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})