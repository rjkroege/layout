exec osascript -l JavaScript <<EOF
// JavaScript starts here.

// This script is now as short as I can make it. I think that I have
// minimized the number of messages.

se = Application('System Events')
filtered = se.processes.whose({ name: 'devdraw' })

// The result of whose is not a JS array so can't apply map directly to
// it.
Array.prototype.map.call(filtered, function (p) {
	p.visible = true
	p.frontmost = true
})


