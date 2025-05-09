// card.js
export function Table(heading, rows) {
    const container = document.createElement("div");
    if (heading) {
      const h2 = document.createElement("h2");
      h2.className = "table-heading";
      h2.textContent = heading;
      container.appendChild(h2);
    }
    const table = document.createElement("table");
    table.className = "custom-table";
    rows.forEach(row => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.className = "label-cell";
      td1.textContent = row.label;
      const td2 = document.createElement("td");
      td2.className = "value-cell";
      td2.textContent = row.value;
      tr.appendChild(td1);
      tr.appendChild(td2);
      table.appendChild(tr);
    });
    container.appendChild(table);
    return container;
  }
    