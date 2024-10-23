/*document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById("registration-form")
    const feedbackDiv = document.getElementById("form-feedback")
    form.addEventListener('submit',function(event){
        event.preventDefault();   
        const username = document.getElementById('username').value.trim()
        const email = document.getElementById('email').value.trim()
        const password = document.getElementById('password').value.trim()
        let isValid = true;
        let messages = [];
        if (username.length < 3 ){
            isValid = false
            messages.push('Username must be at least 3 characters long.')
        }
        if (!email.includes('@')|| !email.includes('.') ){
            isValid = false
            messages.push('please enter a valid email.')
        }
        if (password.length < 8 ){
            isValid = false
            messages.push('password must be at least 8 characters long.')
        }
        feedbackDiv.style.display = "block"
        if (isValid === true ){
            feedbackDiv.textContent = 'Registration successful!'
            feedbackDiv.style.color = "#28a745"
        }else{
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'
        }
    })
})*/

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation (use 'includes' instead of 'include')
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        feedbackDiv.style.display = "block"; // Show the feedback div

        // Show feedback based on validity
        if (isValid === true) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Display error messages
            feedbackDiv.style.color = '#dc3545'; // Red color for error
        }
    });
});