const darkLightBtn = document.querySelector('#switch')

darkLightBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('is-dark')
    darkLightBtn.classList.toggle('theme-toggle')
})