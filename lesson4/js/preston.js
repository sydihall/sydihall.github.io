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
});
