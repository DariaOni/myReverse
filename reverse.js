Array.prototype.myReverseMethod = function () {
	let reversed = [];
	let count = 0;
	for (let i = this.length - 1; i >= 0; i--) {
		reversed[count] = this[i];
		count++;
	}
	return reversed;
};

let arr = [34, 42, 15, 28, 14, 22];
