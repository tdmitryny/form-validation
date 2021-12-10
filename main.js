const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');





const showError = function (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = document.querySelector('small');
    small.textContent = message;
}


const showSuccess = function (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'

}


function validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

const checkRequired = function (inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${showFirstLetter(input)} is requred`);
        } else {
            showSuccess(input)
        }



    })
}

const showFirstLetter = function (input) {
    return input.id.charAt(0).toUpperCase().slice(0) + input.id.slice(1)
}



function clickLength(input, min, max) {
    if (input.value.length > max) {
        showError(username, `${showFirstLetter(input)} length must be ${min} and ${max}`);
        showError(password)
    } else if (input.value.length < min) {
        showError(username, `${showFirstLetter(input)} length must be ${min} and ${max}`)
    }
}

//Check name
form.addEventListener('submit', function (e) {
    e.preventDefault()
    checkRequired([username, email, password, password2]);
    clickLength(username, 3, 15);
    clickLength(password, 6, 8);

    // if (username.value === '') {
    //     showError(username, 'User name is requred');
    // } else {
    //     showSuccess(username);
    // }



    // if (email.value === '') {
    //     showError(email, 'Email is requred');
    // } else if (!validEmail(email)) {
    //     showError(email, 'Email is not valid')
    // } else {
    //     showSuccess(email);
    // }


    // if (password.value === '') {
    //     showError(password, 'Password is requred');
    // } else {
    //     showSuccess(password);
    // }


    // if (password2.value === '') {
    //     showError(password2, 'Password 2 is requred');
    // } else {
    //     showSuccess(password2);
    // }




})