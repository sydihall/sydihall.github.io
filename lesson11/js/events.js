// window.addEventListener('load', (e)=>{
//     const url = 'http://www.ahfx.com/events.php';

//     fetch(url)
//     .then(result => result.json())
//     .then(jsonResult =>{
//         console.log(jsonResult);
//         for(let i = 0; i < jsonResult.length; i++){
//             let card = document.createElement('section');
//             let h2 = document.createElement('h2');
//             let startTime = document.createElement('h3');
//             let endTime = document.createElement('h3');
//             let tags = document.createElement('p');

//             h2.textContent = jsonResult[i].properties.name;
//             startTime.textContent = jsonResult[i].properties.start;
//             endTime.textContent = jsonResult[i].properties.end;
//             tags.textContent = jsonResult[i].tags;

//             card.appendChild(h2);
//             card.appendChild(startTime);
//             card.appendChild(endTime);
//             card.appendChild(tags);
            
//             document.querySelector('div.card-' + i+1).appendChild(card);

//             console.log(card);
//             console.log(tags);
//             // for(let i = 0; jsonResult[i].tags.length; i++){

//             // }

//         } 
//     })
// })

window.addEventListener('load', (e)=>{
    const url = 'http://www.ahfx.com/events.php';

    fetch(url)
    .then(result => result.json())
    .then(jsonResult =>{
        console.log(jsonResult);
        buildCard(jsonResult[0]);
        Object.entries(jsonResult).forEach(([key, item])=>{
            buildCard(item);    
        });
    })
})

function buildCard(item){
    let card = document.createElement('section');
    card.classList.add('calendar');
 
    card.innerHTML = `
        <p>${item.tags}</p>
        <h3>${item.properties.name}</h3>
        <h4>${item.properties.start}</h4>
        <h4>${item.properties.end}</h4>
        <a href="${item.properties.url}">View in my time</a>
    `
    document.querySelector('#content').appendChild(card);
    console.log(card);
}