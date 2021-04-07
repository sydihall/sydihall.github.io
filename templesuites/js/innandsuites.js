window.addEventListener('load',(event)=>{
    // add code here to run when page loads
    const menubutton = document.querySelector('.menu');
    const mainnav = document.querySelector('.navigation')   
    
    menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
    // To solve the mid resizing issue with responsive class on
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});

window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;
  
    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();
  
    const b =document.querySelector("#banner");
    today = new Date().getDay();
    if (today==5){
        b.style.display = "block";
    }
  });

const URL = 'https://sydihall.github.io/templesuites/js/temples.json';

fetch(URL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];

    for(i = 0; i < temples.length; i++){
        if(temples[i].name == 'Houston Texas'|| temples[i].name == 'Dallas Texas'|| temples[i].name == 'San Antonio Texas' || temples[i].name == 'Lubbock Texas' ){
            let temple_name  = document.createElement('section');
            let text = document.createElement('div');
            let h1 = document.createElement('h1');    
            let address = document.createElement('p');
            let email = document.createElement('p');
            let phone = document.createElement('p');
            let services = document.createElement('p');
            let history = document.createElement('p');
            let closure = document.createElement('p');


            image.setAttribute('src', 'images/' + temples[i].image);
            h1.textContent = temples[i].name;
            address.textContent = 'Address: ' + temples[i].address;
            email.textContent = 'Email: ' + temples[i].email;
            phone.textContent = 'Phone: ' + temples[i].phone;
            services.textContent = 'Services: ' + temples[i].services;
            history.textContent = 'History: ' + temples[i].history;
            closure.textContent = 'Closure: ' + temples[i].closure;
            

            text.appendChild(h1);
            text.appendChild(hr)
            text.appendChild(address);
            text.appendChild(email);
            text.appendChild(phone);
            text.appendChild(services);
            text.appendChild(history);
            text.appendChild(closure);

            temple_name.appendChild(text);
            temple_name.appendChild(image);

            if(temples[i].name == 'Houston Texas Temple'){
                document.getElementById('houston').appendChild(temple_name);
              }
              else if(temples[i].name == 'Dallas Texas Temple'){
                document.getElementById('dallas').appendChild(temple_name);
              }
              else if (temples[i].name == 'San Antonio Temple'){
                document.getElementById('sanantonio').appendChild(temple_name);
              }
              else if (temples[i].name == 'Lubbock Texas Temple'){
                document.getElementById('lubbock').appendChild(temple_name);
              }
            }
          };

        }
    }});
