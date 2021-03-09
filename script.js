const icon = document.querySelector('.icon');

let loopNav = document.getElementById('l-Nav');

// Show links and animate menu bars
function showLinks(){
    if (loopNav.className === "loop-nav"){
        loopNav.className += " responsive";
        document.body.classList.add('fixed');
    } else{
        loopNav.className = 'loop-nav';
        document.body.classList.remove('fixed');
    }

    icon.classList.toggle('change');
}

// Event Listener
icon.addEventListener('click', showLinks);