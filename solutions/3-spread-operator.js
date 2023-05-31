// BEGIN
export const convert = (...dates) => {
    if (!dates.length)
        return [];
    let english_dates = [];
    for (let date of dates) {
        let english_date = new Date(date[0], date[1]-1, date[2]); 
        english_dates.push(english_date.toDateString());
    }
    return english_dates;
}
export default convert;
// END