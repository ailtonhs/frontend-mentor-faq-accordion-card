const icon = document.querySelectorAll(".icon");
const details = document.querySelectorAll('details');
const summary = document.querySelectorAll('summary');

for (let i = 0; i < details.length; i++) {
    summary[i].addEventListener('click', () => {
        if (details[i].open) {
            icon[i].classList.remove('arrow');
        } else {
            icon[i].classList.add('arrow');
        }
    })
}