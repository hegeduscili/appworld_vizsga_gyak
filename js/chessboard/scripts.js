
document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById('table');

    for (let i = 0; i < 8; i++) {
        const row = document.createElement('tr');
        table.appendChild(row);
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement('td');
            cell.classList.add('cell');
            if ((i + j) % 2 === 0) {
                cell.classList.add('white');
            } else {
                cell.classList.add('black');
            }
            row.appendChild(cell);
        }
    }
});
