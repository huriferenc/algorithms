class Hosszu
{
    static int hossz(String s)
    {
        int c = 0;
        int a = Integer.parseInt(s, 2);
        while (a != 0)
        {
            a = (a & (a << 1));
            c++;
        }
        return c;
    }
}