import unittest

from even_odd import is_even_odd_number


class TestEvenOdd(unittest.TestCase):
    def testInvalidParam(self):
        self.assertEqual(is_even_odd_number(''), None)

    def testEvenNumber(self):
        self.assertEqual(is_even_odd_number(2), True)

    def testOddNumber(self):
        self.assertEqual(is_even_odd_number(3), False)


if __name__ == '__main__':
    unittest.main()
