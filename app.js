fetch('https://corona.lmao.ninja/v2/countries/pakistan')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    document.getElementById('active').innerHTML = data.active.toLocaleString();
    document.getElementById('cases').innerHTML = data.cases.toLocaleString();
    document.getElementById('critical').innerHTML = data.critical.toLocaleString();
    document.getElementById('death').innerHTML = data.deaths.toLocaleString();
    document.getElementById('recovered').innerHTML = data.recovered.toLocaleString();
    document.getElementById('tests').innerHTML = data.tests.toLocaleString();
    document.getElementById('flag').src = data.countryInfo.flag; 
})

function updateVisitCount(){
    fetch('https://api.countapi.xyz/update/suliman/github/?amount=1')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById('count').innerHTML = data.value;
    })
}

updateVisitCount();