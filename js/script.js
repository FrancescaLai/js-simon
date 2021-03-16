/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


// 1. Genero 5 numeri casualmente che non possono ripetersi
var numeri = [];

while (numeri.length < 5) {
  var numeroRandom = Math.floor(Math.random() * 5) + 1;
  if (numeri.includes(numeroRandom) == false) {
    numeri.push(numeroRandom);
  }
}
console.log(numeri);
