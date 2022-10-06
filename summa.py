'''
Egy természetes szám rákövetkezője (Peano-axiómák):
m' = 1 + 2 + 3 + ... + m = m * (m + 1) / 2
'''


def summa(m):
    if m <= 0:
        raise Exception('Invalid number!')

    return m * (m + 1) / 2


print(summa(3))
