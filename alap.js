fetch("https://api.exchangerate-api.com/v4/latest/usd")
.then(x=>x.json)
.then(y=>megjelenitUsb(y))

function megjelenitUsb(y){
    console.log(y)
    document.getElementById("usd").innerHTML=y.rates.HUF+"ft"
}

fetch("https://api.exchangerate-api.com/v4/latest/eur")
.then(x=>x.json)
.then(y=>megjeleniteur(y))

function megjeleniteur(y){
    console.log(y)
    document.getElementById("euro").innerHTML=y.rates.HUF+"ft"
}
fetch("https://api.exchangerate-api.com/v4/latest/chf")
.then(x=>x.json)
.then(y=>megjelenitchf(y))

function megjelenitchf(y){
    console.log(y)
    document.getElementById("CHF").innerHTML=y.rates.HUF+"ft"
}
fetch("https://api.exchangerate-api.com/v4/latest/aud")
.then(x=>x.json)
.then(y=>megjelenitaud(y))
function megjelenitaud(y){
    console.log(y)
    document.getElementById("aud").innerHTML=y.rates.HUF+"ft"
}