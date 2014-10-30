exec osascript -l JavaScript <<EOF
safari = Application('Safari')
//safari.name()
//safari

// safari.frontmost()
// safari.name()
// safari.version()

// safari.document()

//wins = safari.windows[0]

//for (i = 0; i < safari.windows.length; i++) {
//	console.log(i, safari.windows[i].name())
//}

console.log("hi there")
//console.log(wins.name())

// returns the length of the collection
//safari.windows.length


// This is working! It did what I wanted. Time for version control...

// Is it possible to move a process too?

se = Application('System Events')
for (i = 0; i < se.processes.length; i++) {
	// console.log(i, ': ', se.processes[i].name())
	if (se.processes[i].name() == 'devdraw') {
		console.log('found devdraw!!!')
//		for (j = 0; j < se.processes[i].windows.length; j++) {
//			console.log('devdraw window ', j, ' ', se.processes[i].windows[j].name());
//		}
		se.processes[i].visible = true
		se.processes[i].frontmost = true
	}
}

// 1. sizing windows
// 2. talking 9p? i.e.: can JS talk 9p

