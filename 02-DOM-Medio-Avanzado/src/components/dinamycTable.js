const dinamycTable = (data, headers) => {
    const table = document.createElement('table');
    table.id = 'table-data-users';
    table.style.border = '1';
    
    const thead = document.createElement('thead');
    thead.id = 'thead-data-users';

    const headerRow = document.createElement('tr');
    headerRow.id = 'header-row-data-users';

    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
        // si quiero que al hacer clic en el encabezado se ordene tengo que incluir la logica aquí
    });

    thead.appendChild(headerRow);
    // creamos el tbody

    const tbody = document.createElement('tbody');
    // limpiamos la tabla
    tbody.innerHTML = "";

    data.forEach(user => {
        const trUser = document.createElement('tr');
        trUser.innerHTML = `
        <td>${user.nombre}</td>
        <td>${user.edad}</td>
        <td>${user.email}</td>
        `;
        // si quiero utilizar un bucle para recorrer las propiedades de cada objeto

        tbody.appendChild(trUser);
    });
    table.appendChild(thead, tbody);

    return table;
};

export default dinamycTable;