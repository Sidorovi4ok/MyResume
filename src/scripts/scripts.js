	function showResume() {
		document.querySelector('.info').classList.add('hidden');
		document.querySelector('.contacts').classList.add('hidden');
		document.querySelector('.resume').classList.add('active');
	}

	function hideResume() {
		document.querySelector('.resume').classList.remove('active');
		document.querySelector('.info').classList.remove('hidden');
		document.querySelector('.contacts').classList.remove('hidden');
	}