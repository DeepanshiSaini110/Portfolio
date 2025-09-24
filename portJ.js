const heroText = document.querySelector('.hero h2');
let index = 0;
const textArray = ["HI, I AM DEEPANSHI", "WEB DEVELOPER", "PROBLEM SOLVER"];
function changeText() {
    heroText.textContent = textArray[index];
    index = (index + 1) % textArray.length;
}
setInterval(changeText, 3000);

const skills = document.querySelectorAll('.skills ul li');
window.addEventListener('scroll', function(){
    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50){
            skill.style.transform = "translateY(0)";
            skill.style.opacity = "1";
        }
    });
});
