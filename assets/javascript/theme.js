theme_button = document.getElementById('theme-button')

theme_button.addEventListener('click', function(){
    if(theme_button.classList.contains('dark')){
        theme_button.classList.toggle('dark')
        document.documentElement.style.setProperty('--bg-color', 'var(--light-bg)')
        document.documentElement.style.setProperty('--main-color', 'var(--light-main)')
        document.documentElement.style.setProperty('--content-color', 'var(--light-content)')
        document.documentElement.style.setProperty('--text-color', 'var(--light-text)')
    }else{
        theme_button.classList.toggle('dark')
        document.documentElement.style.setProperty('--bg-color', 'var(--dark-bg)')
        document.documentElement.style.setProperty('--main-color', 'var(--dark-main)')
        document.documentElement.style.setProperty('--content-color', 'var(--dark-content)')
        document.documentElement.style.setProperty('--text-color', 'var(--dark-text)')
    }
})