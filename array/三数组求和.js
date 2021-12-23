/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
三数组求和
真题描述：给你一个包含 n 个整数的数组 nums，
判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
*/

/*
important;
双指针法的使用场景了，一方面，它可以做到空间换时间；
另一方面，它也可以帮我们降低问题的复杂度。
双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：
该数组必须有序。否则双指针根本无法帮助我们缩小定位的范围

“有序”和“数组”。
没错，见到这两个关键字，
立刻把双指针法调度进你的大脑内存。
普通双指针走不通，立刻想对撞指针！

即便数组题目中并没有直接给出“有序”这个关键条件，
我们在发觉普通思路走不下去的时候，
也应该及时地尝试手动对其进行排序试试看有没有新的切入点——没有条件，
创造条件也要上。
*/

// 找出三项相加 = 0 的三元组 a + b + c = 0
var nums = [-1, 0, 1, 1, 2, -1, -4, 3],
  target = 0,
  result = [];
// 双指针发需要有序，先排序
nums.sort((a, b) => a - b);

console.log(nums);

// 方法1
// 第0项为 头指针i ，第一项为中间值 cur , 最后一项为尾指针j
// cur 再一次循环中不改变,
// i + cur + j < target, i++
// i + cur + j > target, j--
// 直到 i 或 j 碰到 cur 本轮结束
// 下一轮 cur ++ ,再重复过程

// 考虑到重复问题，每次 i++,j--,cur++ 都需要判断
// 相邻数字是否相同，如果相同，则跳过。防止出现重复的结果

for (let cur = 1; cur < nums.length - 1; cur++) {
  let i = 0, // 头指针
    j = nums.length - 1; // 尾指针

  // 若cur针元素重复，跳过
  if (cur < nums.length && nums[cur] === nums[cur + 1]) {
    continue;
  }

  // 当一边的指针等于中间值时，本次没有获取到结果，
  // 结束进行下一轮的匹配计算
  while (i != cur && j != cur) {
    // 三项相加比结果大，移动右指针
    if (nums[cur] + nums[i] + nums[j] > target) {
      j--;
      while (j > cur && nums[j] == nums[j + 1]) {
        j--;
      }

      // 三项相加比结果小，移动左指针
    } else if (nums[cur] + nums[i] + nums[j] < target) {
      i++;
      while (i < cur && nums[i] == nums[i - 1]) {
        i++;
      }
    } else {
      result.push([nums[cur], nums[i], nums[j]]);

      // // 若cur针元素重复，跳过
      // while (cur < nums.length && nums[cur] == nums[cur + 1]) {
      //   cur++;
      // }

      break;
    }
  }
}

console.log(result);

/*
// 方法2
// 第1项为 头指针i ，第0项为中间值 cur , 最后一项为尾指针j
// cur 再一次循环中不改变,
// i + cur + j < target, i++
// i + cur + j > target, j--
// 直到 i 或 j 碰到 cur 本轮结束
// 下一轮 cur ++ ,再重复过程

const threeSum = function (nums) {
  // 用于存放结果数组
  let res = [];
  // 给 nums 排序
  nums = nums.sort((a, b) => {
    return a - b;
  });
  // 缓存数组长度
  const len = nums.length;
  // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
  for (let i = 0; i < len - 2; i++) {
    // 左指针 j
    let j = i + 1;
    // 右指针k
    let k = len - 1;
    // 如果遇到重复的数字，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      // 三数之和小于0，左指针前进
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        // 处理左指针元素重复的情况
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // 三数之和大于0，右指针后退
        k--;

        // 处理右指针元素重复的情况
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        // 得到目标数字组合，推入结果数组
        res.push([nums[i], nums[j], nums[k]]);

        // 左右指针一起前进
        j++;
        k--;

        // 若左指针元素重复，跳过
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }

        // 若右指针元素重复，跳过
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  // 返回结果数组
  return res;
};
*/
