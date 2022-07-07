let collapseBtn = document.querySelector(".table__collapse")
let table = document.querySelector(".table")


if (collapseBtn) {
    collapseBtn.onclick = function() {
        collapseBtn.classList.toggle("table__collapse--active")
        table.classList.toggle("table--collapsed")
    }
}

let select = document.querySelector(".my-select")
if (select) {
    select.onclick = function() {
        select.classList.toggle("open")
    }
}