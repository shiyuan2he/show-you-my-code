import { BinaryTree } from '../../utils/BinaryTree'

// 对二叉搜索树插入值
export const insertIntoBST = (root: BinaryTree, val: number):BinaryTree => {
  const add = (node: BinaryTree | undefined, newVal: number):BinaryTree  => {
    if (!node) {
      node = {val: newVal}
      return node
    }
    // newVal小，放左侧树
    if (node.val >= newVal) {
      node.left = add(node?.left, newVal)
    }
    // 大，放右侧
    if (node.val < newVal) {
      node.right = add(node?.right, newVal)
    }
    return node
  }
  return add(root, val);
}