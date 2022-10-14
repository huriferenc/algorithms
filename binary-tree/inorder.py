'''
Time complexity: O(n)  n <- number of nodes
Space complexity: O(h)  h <- height of the tree

        3
     7     5      => 2 7 5 6 11 3 5 4 9
   2   6     9
      5 11  4
'''


class Node:
    def __init__(self, value=0, left=None, right=None) -> None:
        self.val = value
        self.left = left
        self.right = right


def inorder(node: Node):
    if node is None:
        return

    inorder(node.left)
    print(node.val)
    inorder(node.right)


def inorder_iterative(node: Node):
    stack = []
    while (stack or node is not None):
        if node is not None:
            stack.append(node)
            node = node.left
        else:
            node = stack.pop()
            print(node.val)
            node = node.right


'''
[]      <- 3
[3]     <- 7
[3 7]   <- 2
[3 7 2]
[3 7 2] # 2
[3 7]   # 7
[3]     <- 6
[3 6]   <- 5
[3 6 5] # 5
[3 6]   # 6
[3]     <- 11
[3 11]  # 11
[3]     # 3
[]      <- 5
[5]     # 5
[]      <- 9
[9]     <- 4
[9 4]   # 4
[9]     # 9
[]
'''

'''
     3
  7     5      => 2 7 5 6 11 3 5 4 9
2  6      9
  5 11   4
'''

root = Node(3)

root.left = Node(7)
root.right = Node(5)

root.left.left = Node(2)
root.left.right = Node(6)

root.left.right.left = Node(5)
root.left.right.right = Node(11)

root.right.right = Node(9)

root.right.right.left = Node(4)

inorder(root)
print('--------------')
inorder_iterative(root)
