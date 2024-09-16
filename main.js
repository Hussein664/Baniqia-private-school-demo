document.addEventListener('DOMContentLoaded', () => {
    const welcomeHeader = document.getElementById('welcome-header');

    // Check if the user has visited the site before
    if (!localStorage.getItem('visited')) {
        // User is visiting for the first time
        localStorage.setItem('visited', 'true');
    } else {
        // User has visited before, hide the welcome header
        welcomeHeader.classList.add('hidden-header');
    }
});

function showExploreButtons() {
    document.getElementById('explore-button').classList.add('hidden');
    document.getElementById('about-button').classList.remove('hidden');
    document.getElementById('admissions-button').classList.remove('hidden');
    document.getElementById('contact-button').classList.remove('hidden');
    // Hide the welcome header when exploring
    document.getElementById('welcome-header').classList.add('hidden-header');
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => page.classList.add('hidden'));

    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.remove('hidden');
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied: ' + text);
    });
}

function changeBackground() {
    const fileInput = document.getElementById('bg-image');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
}
