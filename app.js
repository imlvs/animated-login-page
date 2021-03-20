const inputs = document.querySelectorAll('input');
const wel = document.getElementById('wel');


inputs.forEach(input => {
    input.addEventListener('focus', () => {
        let parent = input.parentNode;
        parent.classList.add('focus');
    });
    input.addEventListener('blur', () => {
        let parent = input.parentNode;
        if (input.value == "") {
            parent.classList.remove('focus');
        }
    });
});
