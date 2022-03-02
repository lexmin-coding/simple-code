// 现在有两个数组：
// 数组1: [1,2,3,4,5,6,7]
// 数组2: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// 基于这两个数组，通过处理，得到以下结果：
// arr = [
// 	{
// 		id: 1,
// 		value: 'a'
// 	},
// 	{
// 		id: 2,
// 		value: 'b',
// 	},
// 	{
// 		id: 3,
// 		value: 'c',
// 	},
// 	{
// 		id: 4,
// 		value: 'd',
// 	},
// 	{
// 		id: 5,
// 		value: 'e',
// 	},
// 	{
// 		id: 6,
// 		value: 'f',
// 	},
// 	{
// 		id: 7,
// 		value: 'g',
// 	}
// ]

const arr1 = [1,2,3,4,5,6,7]
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

const newArr = []
for (let index = 0; index < arr1.length; index++) {
	newArr[index] = {
		id: arr1[index],
		value: arr2[index]
	}
}

console.log('newArr', newArr)
