const requestURL = 'https://www.ahfx.com/person.php';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const person = jsonObject['person'];
        console.table(jsonObject);
        console.log('Javascript is working');

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pass = document.createElement('p');
        let email = document.createElement('p');
        let eye = document.createElement('p');
        let city = document.createElement('p');
        let children = document.createElement('p');
        let ipAdd = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = 'Name: ' + person.personal.name + ' ' + person.personal.last_name;
        pass.textContent = 'Password: ' + person.online_info.password;
        email.textContent = 'Email: ' + person.online_info.email;
        eye.textContent = 'Eye Color: ' + person.personal.eye_color;
        city.textContent = 'City: ' + person.personal.city;
        children.textContent = 'Number of Children: ' + person.marriage.children;
        ipAdd.textContent = 'IP Address: ' + person.online_info.ip_address;
        img.setAttribute('src', 'https://thispersondoesnotexist.com/image');

        card.appendChild(h2);
        card.appendChild(pass);
        card.appendChild(email);
        card.appendChild(eye);
        card.appendChild(city);
        card.appendChild(children);
        card.appendChild(ipAdd);
        card.appendChild(img);

        document.querySelector('div.person').appendChild(card);
    });