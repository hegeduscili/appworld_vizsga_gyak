/*  localStorage.setItem("teendok", JSON.stringify(
     [{
         "fontossag": "Fontos",
         "szoveg": "Teszt teendő szerkesztve",
         "datum": "2020-08-01. 09:53"
     },
     {
         "fontossag": "Nem Fontos",
         "szoveg": "lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
         "datum": "2020-08-23. 11:55"
     },
     {
         "fontossag": "Nem Fontos",
         "szoveg": "Cum, assumenda totam! Ut voluptatem nam commodi neque repel.",
         "datum": "2020-09-03. 21:25"
     }]

 ));
 */



const teendok = JSON.parse(localStorage.getItem('teendok'));
const todos = document.getElementById('todos');

function displayTodos(){
    teendok.forEach(todo => {
        const divrow = document.createElement('div');
        divrow.classList.add('row', 'mb-3', 'mt-5');
    
        let htmlContent = ` 
        <div class="col-md-10 d-flex">
            `;
        if(todo.fontossag === 'Fontos'){
            htmlContent += `
            <button class="me-2 mt-2 btn btn-sm btn-danger rounded-5  btn-costume d-flex justify-content-center align-items-center"><b
                class="fs-4">F</b>
            </button>`;
            }else if(todo.fontossag === 'Nem Fontos'){
             htmlContent += `
             <button class="me-2 mt-2 btn btn-sm btn-secondary rounded-5  btn-costume d-flex justify-content-center align-items-center"><b
                class="fs-4">N</b>
            </button>`;
            };
            htmlContent += `
            <div class="row d-inline-block">
                <p class="ms-1 mb-1 fs-4">${todo.szoveg}</p>
                <i class="ms-1 fs-6 small">${todo.fontossag}</i>
                <i class="small">${todo.datum}</i>
            </div>
        </div>
        <div class="col-md-2 col-sm-3 d-flex">
            <button
                class="me-2 mt-2 btn btn-sm btn-danger btn-costume rounded-5 d-flex justify-content-center align-items-center del" id="del">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                    class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path
                    d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                </svg>
            </button>
            <button
                class="me-2 mt-2 btn btn-sm btn-primary btn-costume rounded-5 d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                    class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path
                        d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                    <path fill-rule="evenodd"
                        d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
                </svg>
            </button>
    
        </div>
    `
        divrow.innerHTML = htmlContent;
        todos.appendChild(divrow);

        const deleteButton = divrow.querySelector('.del');
        deleteButton.addEventListener('click', function() {
            const confirmation = confirm("Biztos,hogy törölni szeretnéd?");
            if (confirmation) {
                const index = teendok.indexOf(todo);
                teendok.splice(index, 1);
                localStorage.setItem('teendok', JSON.stringify(teendok));
                divrow.remove();
            }
        });
    });
}

function addNewTodos() {
    const save = document.getElementById('save');
    save.addEventListener('click', function() {
        const fontossag = document.getElementById('fontossag').value;
        const szoveg = document.getElementById('szoveg').value;
        const datum = document.getElementById('datum').value;

        const newTodo = {
            "fontossag": fontossag,
            "szoveg": szoveg,
            "datum": datum
        };

        let teendok = localStorage.getItem('teendok');
        if (!teendok) {
            teendok = [];
        } else {
            teendok = JSON.parse(teendok);
        }

        teendok.push(newTodo);
        localStorage.setItem('teendok', JSON.stringify(teendok));

        displayTodos()
    });
}


displayTodos()
addNewTodos()
