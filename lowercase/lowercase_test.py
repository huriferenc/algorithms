import unittest

from lowercase import lowercase


class TestLowercase(unittest.TestCase):
    def testNotString(self):
        self.assertEqual(lowercase(2), '')

    def testEmptyString(self):
        self.assertEqual(lowercase(''), '')

    def testUppercaseAll(self):
        self.assertEqual(lowercase('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                         'abcdefghijklmnopqrstuvwxyz')

    def testUtf8(self):
        self.assertEqual(lowercase('ÁÉÍÓÖŐÜŰ'), 'áéíóöőüű')


if __name__ == '__main__':
    unittest.main()
