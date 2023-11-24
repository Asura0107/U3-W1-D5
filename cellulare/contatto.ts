let thisone: any = new URLSearchParams(window.location.search);
let id: any = thisone.get("person");
console.log(id);
fetch("https://6560b15683aba11d99d159bf.mockapi.io/phone/" + id)
  .then((resp) => resp.json())
  .then((numbers) => {
    console.log(numbers);
    let contatti = document.querySelector(".contatti") as HTMLElement;
    let divimg = document.querySelector(".divimg") as HTMLElement;
    let info = document.querySelector(".info") as HTMLElement;
    let namediv = document.querySelector(".name") as HTMLElement;
    let chiamate = document.querySelector(".chiamate") as HTMLElement;
    namediv.innerText = numbers.name;
    let img = document.createElement("img");
    if (numbers.genere === "maschio") {
      img.src =
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png";
    } else {
      img.src = "https://cdn-icons-png.flaticon.com/512/6872/6872932.png";
    }

    img.classList.add("imgprof");

    info.innerHTML = `<div class="d-flex align-items-baseline"><i class="fas fa-phone-alt me-3"></i><p>${numbers.phoneNumber}</p></div>`;
    chiamate.innerHTML = `<div class="d-flex flex-column">
    <p>Chiamate in uscita: ${numbers.chiamateEffetuate}</p>
    <p>Chiamate in entrata: ${numbers.chiamateRicevute}</p>
    </div>`;
    divimg.appendChild(img);
  });
