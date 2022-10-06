public static void running_time()
{
  int size = 100000000;
  int[] ints = new int[size];
  ints[size - 1] = 0;

  for (int i = 0; i < size - 1; i++) {
    ints[i] = i;
  }

  long time = System.currentTimeMillis();

  // Testing algorithm
  find_a_peak(ints);

  System.out.println((System.currentTimeMillis() - time) + " msec");
}