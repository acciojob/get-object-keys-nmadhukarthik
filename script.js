//your JS code here. If required.
let student = { name: "abc" }
student.prototype.getKeys = function() {
	let arr = []
	for(let item in student)
	{ arr.push(item)}

	return arr
}