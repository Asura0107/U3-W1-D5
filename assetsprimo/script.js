var User = /** @class */ (function () {
    function User(_carica, _numeroChiamate, _minuti) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.minuti = _minuti;
    }
    User.prototype.unaRicarica = function () {
        return this.carica;
    };
    User.prototype.minutiDurata = function () {
        return this.minuti;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.numero404 = function () {
        return this.carica - this.minuti * 0.2;
    };
    User.prototype.azzeraChiamate = function () {
        return this.numeroChiamate * 0;
    };
    return User;
}());
var userfirst = new User(30, 5, 20);
console.log("Effetuata ricarica di: $".concat(userfirst.unaRicarica()));
console.log("Durata chiamata: ".concat(userfirst.minutiDurata(), " min"));
console.log("Chiamate effetuate: ".concat(userfirst.getNumeroChiamate()));
console.log("Credito residuo: $".concat(userfirst.numero404()));
console.log("Chiamate azzerate, chiamate in memoria: ".concat(userfirst.azzeraChiamate()));
console.log("////////////////////////////");
var usersecond = new User(25, 10, 11);
console.log("Effetuata ricarica di: $".concat(usersecond.unaRicarica()));
console.log("Durata chiamata: ".concat(usersecond.minutiDurata(), " min"));
console.log("Chiamate effetuate: ".concat(usersecond.getNumeroChiamate()));
console.log("Credito residuo: $".concat(usersecond.numero404()));
console.log("Chiamate azzerate, chiamate in memoria: ".concat(usersecond.azzeraChiamate()));
console.log("////////////////////////////");
var userThird = new User(40, 7, 15);
console.log("Effetuata ricarica di: $".concat(userThird.unaRicarica()));
console.log("Durata chiamata: ".concat(userThird.minutiDurata(), " min"));
console.log("Chiamate effetuate: ".concat(userThird.getNumeroChiamate()));
console.log("Credito residuo: $".concat(userThird.numero404()));
console.log("Chiamate azzerate, chiamate in memoria: ".concat(userThird.azzeraChiamate()));
