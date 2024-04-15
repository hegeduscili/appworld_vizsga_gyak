const pizzaContainer = document.getElementById('pizzaContainer');

fetch('datas.js', {
    method: 'GET',
})
    .then(response => response.json())
    .then(datas => {
        datas.forEach(data => {
            const divRow = document.createElement('div')
            divRow.classList.add('row', 'm-3');
            divRow.innerHTML = `
                <p class="col" id="pizza_name_1"> ${data.name} <br> Normál</p>
                <div class="col mt-4">
                    <input type="number" name="number" id="number${data.id}" value="1">
                    <button class="btn btn-danger rounded-5 ms-5 delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg></button>
                </div>
                <div class="col mt-4">
                    <p id="pizza_price">${data.price} HUF</p>
                </div>
                <hr class="mt-4">
            </div>
        </div>`;
            pizzaContainer.appendChild(divRow);
        });

        // Teljes ár számolás és frissítés
        const updateTotalPrice = () => {
            const totalPriceElement = document.getElementById('all_price');
            totalPriceElement.textContent = FullPrice(datas) + ' HUF';
        };

        // Teljes ár számolás
        const FullPrice = (data) => {
            let total_price = 0;
            data.forEach(data => {
                const quantity = document.getElementById(`number${data.id}`).value;
                const price = parseInt(data.price); // számmá alakítás
                total_price += quantity * price;
            });
            return total_price;
        };

        updateTotalPrice(); // Azonnali frissítés

        pizzaContainer.addEventListener('input', () => {
            updateTotalPrice(); // Frissités amikor az ár változik
        });

        const deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const inputId = button.parentElement.querySelector('input').id;
                document.getElementById(inputId).value = 0;
                updateTotalPrice(); // Frissítés az input törlésekor
            })
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
