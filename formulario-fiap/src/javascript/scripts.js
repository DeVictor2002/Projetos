document.addEventListener("DOMContentLoaded", function() {
    const birthDateInput = document.querySelector('.birthDate');
    
    birthDateInput.addEventListener('input', function() {
        let value = this.value;
        let formattedValue = '';
        if (value.length <= 2) {
            formattedValue = value.replace(/\D/g, '').slice(0, 2);
        } else if (value.length <= 4) {
            formattedValue = value.replace(/\D/g, '').slice(0, 2) + '/' + value.replace(/\D/g, '').slice(2, 4);
        } else {
            formattedValue = value.replace(/\D/g, '').slice(0, 2) + '/' + value.replace(/\D/g, '').slice(2, 4) + '/' + value.replace(/\D/g, '').slice(4, 8);
        }
        this.value = formattedValue;
    })});