exec osascript -l JavaScript <<EOF

// Is it possible to move a process too?


se = Application('System Events')
console.log(se.processes.length)
ps = se.processes

filtered = ps.whose({ name: 'devdraw' })


console.log("filtered is an array: ", filtered.length)

// The result of whose is not a real array.
Array.prototype.map.call(filtered, function (p) {
	p.visible = true
	p.frontmost = true
})


// 1. sizing windows
// 2. talking 9p? i.e.: can JS talk 9p

