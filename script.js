//Scrivi un programma che stampi i numeri da uno a 100
//Per i multipli di 3 però, stampa "Fizz" al posto del numero
//Per i multipli di 5 però, stampa "Buzz" al posto del numero
//In fine per i multipli sia di 3 che di 5, stampa "FizzBuzz" al posto del numero



for (let i = 1; i <= 100; i++) {
   //Se e divisibile per entrambi
   if (i % 3 === 0 && i % 5 ===0){
      console.log('FizzBuzz'); //stampa FizzBuzz
   }
   //Oppure se è divisibile per 3
   else if (i % 3 === 0){
      console.log('Fizz'); //stampa Fizz
   }
   //Oppure se è divisibile per 5
   else if (i % 5 === 0) {
      console.log("Buzz"); //stampa Buzz
   }
   //Oppure se non lo è per nessuno stampa
   else{
      console.log(i); //stampa il valore "standard"
   }
}