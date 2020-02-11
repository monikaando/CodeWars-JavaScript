// 8 kyu
// No zeros for heros
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  if (n === 0) return 0;
  const nr = String(n);
  let result = nr;
  for (let i = 0; i < nr.length; i++) {
    if (result.endsWith("0")) {
      result = result.substring(0, result.length - 1);
    }
  }
  return Number(result);
}
