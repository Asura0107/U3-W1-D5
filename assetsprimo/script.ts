interface Smartphone {
  carica: number;
  numeroChiamate: number;
}
class User implements Smartphone {
  carica: number;
  numeroChiamate: number;
  minuti: number;

  constructor(_carica: number, _numeroChiamate: number, _minuti: number) {
    this.carica = _carica;
    this.numeroChiamate = _numeroChiamate;
    this.minuti = _minuti;
  }
  unaRicarica() {
    return this.carica;
  }
  minutiDurata() {
    return this.minuti;
  }
  getNumeroChiamate() {
    return this.numeroChiamate;
  }
  numero404() {
    return this.carica - this.minuti * 0.2;
  }
  azzeraChiamate() {
    return this.numeroChiamate * 0;
  }
}
let userfirst = new User(30, 5, 20);
console.log(`Effetuata ricarica di: $${userfirst.unaRicarica()}`);
console.log(`Durata chiamata: ${userfirst.minutiDurata()} min`);
console.log(`Chiamate effetuate: ${userfirst.getNumeroChiamate()}`);
console.log(`Credito residuo: $${userfirst.numero404()}`);
console.log(
  `Chiamate azzerate, chiamate in memoria: ${userfirst.azzeraChiamate()}`
);
console.log("////////////////////////////");
let usersecond = new User(25, 10, 11);
console.log(`Effetuata ricarica di: $${usersecond.unaRicarica()}`);
console.log(`Durata chiamata: ${usersecond.minutiDurata()} min`);
console.log(`Chiamate effetuate: ${usersecond.getNumeroChiamate()}`);
console.log(`Credito residuo: $${usersecond.numero404()}`);
console.log(
  `Chiamate azzerate, chiamate in memoria: ${usersecond.azzeraChiamate()}`
);
console.log("////////////////////////////");

let userThird = new User(40, 7, 15);
console.log(`Effetuata ricarica di: $${userThird.unaRicarica()}`);
console.log(`Durata chiamata: ${userThird.minutiDurata()} min`);
console.log(`Chiamate effetuate: ${userThird.getNumeroChiamate()}`);
console.log(`Credito residuo: $${userThird.numero404()}`);
console.log(
  `Chiamate azzerate, chiamate in memoria: ${userThird.azzeraChiamate()}`
);
