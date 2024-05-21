let btns = document.querySelectorAll(".btns")


for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function() {
		for (let x = 0; x < btns.length; x++) {
			if (btns[x] == this) {
				btns[x].classList.add('active');
                return
			} 
			btns[x].classList.remove('active');
		}
	});
}


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

