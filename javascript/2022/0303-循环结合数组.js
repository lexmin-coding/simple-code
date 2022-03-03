// 打印出1-100之间所有能被7整除的数字组成的数组

const arr = []
for (let i = 1; i <= 100; i++) {
	if ( i % 7 === 0 ) {
		arr.push(i)
	}
}

console.log('arr', arr);
