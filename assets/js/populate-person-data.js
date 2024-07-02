// Function to fetch JSON data and update HTML content
async function fetchAndUpdatePersonData(personDataFileName) {
    try {
        // Fetch the JSON data
        const response = await fetch('assets/data/' + personDataFileName);
        const data = await response.json();

        // Update the HTML elements with the fetched data
        document.querySelector('.person-name').textContent = data.name;
        document.querySelector('.age span').textContent = data.age;
        document.querySelector('.nationality span').textContent = data.nationality;
        document.querySelector('.height span').textContent = data.height;
        document.querySelector('.hair-colour span').textContent = data.hairColour;
        document.querySelector('.bust-size span').textContent = data.bustSize;
        document.querySelector('.availability span').textContent = data.availability;
        document.querySelector('.accommodate span').textContent = data.accommodate;
    } catch (error) {
        console.error('Error fetching or updating data:', error);
    }
}

// Function to fetch JSON data and update HTML content
async function fetchAndUpdatePersonPriceList() {
    try {
        debugger;

        // Fetch the JSON data
        const response = await fetch('assets/data/price-list.json');
        const data = await response.json();

        const tableBody = document.getElementById('prices-table-body');

        // Iterate through each service in the JSON data
        data.services.forEach(service => {
            // Create a new row
            const row = document.createElement('tr');

            // Create cells for the row
            const timeCell = document.createElement('td');
            timeCell.textContent = service.duration;

            const incallCell = document.createElement('td');
            incallCell.textContent = service.incall;

            const outcallCell = document.createElement('td');
            outcallCell.textContent = service.outcall;

            // Append cells to the row
            row.appendChild(timeCell);
            row.appendChild(incallCell);
            row.appendChild(outcallCell);

            // Append row to the table body
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}