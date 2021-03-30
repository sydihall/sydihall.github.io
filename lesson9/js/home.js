window.addEventListener('load', async ()=> {
    async function fetchTowns(){
        let resp;
        await fetch("https://byui-cit230.github.io/weather/data/towndata.json")
        .then((response) => response.json())
        .then((jsonObject) => {
            const towns = jsonObject.towns;
            resp = towns;
        });
        return resp;
    }

    let townsObject= await fetchTowns();
    console.log("townsObject");
    const towns = {"Fish Haven": 'fish-haven', Preston: 'preston', "Soda Springs": 'soda-springs'}

    for (let i=0; i<townsObject.length; i++) {
        if (townsObject[i].name in towns) {
            const selector = towns[townsObject[i].name];
            document.querySelector(`section.${selector} h1`).innerHTML = townsObject[i].name
            document.querySelector(`section.${selector} h2`).innerHTML = townsObject[i].motto
            document.querySelector(`section.${selector} p.founded`).innerHTML = `Year Founded: ${townsObject[i].yearFounded}`
            document.querySelector(`section.${selector} p.population`).innerHTML = `Population: ${townsObject[i].currentPopulation}`
            document.querySelector(`section.${selector} p.rainfall`).innerHTML = `Rain Fall: ${townsObject[i].averageRainfall}`
            document.querySelector(`section.${selector} div img`).src = `images/${selector}.jpg`;
            document.querySelector(`section.${selector} div img`).alt = `Images of Idaho ${townsObject[i].name}`;
        }
    }
});