const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email.value, re.test(String(email.value).toLowerCase()));
    return re.test(String(email.value).toLowerCase());
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("JS Works");
    if (username.value != '') {
        showSuccess(username)
    } else {
        showError(username, 'Username is Required');
    }

    if (email.value != '') {
        if (validateEmail(email)) {
            showSuccess(email);
        } else {
            showError(email, 'Give a Valid Email Format')
        }
    } else {
        showError(email, 'Email is Required')
    }
    if (password.value != '') {
        showSuccess(password);
    } else {
        showError(password, 'Password is Required');
    }
    if (password2.value != '') {
        if (password.value === password2.value) {
            showSuccess(password2);
        } else {
            showError(password2, 'Password doesn\'t match');
        }
    } else {
        showError(password2, 'Password confirm is Required ');
    }
})