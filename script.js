const toggleContainer = document.getElementById('toggleContainer');
let isActive = false;

toggleContainer.addEventListener('click', () => {
    isActive = !isActive;
    toggleContainer.classList.toggle('active');


    toggleContainer.style.transform = 'scale(0.95)';
    setTimeout(() => {
        toggleContainer.style.transform = 'scale(1)';
    }, 100);


    console.log(`Toggle switched to: ${isActive ? 'ON' : 'OFF'}`);
});