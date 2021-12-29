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

/*
// 我的做法
// 如果优化取最小值的排序
// 答案：优化时间复杂度，一般做法是使用空间换时间，增加空间复杂度，降低时间复杂度

// 如何在 插入时 同时维护一个 有序的数组？？？
// 答案 ：不需要维护 全部入栈数据都在的有序数组
// 只需要一个递减的栈 保证栈顶永远是最小值(比栈顶大的值不会入栈，所以栈中不是全部值)

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

*/

// 作者解法
// 使用时间换空间。新增一个递减栈
const MinStack = function () {
  this.stack = [];
  // 定义辅助栈
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  // 若入栈的值小于当前最小值，则推入辅助栈栈顶
  if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
  if (this.stack.pop() == this.stack2[this.stack2.length - 1]) {
    this.stack2.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // 辅助栈的栈顶，存的就是目标中的最小值
  return this.stack2[this.stack2.length - 1];
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // --> 返回 -3.
minStack.pop();
console.log(minStack.top()); //--> 返回 0.
console.log(minStack.getMin()); //--> 返回 -2.
