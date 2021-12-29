/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
// 开始 2：35 结束 2:42 用时 7 分钟
/*
题目描述：使用栈实现队列的下列操作：

push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。

示例:

MyQueue queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.peek(); // 返回 1
queue.pop(); // 返回 1
queue.empty(); // 返回 false

说明:

你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 
和 is empty 操作是合法的。
你所使用的语言也许不支持栈。
你可以使用 list 或者 deque（双端队列）来模拟一个栈，
只要是标准的栈操作即可。
假设所有操作都是有效的 
（例如，一个空的队列不会调用 pop 或者 peek 操作）。
 */
/*
// 我的做法 每次pop 或 seek 利用辅助栈获取
// 缺点 每次都要用 辅助栈 效率不高
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  // 将一个元素放入队列的尾部
  push(item) {
    this.stack1.push(item);
  }

  // 返回队列首部的元素;
  peek() {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }
    var result = this.stack2[this.stack2.length - 1];
    while (this.stack2.length != 0) {
      this.stack1.push(this.stack2.pop());
    }
    return result;
  }

  // 从队列首部移除元素
  pop() {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }
    var result = this.stack2.pop();
    while (this.stack2.length != 0) {
      this.stack1.push(this.stack2.pop());
    }
    return result;
  }

  // 返回队列是否为空
  empty() {
    if (this.stack1.length != 0) return false;
    else return true;
  }
}

var queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // 返回 1
console.log(queue.pop()); // 返回 1
console.log(queue.empty()); // 返回 false

*/

// 作者做法
// 优点 一旦从 stack1 到 stack2 则不会再回 stack2
// 获取内容 默认从 stack2 拿去，除非为空，再从 stack1 倒过去
/**
 * 初始化构造函数
 */
const MyQueue = function () {
  // 初始化两个栈
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // 直接调度数组的 push 方法
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 假如 stack2 为空，需要将 stack1 的元素转移进来
  if (this.stack2.length <= 0) {
    // 当 stack1 不为空时，出栈
    while (this.stack1.length !== 0) {
      // 将 stack1 出栈的元素推入 stack2
      this.stack2.push(this.stack1.pop());
    }
  }
  // 为了达到逆序的目的，我们只从 stack2 里出栈元素
  return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 * 这个方法和 pop 唯一的区别就是没有将定位到的值出栈
 */
MyQueue.prototype.peek = function () {
  if (this.stack2.length <= 0) {
    // 当 stack1 不为空时，出栈
    while (this.stack1.length != 0) {
      // 将 stack1 出栈的元素推入 stack2
      this.stack2.push(this.stack1.pop());
    }
  }
  // 缓存 stack2 的长度
  const stack2Len = this.stack2.length;
  return stack2Len && this.stack2[stack2Len - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // 若 stack1 和 stack2 均为空，那么队列空
  return !this.stack1.length && !this.stack2.length;
};
