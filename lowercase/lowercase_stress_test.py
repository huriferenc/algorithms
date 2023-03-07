import unittest
import time

from lowercase import lowercase


def currentTime():
    return round(time.time() * 1000)


def stressTest(n=100000000):
    arr = 'Z' * n

    # Start
    start_time = currentTime()

    # Running
    lowercase(arr)

    # End
    print(f'{currentTime() - start_time} msec')


class StressTest(unittest.TestCase):
    def test10Elements(self):
        stressTest(10)

    def test100Elements(self):
        stressTest(100)

    def test1000Elements(self):
        stressTest(1000)

    def test10000Elements(self):
        stressTest(10000)

    def test100000Elements(self):
        stressTest(100000)


if __name__ == '__main__':
    unittest.main()
