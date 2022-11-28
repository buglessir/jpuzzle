function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData('selectedId', e.target.id);
}

function drop(e) {
  e.preventDefault();
  let selectedId = e.dataTransfer.getData('selectedId');
  let selectedItem = document.getElementById(selectedId);
  selectedItem.draggable = true;
  selectedItem.ondragstart = drag;
  e.target.appendChild(selectedItem);
}