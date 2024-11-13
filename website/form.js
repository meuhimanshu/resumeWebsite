function validateForm() {
    const phoneInput = document.querySelector('input[name="phone"]');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
        alert('Please enter a valid 10-digit phone number.');
        document.getElementById('phoneError').classList.remove('hidden');
        return false;
    } else {
        document.getElementById('phoneError').classList.add('hidden');
    }
    return true;
}