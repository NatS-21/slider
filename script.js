const slider = document.getElementById('slider');
const thumb = document.getElementById('slider-thumb');
const value = document.getElementById('slider-value');

let isDragging = false;

let min = 0;
let max = 100;
changeValue(50)

function changeValue(val) {
    thumb.style.left = `${val}%`;
    value.style.left = `${val+0.75}%`;
    value.innerHTML = Math.floor(val);
}

function moveSlider(clientX) {
    const rect = slider.getBoundingClientRect();
    const position = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    changeValue(position * 100);
}

thumb.addEventListener('mousedown', (e) => {
  isDragging = true;
  moveSlider(e.clientX);
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    moveSlider(e.clientX);
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
