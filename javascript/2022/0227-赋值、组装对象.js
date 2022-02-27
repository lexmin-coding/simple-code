// 定义一个初始数组 ['github', '掘金', 'python', 'javascript', 'java', 'cpp', 'c', 'segmentfault', 'gitee', 'stackoverflow', 'xiaoe-tech', 'mingyuanyun']
// 实现一个 search 函数，实现搜索功能
// 函数接收 keyword 参数，从初始数组中找出所有包含 keyword 的数组，并返回
// 1. 成功返回结构示例， 如传入 keyword 为 'git'  返回结果：{ code: 0, data: ['gitee', 'github'], 'msg': '请求成功' ]
// 2. 失败返回结构示例， 如传入 keyword 为 '哈哈哈', 返回结果：{ code: 1, data: [], msg: '搜索结果不存在' }

const database = ['github', '掘金', 'python', 'javascript', 'java', 'cpp', 'c', 'segmentfault', 'gitee', 'stackoverflow', 'xiaoe-tech', 'mingyuanyun']

function search(keyword) {
	const result = database.filter(item=>item.includes(keyword))
	if ( result.length > 0 ) {
		return {
			code: 0,
			data: result,
			msg: '请求成功'
		}
	} else {
		return  {
			code: 0,
			data: [],
			msg: '搜索结果不存在'
		}
	}
}

console.log('search result', search('git'));
console.log('search result', search('哈哈哈'));
