// BEGIN 
const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  export default (num) => {
    console.log(isPrime(num) ? 'yes' : 'no');
  }
  // END