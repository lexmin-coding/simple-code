// 对数组做以下操作：[1,6,4,7,8,32,7,4,57,0,32,-53,53,36,5,1,61]
// 1. 找出数组中最大的元素
// 2. 从小到大排序
// 3. 从大到小排序
// 4. 过滤出所有大于20的元素
// 5. 倒序排列
// 6. 在第7个元素后面插入一个100
// 7. 在数组最后追加一个20
// 8. 在数组最前面插入一个0
// 9. 所有元素乘以2
let arr = []
function init() {
	arr = [1,6,4,7,8,32,7,4,57,0,32,-53,53,36,5,1,61]
}

// 1. 找出数组中最大的元素
init()
console.log(Math.max(...arr))

// 2. 从小到大排序
init()
console.log(arr.sort((a, b)=> a - b))

// 3. 从大到小排序
init()
console.log(arr.sort((a, b)=> b - a))

// 4. 过滤出所有大于20的元素
init()
console.log(arr.filter(item => item > 20))

// 5. 倒序排列
init()
console.log(arr.reverse())

// 6. 在第7个元素后面插入一个100
init()
arr.splice(7, 0, 100)
console.log(arr)

// 7. 在数组最后追加一个20
init()
arr.push(20)
console.log(arr)

// 8. 在数组最前面插入一个0
init()
arr.unshift(0)
console.log(arr)

// 9. 所有元素乘以2
init()
arr = arr.map((item)=>item*2)
console.log(arr)







