import { Github } from './github.js';
import { UI } from './ui.js';

// Creating a clone of Classes
const github = new Github();
const ui = new UI();

//! Html Ele
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');
const themeBtn = document.querySelector('#theme-btn');
const body = document.querySelector('body');

//! Event Listeners
searchButton.addEventListener('click', getInput);
themeBtn.addEventListener('click', changeTheme);

//! Methods
function getInput() {
    if (searchInput.value) {
        github
            .fetchUserData(searchInput.value)
            .then((res) => {
                if (res.data.message === 'Not Found') {
                    ui.showAlert(
                        'User cannot found',
                        'alert-info'
                    );
                } else {
                    ui.showAlert(
                        'User found successfully ',
                        'alert-success'
                    );
                    ui.renderProfile(res.data);
                    ui.renderProjects(res.repos);
                }
            })
            .catch((err) => console.log(err));

        return;
    }

    ui.showAlert('Please enter a name...', 'alert-warning');
}

function changeTheme() {
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-bg-dark');

    if (body.classList.contains('bg-dark')) {
        themeBtn.innerText = 'Light Mode';
    } else {
        themeBtn.innerText = 'Dark Mode';
    }
}


// enter tuşu ile search
//! Event Listeners
searchButton.addEventListener('click', getInput);
searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        getInput();
    }
});
themeBtn.addEventListener('click', changeTheme);