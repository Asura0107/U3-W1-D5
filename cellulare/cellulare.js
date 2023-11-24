fetch("https://6560896283aba11d99d1062b.mockapi.io/name")
    .then(function (resp) { return resp.json(); })
    .then(function (numbers) {
    console.log(numbers);
    var contatti = document.querySelector(".contatti");
    numbers.forEach(function (element) {
        console.log(element);
        var name = document.createElement("a");
        name.innerText = element.name;
        name.className = "ms-3 text-decoration-none text-black name";
        name.href = "./contattosingolo.html?person=".concat(element.id);
        var divsingle = document.createElement("div");
        divsingle.className = "d-flex mb-3 align-items-center";
        var img = document.createElement("img");
        img.src =
            "https://icon-library.com/images/default-profile-icon/default-profile-icon-5.jpg";
        img.classList.add("imgavatar");
        divsingle.appendChild(img);
        contatti.appendChild(divsingle);
        divsingle.appendChild(name);
    });
});
