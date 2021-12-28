/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
题目描述：设计一个支持 push ，pop ，top 操作，
并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。

pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); --> 返回 -3.
minStack.pop();
minStack.top(); --> 返回 0.
minStack.getMin(); --> 返回 -2.
 */

// 我的做法
// 如果优化取最小值的排序
// 如果在 插入时 同时维护一个 有序的数组？？？
class MinStack {
  constructor() {
    this.stack = [];
    this.min = '';
  }
  push(num) {
    this.stack.push(num);
    if (this.min == '') {
      this.min = num;
    } else {
      this.min = this.min < num ? this.min : num;
    }
  }
  pop() {
    let top = this.stack.pop();
    if (this.min < top) {
      this.min = num;
    } else {
      // 排序 如何优化
      var tmp = Array.of(...this.stack);
      tmp.sort((a, b) => {
        a - b;
      });
      this.min = tmp[0];
    }
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.min;
  }
}
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // --> 返回 -3.
minStack.pop();
console.log(minStack.top()); //--> 返回 0.
console.log(minStack.getMin()); //--> 返回 -2.
