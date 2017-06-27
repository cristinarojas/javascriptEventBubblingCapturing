var id = 0;

function handleEvent(e) {
	console.log("---", id++, this);
	console.log('Target', e.target);
	console.log('Current target', e.currentTarget);
}

window.onload = function() {
	document.getElementById('outer').addEventListener('click', handleEvent, false); // BUBBLING - bottom to top
	document.getElementById('inner').addEventListener('click', handleEvent, false); // BUBBLING - bottom to top
	document.getElementById('innerMost').addEventListener('click', handleEvent, false); // BUBBLING - bottom to top
}

/*
window.onload = function() {
	document.getElementById('outer').addEventListener('click', handleEvent, true); // CAPTURING - top to bottom
	document.getElementById('inner').addEventListener('click', handleEvent, true); // CAPTURING - top to bottom
	document.getElementById('innerMost').addEventListener('click', handleEvent, true); // CAPTURING - top to bottom
}*/