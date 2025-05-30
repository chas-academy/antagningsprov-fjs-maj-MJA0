
function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"

    let num1 = 5;
    let num2 = 10;

    if(num1 > num2)
    {
        console.log("Det första talet är större än det andra");
    }
    else
    {
        console.log("Det andra talet är större än det andra");
    }

}

module.exports = { uppg5 };