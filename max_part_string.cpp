#include <iostream>
#include <string>

using namespace std;

char *max_common_string()
{
  char arr1[10] = "batmanuc";
  char arr2[10] = "catmanic";
  char common[10];
  int cont = 0;
  int max = 0;
  for (int i = 0; i < 10; i++)
  {
    if (arr1[i] == arr2[i])
    {
      if (cont == max)
      {
        common[cont] = arr1[i];
        cont++;
        max++;
      }
    }
    else
      cont = 0;
  }

  return common;
}

int *bitset(char ch)
{
  int *byte = new int[8];

  int index = 0;
  for (int i = 7; i >= 0; --i)
  {
    int bit = ch & (1 << i) ? 1 : 0;
    byte[index++] = bit;
  }

  return byte;
}

int max_part_string_hossz(const string &str)
{
  int c = 0;

  int i = 0;

  int csa[8] = {0, 1, 1, 0, 0, 0, 0, 1};

  while (str[i] != '\0')
  {
    int *byte = bitset(str[i]);
    for (int i = 0; i < 8; ++i)
    {
      int yo = byte[i] & csa[i];
      cout << yo;
    }

    cout << endl;

    ++i;
  }

  // int a = stoi(str, nullptr, 2);
  // while (a != 0)
  // {
  //   a = (a & (a << 1));
  //   c++;
  // }

  return c;
}

int main()
{
  const string str("aaabc");
  max_part_string_hossz(str);
  // cout << max_part_string_hossz(str) << endl;

  // return 0;
}