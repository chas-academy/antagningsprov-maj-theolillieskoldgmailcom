

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const persons = [

    {name: "Theo", age: 23},
    {name: "Chas", age: 8},
    {name: "Oliver", age: 47},
    {name: "Simon", age: 18},
    {name: "Edward", age: 33},

]

overthirty(persons);

function overthirty(array){

    for(let i = 0; i < array.length; i++){
        if(array[i].age > 30){
            console.log(array[i].name)
        }
    }
   

}

}

module.exports = { uppg8 };