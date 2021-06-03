const sing_in_btn = document.querySelector('#sign-in-button');
const sing_up_btn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');
const form = document.querySelector('.signin-signup')
sing_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
    form.classList.add('fade-in');
    setTimeout(() => {
        form.classList.remove('fade-in');
    }, 1500);
});

sing_in_btn.addEventListener('click', () => {
    form.classList.add('fade-in');
    container.classList.remove('sign-up-mode');
    setTimeout(() => {
        form.classList.remove('fade-in');
    }, 1500);
});