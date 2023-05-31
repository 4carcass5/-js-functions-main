// BEGIN 
const groupBy = (objects, property) => {
    return objects.reduce((acc, current) => {
      const value = current[property];
      if (value in acc) {
        acc[value].push(current);
      } else {
        acc[value] = [current];
      }
      return acc;
    }, {});
  };
  
  export default groupBy;
  // END