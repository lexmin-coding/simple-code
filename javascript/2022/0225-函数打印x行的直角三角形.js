// 0225-函数打印x行的直角三角形
function logTriangle(x) {
	for (let index = 0; index < x ; index++) {
		let curLine = ''
		for (let newIndex = 0; newIndex <= index; newIndex++) {
				curLine += '*'
		}
		console.log(curLine)
	}
}

logTriangle(3)
