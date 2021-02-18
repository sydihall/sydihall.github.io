/*window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();
})*/

window.addEventListener('load', (event)=>{
    const b = document.querySelector ("#ban");
    today = new Date().getDay();
    if (today==5){
        b.style.display = "block";
    }
    const hambutton = document.querySelector('.ham');
    const nav = document.querySelector('#navigation');
    hambutton.addEventListener('click',() => {nav.classList.toggle('responsive');}, false);

    window.onresize = () => { if (window.innerWidth > 552) nav.classList.remove('responsive'); };

});
