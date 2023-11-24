fetch("https://6560b15683aba11d99d159bf.mockapi.io/phone")
  .then((resp) => resp.json())
  .then((numbers) => {
    console.log(numbers);
    let contatti = document.querySelector(".contatti") as HTMLElement;
    numbers.forEach((element) => {
      console.log(element);
      let name = document.createElement("a") as HTMLAnchorElement;
      name.innerText = element.name;
      name.className = "ms-3 text-decoration-none text-black name";
      name.href = `./contattosingolo.html?person=${element.id}`;

      let divsingle = document.createElement("div") as HTMLParagraphElement;
      divsingle.className = "d-flex mb-3 align-items-center";

      let img = document.createElement("img") as HTMLImageElement;
      img.src =
        "https://icon-library.com/images/default-profile-icon/default-profile-icon-5.jpg";
      img.classList.add("imgavatar");
      divsingle.appendChild(img);
      contatti.appendChild(divsingle);
      divsingle.appendChild(name);
    });
  });
