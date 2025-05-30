function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

    let bigEven = [];
    let smallOdd = [];
    let other = [];

    for(let nr of numbers)
    {
      if(nr>10 && nr%2 === 0)
      {
        bigEven.push(nr);
      }
      else if(nr<10 && nr&2 !== 0)
      {
        smallOdd.push(nr);
      }
      else
      {
        other.push(nr);
      }
    }
    
    return {bigEven: bigEven, smallOdd: smallOdd, other: other};
  }
  
  module.exports = { uppg10 };
  