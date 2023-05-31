// BEGIN 
export default function average(...args) {
    if (args.length === 0) {
      return null;
    }
    return args.reduce((acc, num) => acc + num) / args.length;
  }
  // END