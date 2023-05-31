//BEGIN
const sequenceSum = (begin, end) => {
    if (begin > end) {
        return NaN;
    }

    const sum = (begin + end) * (end - begin + 1) / 2;
    
    return sum;
};

export default sequenceSum;
//END