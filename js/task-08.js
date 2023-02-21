const form = document.querySelector('form');

form.addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault();

    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
        alert(`Всі поля повинні бути заповнені`);
        return
    }

    const formData = {
    email: emailInput.value,
    password: passwordInput.value
  };

    console.log(formData);
    
    form.reset()
}



