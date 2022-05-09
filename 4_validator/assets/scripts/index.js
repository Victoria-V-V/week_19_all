// для хранения и получения данных в localStorage (т.к. все данные - это строки!):
// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.
//источник https://itchef.ru/articles/72326/


//получение значений из локального хранилища при загрузке страницы
document.addEventListener("DOMContentLoaded", displayNotes);

//добавление данных в хранилище
const addButton = document.querySelector('.addButton');
addButton.addEventListener("click", addNotes);

function addNotes() {
    let addNote = document.querySelector('#addNote');

    //если в хранилище нет данных, массив пустой
    if (localStorage.getItem('notes') == null) {
        notes = [];
    } else {
        //иначе преобразуем в массив
        notes = JSON.parse(localStorage.getItem('notes'));
    }

    if (addNote.value !== '') {
        notes.push(addNote.value);
    }
    localStorage.setItem('notes', JSON.stringify(notes));
    addNote.value = '';
    displayNotes();
}

//вывод данных из хранилища в виде заметок
function displayNotes() {
    let notes;
    if (localStorage.getItem('notes') == null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('notes'));
    }

    let html = '';
    //перебираем массив, рисуем карточку, добавляет индекс элемента, по которому потом будем удалять
    notes.forEach(function (element, index) {
        html += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <p class="card-text">${element}</p>
            <button class="btn btn-sm btn-danger deleteButton" id="${index}" onclick=deleteNote(this.id)>Удалить</button>
        </div>
    </div>`;
    });

    let note = document.querySelector('#notes');
    if (notes.length != 0) {
        note.innerHTML = html;
    } else {
        note.innerHTML = '';
    }
}

//удаляем карточки с заметками
function deleteNote(index) {
    let notes;
    if (localStorage.getItem('notes') == null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('notes'));
    }

    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}