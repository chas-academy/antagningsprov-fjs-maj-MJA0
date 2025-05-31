

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    function sort(numbers)
    {
        for(let nr of numbers)
        {
            let svar = [];
            if(nr % 2 === 0)
            {
                svar.push[nr, "jämt"];
                console.log(svar);
            }
            else
            {
                svar.push[nr, "udda"];
                console.log(svar);
            }
        }
    }

    sort([1,2,3,4,5,6,7,8,9,10]);
}

module.exports = { uppg9 };