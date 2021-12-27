/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */

/*
接下来我们来看一道综合性比较强的字符串大题：

真题描述： 设计一个支持以下两种操作的数据结构：

void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
. 可以表示任何一个字母。

示例:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
说明:
你可以假设所有单词都是由小写字母 a - z 组成的。

*/

/*  
我的做法
1. addWord 将字符串拼接为长字符串
2. search不区分直接使用正则

修改点
addWord 按长度改为数组存储,方便查找

var totalStr = '';
function addWord(str) {
  totalStr += str;
}
function search(word) {
  var reg = new RegExp(word, 'g');
  console.log(reg);
  console.log(totalStr);
  return reg.test(totalStr);
}

addWord('bad');
addWord('dad');
addWord('mad');
console.log(search('pad'));
console.log(search('bad'));
console.log(search('.ad'));
console.log(search('b..'));
*/

// 方法2 作者写法

/**
 * 构造函数
 */
const WordDictionary = function () {
  // 初始化一个对象字面量，承担 Map 的角色
  this.words = {};
};

/**
  添加字符串的方法
 */
WordDictionary.prototype.addWord = function (word) {
  // 若该字符串对应长度的数组已经存在，则只做添加
  if (this.words[word.length]) {
    this.words[word.length].push(word);
  } else {
    // 若该字符串对应长度的数组还不存在，则先创建
    this.words[word.length] = [word];
  }
};

/**
  搜索方法
 */
WordDictionary.prototype.search = function (word) {
  // 若该字符串长度在 Map 中对应的数组根本不存在，则可判断该字符串不存在
  if (!this.words[word.length]) {
    return false;
  }
  // 缓存目标字符串的长度
  const len = word.length;
  // 如果字符串中不包含‘.’，那么一定是普通字符串
  if (!word.includes('.')) {
    // 定位到和目标字符串长度一致的字符串数组，在其中查找是否存在该字符串
    return this.words[len].includes(word);
  }

  // 否则是正则表达式，要先创建正则表达式对象
  const reg = new RegExp(word);

  // 只要数组中有一个匹配正则表达式的字符串，就返回true
  return this.words[len].some((item) => {
    return reg.test(item);
  });
};
