const scriptURL = 'https://script.google.com/macros/s/AKfycbzb2QLp8awHSe6DGF7i-ZOyXH1-gNwF7ork5GNMSOBo36Hk-VATSkQvQZ1EaBbIxiUX/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})