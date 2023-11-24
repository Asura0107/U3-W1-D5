var thisone = new URLSearchParams(window.location.search);
var id = thisone.get("person");
console.log(id);
fetch("https://6560b15683aba11d99d159bf.mockapi.io/phone/" + id)
    .then(function (resp) { return resp.json(); })
    .then(function (numbers) {
    console.log(numbers);
    var contatti = document.querySelector(".contatti");
    var divimg = document.querySelector(".divimg");
    var info = document.querySelector(".info");
    var namediv = document.querySelector(".name");
    var chiamate = document.querySelector(".chiamate");
    namediv.innerText = numbers.name;
    var img = document.createElement("img");
    img.src =
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png";
    img.classList.add("imgprof");
    info.innerHTML = "<div class=\"d-flex align-items-baseline\"><i class=\"fas fa-phone-alt me-3\"></i><p>".concat(numbers.phoneNumber, "</p></div>");
    chiamate.innerHTML = "<div class=\"d-flex flex-column\">\n    <p>Chiamate in uscita: ".concat(numbers.chiamateEffetuate, "</p>\n    <p>Chiamate in entrata: ").concat(numbers.chiamateRicevute, "</p>\n    </div>");
    divimg.appendChild(img);
});
