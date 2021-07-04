export default function cumsum(values, valueof) {
  var suma = 0, index = 0;
  return Float64Array.from(values, valueof === undefined
    ? v => (suma += +v || 0)
    : v => (suma += +valueof(v, index++, values) || 0));
}
