/**
 * 
Data de EJEMPLO: con nombre, edad e email
[
    { nombre: "Juan", edad: 25, email: "juan@gmail.com" },
    { nombre: "Ana", edad: 30, email: "ana@gmail.com" },
    
 */

const dynamicTable = (data, headers) => {

    // creamos la tabla
    const table = document.createElement("table");
    table.id="table-data-users";
    table.style.border = 1;
    // ------ creamos el thead -----
    const thead = document.createElement("thead");
    // creamos el tr
    const headerRow = document.createElement("tr");
    // recorremos los headers
    headers.forEach(header => {
        // creamos cada th
        const th = document.createElement("th");
        th.textContent = header;
        // ---------- SI QUIERO QUE AL HACER CLICK EN EL HEADER ORDENE LA TABLA ------------
        // aquí iriía l a lógica de ordenación
        // añadimos cada th al tr
        headerRow.appendChild(th);
    });
    // añadimos el tr al thead
    thead.appendChild(headerRow); // <--- tr inyectado
    
    // ---- creamos el tbody -----
    const tbody = document.createElement("tbody");
    // limpiamos la tabla.
    tbody.innerHTML = "";
    // recorremos los datos
    data.forEach(user => { 
        // creamos cada tr
        const trUser= document.createElement("tr");
        trUser.inertHTML=`
        <td>${user.nombre}</td>
        <td>${user.edad}</td>
        <td>${user.email}</td>
        `;
        // OTRA FORMA si quiero utilizar un bucle para recorrer las propiedades de cada objeto
        // Inyectamos las tr al tBody
        tbody.appendChild(trUser);
    })
    // añadimos el thead a la tabla y el tboy a la tabla
    table.append(thead, tbody);
    return table;
    
};
    
    
    
    export default dynamicTable;