const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const dragStart = (e) => {
  e.target.classList.add('hold');
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
};

const dragEnd = (e) => {
  e.target.classList.remove('hold', 'hide');
};

const dragOver = (e) => {
  e.preventDefault();
};
const dragEnter = (e) => {
  e.target.classList.add('hovered');
};
const dragLeave = (e) => {
  e.target.classList.remove('hovered');
};
const dragDrop = (e) => {
  e.target.classList.remove('hovered');
  e.target.append(item);
};

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', dragDrop);
});

item.addEventListener('dragstart', dragStart);

item.addEventListener('dragend', dragEnd);