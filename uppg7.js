

function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10

    function sum(a, b){
        let sum = a + b
        return sum;
    }
    
    return sum(5, 10);

}

module.exports = { uppg7 };