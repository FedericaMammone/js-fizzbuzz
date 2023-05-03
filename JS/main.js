let quadrato

// selezionare un elemento contenitore
const contenitore = document.getElementById("contenitore");
console.log(contenitore);



// cicliamo le operazioni di creazione e di output
for (let i = 1; i <= 100; i++) {
    // console.log(i);
    
    
    // aggiungiamo condizione
    // prima condizione, se è divisibie per 5 e per 3 allora FIZZbuzz
    if (i % 3 == 0 && i % 5 == 0)  {
        // creiamo un nuovo elemeto
        quadrato = `<span class="square fizzBuzz">${"fizzBuzz"}</span>`;
        console.log(quadrato);
        
        // se è divisibile per 5 allora buzz
    } else if (i % 5 == 0) {
        quadrato = `<span class="square buzz">${"buzz"}</span>`;
        
        console.log(quadrato);
    
        // se è divisibile per 3 allora fizz
    } else if (i % 3 == 0) {
        
        quadrato = `<span class="square fizz">${"fizz"}</span>`;
        console.log(quadrato);
    
    
    } else {
        quadrato = `<span class="square normal">${i}</span>`;
        console.log(quadrato);
    }
    
    // aggiungiamo al contenitore l'elemento quadrato
    contenitore.innerHTML += quadrato;
    
}



