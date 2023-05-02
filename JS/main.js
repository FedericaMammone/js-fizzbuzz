// selezionare un elemento contenitore
const contenitore = document.getElementById("contenitore");
console.log(contenitore);


// cicliamo le operazioni di creazione e di output
for (let i = 1; i <= 100; i++) {
    // console.log(i);
    
    // aggiungiamo condizione
    // prima condizione, se è divisibie per 3 allora FIZZ
    if (i % 3 == 0) {
    // creiamo un nuovo elemeto
    let quadrato = `<span class="square">${"fizz"}</span>`;
    console.log(quadrato);
     
    // se è divisibile per 5 allora buzz
    } else if (i % 5 == 0) {
        let quadrato = `<span class="square">${"buzz"}</span>`;
        console.log(quadrato);
    
    } else if () {
        let quadrato = `<span class="square">${i}</span>`;
        console.log(quadrato);
    
    
    }else {
        let quadrato = `<span class="square">${"fizzBuzz"}</span>`;
        console.log(quadrato);
    }
    
    
}



// aggiungiamo al contenitore l'elemento quadrato