let thisone: any = new URLSearchParams(window.location.search);
let id: any = thisone.get("person");
console.log(id);
