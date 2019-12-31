                                            // task 3
function getMin(...arr) {
	let smaller = Infinity;

	for (let i = 0; i <arr.length; i++) {
		if (arr[i] < smaller) {
			smaller = arr[i];
		}
    }
    return smaller;
}
getMin (3, 0, -3);