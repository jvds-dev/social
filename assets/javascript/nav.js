const home = document.getElementById('home');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
function active_section(section){
    if(section=='home'){
        home.classList.add('visible');
        about.classList.remove('visible');
        projects.classList.remove('visible');
        contact.classList.remove('visible');
    } else if(section=='about'){
        home.classList.remove('visible');
        about.classList.add('visible');
        projects.classList.remove('visible');
        contact.classList.remove('visible');
    } else if(section=='projects'){
        home.classList.remove('visible');
        about.classList.remove('visible');
        projects.classList.add('visible');
        contact.classList.remove('visible');
    } else if(section=='contact'){
        home.classList.remove('visible');
        about.classList.remove('visible');
        projects.classList.remove('visible');
        contact.classList.add('visible');
    } else{
        console.log('erro')
    }

}