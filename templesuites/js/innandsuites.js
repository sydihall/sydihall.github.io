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

        }
    };
