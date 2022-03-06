// 电商企业的后台，存储了每件产品的ID、名称和价格
// 需求：找出这些商品有多少种不同的价格

const data = [
	{
		id: 1,
		price: 1.92
	},
	{
		id: 2,
		price: 2
	},
	{
		id: 3,
		price: 5
	},
	{
		id: 4,
		price: 18
	},
	{
		id: 5,
		price: 2
	},
	{
		id: 6,
		price: 3
	},
	{
		id: 7,
		price: 1.5
	},
	{
		id: 8,
		price: 99
	}
]

const result = Array.from(new Set(data.map((item)=>item.price)))

console.log('result', result);
