fetch("https://6560896283aba11d99d1062b.mockapi.io/name")
  .then((resp) => resp.json())
  .then((numbers) => {
    console.log(numbers);
    let contatti = document.querySelector(".contatti") as HTMLElement;
    numbers.forEach((element) => {
      console.log(element);
      let name = document.createElement("p") as HTMLParagraphElement;
      name.innerText = element.name;
      name.className = "ms-3";

      let divsingle = document.createElement("div") as HTMLParagraphElement;
      divsingle.className = "d-flex mb-3 align-items-end";

      let img = document.createElement("img") as HTMLImageElement;
      img.src =
        "https://icon-library.com/images/default-profile-icon/default-profile-icon-5.jpg";
      img.classList.add("imgavatar");
      divsingle.appendChild(img);
      contatti.appendChild(divsingle);
      divsingle.appendChild(name);
    });
  });
