let form = document.querySelector("#requestform");
form.addEventListener("submit", handleFormSubmit)

let nameInput = document.querySelector('#username');
let descInput = document.querySelector('#userdesc');

nameInput.addEventListener('input', validateName)
descInput.addEventListener('input', validateDesc)

let nameValid = false;
let descValid = false;

function handleFormSubmit(event) {
    var errors = [];

    if (!nameValid) {
    errors.push('Name cannot be empty and longer than 2 characters.');
    }
    if (!descValid) {
    errors.push('Description must not be empty and longer than 5 characters.');
    }
    // Display errors in the modal
    if(!nameValid || !descValid){
        event.preventDefault();
        console.log("ERROR!!!")
        showErrorModal(errors);
    }
}

function validateDesc() {
    let desc = descInput.value.trim();
    
    if (desc.length <= 5) {
        descInput.classList.remove('is-valid');
        descInput.classList.add('is-invalid');
        descValid = false;
    } else {
        descInput.classList.remove('is-invalid');
        descInput.classList.add('is-valid');
        descValid = true;
    }
}

function validateName() {
    let name = nameInput.value.trim();
    
    if (name.length < 2) {
        nameInput.classList.remove('is-valid');
        nameInput.classList.add('is-invalid');
        nameValid = false;
    } else {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
        nameValid = true;
    }
  }
  
  function showErrorModal(errors) {
    const errorMessagesContainer = document.getElementById('errorMessages');
  
    errorMessagesContainer.innerHTML = '';
    errors.forEach(error => {
      const errorMessageElement = document.createElement('p');
      errorMessageElement.textContent = error;
      errorMessagesContainer.appendChild(errorMessageElement);
    });
  
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    errorModal.show();
  }