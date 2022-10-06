// EGY (nem a legelső) csúcs keresése, felező csúcs algoritmussal
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

  let low = 1;
  let high = a.length - 2;

  while (lo <= hi) {
    const mid = low + (high - low) / 2;
    if (a[mid] < a[mid - 1]) {
      high = mid - 1;
    } else if (a[mid] < a[mid + 1]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return null;
}

let array = [1, 3, 4, 3, 5, 1 /*, 3*/];
const egyszeruCsucs = find_a_peak(array);
console.log(egyszeruCsucs);
