document.addEventListener('DOMContentLoaded', () => {
    const otpInput = document.getElementById('otp');
    const generateOtpButton = document.getElementById('generate-otp');
    const signupForm = document.getElementById('signup-form');
    let generatedOtp;  

    generateOtpButton.addEventListener('click', generateOTP);
    signupForm.addEventListener('submit', handleFormSubmit);

    function generateOTP() {
        generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
        alert('Your OTP is: ' + generatedOtp);  
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const otpValue = otpInput.value.trim();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (otpValue === generatedOtp) {
            alert('Sign-Up Successful!');
            
            localStorage.setItem('user', JSON.stringify({ username, email, password }));
            
            window.location.href = 'login.html';
        } else {
            alert('Invalid OTP. Please try again.');
        }
    }
});
