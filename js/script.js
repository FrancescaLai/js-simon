/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


// 1. Genero 5 numeri casualmente che non possono ripetersi
var numeri = [];

while ( numeri.length < 5 ) {
  var numeroRandom = Math.floor(Math.random() * 10) + 1;
  if ( numeri.includes(numeroRandom) == false ) {
    numeri.push(numeroRandom);
  }
}
alert(numeri);

// 2. Dopo 3 secondi chiedo all'utente di inserire i 5 numeri visti, uno alla volta
var numeriUtente = [];
var numeroIndovinato = true;

setTimeout(
  function(){
    while ( numeriUtente.length < 5 ) {
      do {
        var numeroUtente = parseInt(prompt("Inserisci i numeri che hai visto"));
      } while (isNaN(numeroUtente));
      numeriUtente.push(numeroUtente);
// 3. Capire quali numeri sono stati indovinati
      if (numeri.includes(numeroUtente) == true) {
        console.log("Hai indovinato questi numeri "+ numeroUtente);
        numeroIndovinato = true;
      } else {
        console.log("Riprova");
        numeroIndovinato = false;
      }
    }
}, 3000);
