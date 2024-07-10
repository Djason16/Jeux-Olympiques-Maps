document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('#file, #name, #people, #cost, #title, #text');
    const validateBtn = document.getElementById('validate');

    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.type === 'file') {
                if (input.files.length === 0) {
                    allFilled = false;
                }
            } else if (input.value.trim() === '') {
                allFilled = false;
            }
        });
        validateBtn.disabled = !allFilled;
    }

    inputs.forEach(input => {
        input.addEventListener('input', checkInputs);
        if (input.type === 'file') {
            input.addEventListener('change', checkInputs);
        }
    });

    validateBtn.addEventListener('click', function () {
        if (!validateBtn.disabled) {
            const formData = {
                file: document.getElementById('file').files[0].name,
                name: document.getElementById('name').value,
                time: document.getElementById('time').value,
                people: document.getElementById('people').value,
                cost: document.getElementById('cost').value,
                title: document.getElementById('title').value,
                text: document.getElementById('text').value,
            };
            localStorage.setItem('formData', JSON.stringify(formData));
            alert('Form data saved to localStorage!');
            console.log(formData);
        }
    });

    checkInputs();
});
