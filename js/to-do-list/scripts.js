//day by listing
const today = document.getElementById('today');
const tomorrow = document.getElementById('tomorrow');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const saturday = document.getElementById('saturday');
const sunday = document.getElementById('sunday');


//inputs
const what = document.querySelector('#what');
const when = document.getElementById('when');


const button = document.getElementById('button');


function addNewListItem() {

    button.addEventListener('click', function () {

        const whatValue = what.value;
        const whenName = when.value;
        const newListItem = document.createElement('div');
        newListItem.classList.add('form-check');
        headingTag = document.createElement('h2');
        headingTag.innerHTML = `<h2>${whenName}</h2><hr class="w-100">`
        newListItem.innerHTML = `
            <input class="form-check-input" type="checkbox" value="ddd" id="dd" />
            <label class="form-check-label" for=""> ${whatValue} </label>
        `;

        if (when.selectedIndex === 1) {
            today.appendChild(newListItem);
            console.log(when.selectedIndex)
        } else if (when.selectedIndex === 2) {
            tomorrow.appendChild(newListItem);
            console.log(when.selectedIndex)
        } else if (when.selectedIndex === 3) {
            wednesday.appendChild(newListItem);
            console.log(when.selectedIndex)
        } else if (when.selectedIndex === 4) {
            if (thursday.children.length === 0) {
                thursday.appendChild(headingTag);
                thursday.appendChild(newListItem);
            }
            thursday.appendChild(newListItem);
            console.log(when.selectedIndex)
        } else if (when.selectedIndex === 5) {
            if(friday.children.length === 0) {
                friday.appendChild(headingTag);
                friday.appendChild(newListItem);
            }
            friday.appendChild(newListItem);
            console.log(when.selectedIndex)
        } else if (when.selectedIndex === 6) {
            if(saturday.children.length === 0){
                saturday.appendChild(headingTag)
                saturday.append(newListItem)
            }
            saturday.appendChild(newListItem);
            console.log(when.selectedIndex)
        } else if (when.selectedIndex === 7) {
            if(sunday.children.length === 0){
                sunday.appendChild(headingTag)
                sunday.append(newListItem)
            }
            sunday.appendChild(newListItem);
            console.log(when.selectedIndex)
        } else
            console.log('No selected day')
    })
}

addNewListItem();