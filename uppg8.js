

function uppg8(){

    // skapa en array med fem person obkjet
    // varje person objekt ska ha två properties, name och age

    // skapa en fuktion som tar in en array som argument
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen

    // anropa funktionen och skicka med arrayen som argument

    let fivePersons =
    [
        {name:"Alpha", age:10},
        {name:"Bravo", age:20},
        {name:"Charlie", age:30},
        {name:"Echo", age:40},
        {name:"Romeo", age:50}
    ];

    function filterAge(peopleArray)
    {
        for(let person of peopleArray)
        {
            if(person.age > 30)
            {
                console.log(person.name);
            }
        }
    }

    filterAge(fivePersons);
}

module.exports = { uppg8 };