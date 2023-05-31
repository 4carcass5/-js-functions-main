const smallestDivisor = (num) => {
    if (num === 1) {
        return 1;
    }
    let divisor = 2;
    while (num % divisor !== 0) {
        divisor += 1;
    }
    return divisor;
};
export default smallestDivisor;