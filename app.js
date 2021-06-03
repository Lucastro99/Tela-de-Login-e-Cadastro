const sing_in_btn = document.querySelector('#sign-in-button');
const sing_up_btn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');
const form = document.querySelector('.signin-signup')
sing_up_btn.addEventListener('click', () => {
    form.classList.remove('fade-in');
    container.classList.add('sign-up-mode');
    form.classList.add('fade-in');
});

sing_in_btn.addEventListener('click', () => {
    form.classList.remove('fade-in');
    container.classList.remove('sign-up-mode');
    form.classList.add('fade-in');
});