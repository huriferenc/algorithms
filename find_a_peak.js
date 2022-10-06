// EGY (nem a legelső) csúcs keresése
function find_a_peak(a) {
  if (a.length === 0) {
    return null;
  }
  if (a.length === 1) {
    return 0;
  }
  if (a[0] >= a[1]) {
    return 0;
  }
  if (a[a.length - 1] >= a[a.length - 2]) {
    return a.length - 1;
  }

  for (let i = 2; i < a.length - 1; i++) {
    if (a[i] >= a[i - 1] && a[i] >= a[i + 1]) {
      return i;
    }
  }

  return null;
}

let array = [1, 3, 4, 3, 5, 1 /*, 3*/];
const egyszeruCsucs = find_a_peak(array);
console.log(egyszeruCsucs);
