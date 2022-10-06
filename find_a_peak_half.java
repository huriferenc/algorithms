// EGY (nem a legelső) csúcs keresése, felező csúcs algoritmussal
public static int find_a_peak(int[] a) throws IllegalArgumentException
{
  if (a == null) {
    throw new IllegalArgumentException();
  }

  if (a.length == 0) {
    return null;
  }
  if (a.length == 1) {
    return 0;
  }
  if (a[0] >= a[1]) {
    return 0;
  }
  if (a[a.length - 1] >= a[a.length - 2]) {
    return a.length - 1;
  }

  int low = 1;
  int high = a.length - 2;

   while (lo <= hi) {
    int mid = low + (high - low) / 2;
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