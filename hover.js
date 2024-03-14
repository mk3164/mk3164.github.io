document.addEventListener('DOMContentLoaded', function() {
    var logos = document.querySelectorAll('.logos img');
    var hintElement = document.getElementById('hint');

    function showHint(logo) {
        var logoName = logo.getAttribute('name');
		
		if(logoName == "unity") 
			hintElement.textContent = "This project was developed with Unity game engine.";
		else if(logoName == "question") 
			hintElement.textContent = "This project was developed with a proprietary game engine.";
		else if(logoName == "csharp") 
			hintElement.textContent = "This project was developed with C# programming language.";
		else if(logoName == "cplusplus") 
			hintElement.textContent = "This project was developed with C++ programming language.";
		else if(logoName == "mirror") 
			hintElement.textContent = "This project was developed with Mirror networking library.";
		else if(logoName == "github") 
			hintElement.textContent = "This project was developed with GitHub version control system.";
    }

    function resetHint() {
        hintElement.textContent = '';
    }

    logos.forEach(function(logo) {
        logo.addEventListener('mouseover', function() {
            showHint(logo);
        });

        logo.addEventListener('mouseout', function() {
            resetHint();
        });
    });
});