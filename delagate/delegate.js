document.getElementById('list-container').addEventListener('click', function (event) {

    event.target.parentNode.removeChild(event.target);

})

document.getElementById('btn-id').addEventListener('click', function () {

    const listContainer = document.getElementById('list-container');

    const li = document.createElement('li');
    li.innerText = 'added new item';

    li.classList.add('item');
    listContainer.appendChild(li);


})