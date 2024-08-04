console.log('JavaScript file is linked');

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    if (username === '' || password === '') {
        errorElement.textContent = 'Please fill in both fields.';
        console.log('Fields are empty');
    } else {
        errorElement.textContent = '';
        alert('Login successful');
        console.log('Login successful');
        // Here you can add code to handle the login, such as sending a request to a server.
    }
});
