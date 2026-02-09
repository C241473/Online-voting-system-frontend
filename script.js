// index(login)
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function hideLogin() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


// demo
let votes = { "Super easy": 0, "Somewhat easy": 0, "Moderate": 0, "Quite difficult": 0, "Very difficult": 0 };

function submitVote() {
    const selectedOption = document.querySelector('input[name="poll"]:checked');
    if (selectedOption) {
        votes[selectedOption.value]++;
        alert("Vote submitted!");
    } else {
        alert("Please select an option.");
    }
}

function showResults() {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h3>Poll Results:</h3>";
    for (let option in votes) {
        resultsDiv.innerHTML += `<p>${option}: ${votes[option]} votes</p>`;
    }
    resultsDiv.style.display = "block";
}

// About(Simple Swipe Functionality)
let lastTouch = 0;

document.addEventListener('touchstart', (event) => {
    lastTouch = event.touches[0].clientX; // Store initial touch position
});

document.addEventListener('touchend', (event) => {
    const currentTouch = event.changedTouches[0].clientX; // Get the ending touch position
    if (lastTouch > currentTouch + 50) {
        // Swipe left
        alert("You swiped left!");
    } else if (lastTouch < currentTouch - 50) {
        // Swipe right
        alert("You swiped right!");
    }
});




const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
allSideMenu.forEach(item=> {
	const li = item.parentElement;
	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});
// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');
searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})
if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}
window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
 








