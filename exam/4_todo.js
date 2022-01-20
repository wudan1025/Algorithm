/*
 * @LastEditors: wudan01
 * @description: 文件描述
 */
/*
题目描述：给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
此外，你可以假设该网格的四条边均被水包围。

示例 1:

输入:

11110
11010
11000
00000

输出: 1

示例 2:

输入:
11000
11000
00100
00011
输出: 3
解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
*/

var arr1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

var arr2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
// 我的做法 错误
function getResult(arr) {
  let i = 0,
    j = 0,
    resultLen = 0,
    enumArr = [];

  for (let k = 0; k < arr.length; k++) {
    enumArr = [];
    for (let m = 0; m < arr[k].length; m++) {
      if (arr[k][m] != 0) {
        i = k;
        j = m;
        // 横向
        while (i <= arr[k].length) {
          // if (!arr[i] || i >= arr[i].length) break;
          // while (arr[i][j] != 0) {
          //   // console.log(i);
          //   // console.log(j);
          //   enumArr.push(i);
          //   arr[i][j] = 0;

          // }
          // i++;
          if (arr[i][j] != 0) {
            enumArr.push(i);
            arr[i][j] = 0;
          }
          i++;
        }
        // debugger;
        console.log(enumArr);
        // 垂直;
        for (let e = 0; e < enumArr.length; e++) {
          j = 0;
          while (j < arr[e].length) {
            j++;
            if (arr[e][j] != undefined && arr[e][j] != 0) {
              arr[e][j] = 0;
            }
          }
        }

        resultLen++;
      }
    }
  }

  console.log(resultLen);
  return resultLen;
}

getResult(arr2);

// 作者的
// 入参是二维数组
const numIslands = function (grid) {
  const moveX = [0, 1, 0, -1];
  const moveY = [1, 0, -1, 0];
  // 处理二维数组的边界情况
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  // 初始化岛屿数量
  let count = 0;
  // 缓存二维数组的行数和列数
  let row = grid.length,
    column = grid[0].length;
  // 以行和列为线索，尝试“逐个”遍历二位数组中的坑位
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === '1') {
        // 每遇到1，就进入dfs，探索岛屿边界
        dfs(grid, i, j);
        // 每完成一个 dfs，就累加一个岛屿
        count++;
      }
    }
  }
  return count;

  // 编写探索岛屿边界的逻辑
  function dfs(grid, i, j) {
    // 如果试图探索的范围已经越界，则return
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === '0'
    ) {
      return;
    }
    // 遍历过的坑位都置0，防止反复遍历
    grid[i][j] = '0';
    // 遍历完当前的1，继续去寻找下一个1
    for (let k = 0; k < 4; k++) {
      dfs(grid, i + moveX[k], j + moveY[k]);
    }
  }
};
