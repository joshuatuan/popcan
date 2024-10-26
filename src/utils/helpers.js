export function average(arr) {
  if (!arr || arr.length === 0) return 0; // Return 0 for undefined or empty arrays
  const total = arr.reduce((acc, cur) => acc + Number(cur), 0); // Ensure values are numbers
  return total / arr.length;
}
// export function average(arr) {
//   return arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// }
