exec osascript -l JavaScript <<EOF

// Is it possible to move a process too?


se = Application('System Events')

// TODO(rjk): add filtering?

for (i = 0; i < se.processes.length; i++) {
	// console.log(i, ': ', se.processes[i].name())
	if (se.processes[i].name() == 'devdraw') {
		console.log('found devdraw!!!')
		se.processes[i].visible = true
		se.processes[i].frontmost = true
	}
}

// 1. sizing windows
// 2. talking 9p? i.e.: can JS talk 9p

