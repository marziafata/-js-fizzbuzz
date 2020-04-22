// Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

// creare un ciclo for di numeri da 1 a 100
for (var i = 1; i < 101; i++) {


    // se numero divisibile per 3 e per 5 scrivi FizzBuzz
    // sono tutti i numeri divisibili per 15
    if (i % 15 == 0) {
        console.log("FizzBuzz")

    // se numero divisibile per 5 scrivi Buzz
    // il numero diviso 5 deve dare resto 0
    } else if (i % 5 == 0) {
        console.log("Buzz")

    // se numero divisibile per 3 scrivi Fizz
    // se resto = 0 scrivi Fizz
    } else if (i % 3 == 0) {
        console.log("Fizz")

    } else {
        console.log(i);
    }
}
