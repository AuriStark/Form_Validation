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
    const fornControl = input.parentElement;
    fornControl.calssName = 'form-control success';
}

function isValidEmail(express) {
    return false;
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
        if (isValidEmail(email)) {
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
        if (password === password2) {
            showSuccess(password2);
        } else {
            showError(password2, 'Password doesn\'t match is Required ');
        }
    } else {
        showError(password2, 'Password confirm is Required ');
    }
})