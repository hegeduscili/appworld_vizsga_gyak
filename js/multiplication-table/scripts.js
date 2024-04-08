const table = document.getElementById('table');
for(let i = 0; i < 11; i++) {
    const row = table.insertRow();
    for(let j = 0; j < 11; j++) {
        const cell = row.insertCell();
        if(j === 0){
            cell.appendChild(document.createTextNode(i))
            cell.style.fontWeight ='bold'
        }
        else{
            cell.appendChild(document.createTextNode(i*j))
        }
    }
}