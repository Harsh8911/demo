// script.js

document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(skillBar => {
        const skill = skillBar.dataset.skill;
        const percent = skillBar.dataset.percent;

        skillBar.style.width = percent;
        skillBar.innerHTML = `${skill} - ${percent}`;
    });
});
