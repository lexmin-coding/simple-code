const arr = []

for (let index = 0; index < 20; index++) {
	if ( index === 0 ) {
		arr[index] = 0
	} else if ( index === 1 ) {
		arr[index] = 1
	} else {
		arr[index] = arr[index - 1] + arr[index - 2]
	}
}

console.log('arr', arr);
