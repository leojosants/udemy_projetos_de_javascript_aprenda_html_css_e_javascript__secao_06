/* selected elements */
const elementProgressBar = document.querySelector('.progress');
const elementPreviousBtn = document.querySelector('#previous_btn');
const elementNextBtn = document.querySelector('#next_btn');

let progress = 0;
let saved_progress = Number(localStorage.getItem("progress"));

if (saved_progress) {
  progress = saved_progress;
  updateProgressBar();
};

/* functions */
function updateProgressBar() {
    elementProgressBar.style.width = progress + '%';
    localStorage.setItem('progress', progress);
};

function nextStep() {
    progress += 10;

    if (progress > 100) {
        progress = 100;
    }

    updateProgressBar();
};

function previousStep() {
    progress -= 10;

    if (progress < 0) {
        progress = 0;
    }

    updateProgressBar();
};

/* events */
elementNextBtn.addEventListener('click', nextStep);
elementPreviousBtn.addEventListener('click', previousStep);
