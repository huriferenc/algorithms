// EGY (nem a legelső) csúcs keresése
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

  for (int j = 2; j < a.length - 1; j++) {
    if (a[j] >= a[j-1] && a[j] >= a[j+1]) {
      return j;
    }
  }

  return null;
}