// Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

// creo un ciclo con i numeri da 1 a 100
for (var i = 1; i < 101; i++) {

// creo le variabili resto per numeri:
// divisibili per 3
    var resto3 = i % 3;
// divisibili per 5
    var resto5 = i % 5;
// divisibili per 15 (numeri divisibili sia per 3 che per 5)
    var resto15 = i % 15;

// se numero divisibile per 15 e quindi resto 0 scrivi Fizzbuzz
    if (resto15 == 0) {
        console.log('fizzbuzz')
// se numero divisibile per 5 e quindi resto 0 scrivi buzz
    } else if (resto5 == 0) {
        console.log('buzz')
// se numero divisibile per 3 e quindi resto 0 scrivi Fizz
    } else if (resto3 == 0){
    console.log('fizz')
// se non è divisibile nè per 3 nè per 5 non fare niente
    } else {
    console.log(i)
    }
}
