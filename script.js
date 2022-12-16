let selectedRow = null;

function onSubmit() {
  if (validate()) {
    var formData = readPosts();
    if (selectedRow == null) insertNewPosts(formData);
    else updatePosts(formData);
    resetPosts();
  }
}

function readPosts() {
  var formData = {};
  formData["id"] = document.getElementById("id").value;
  formData["team"] = document.getElementById("team").value;
  formData["title"] = document.getElementById("title").value;
  formData["branch"] = document.getElementById("branch").value;
  return formData;
}

function insertNewPosts(data) {
  let table = document.getElementById("employeeList");
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.id;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.team;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.title;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.branch;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onRemove(this)">Remove</a>`;
}

function resetPosts() {
  document.getElementById("id").value = "";
  document.getElementById("team").value = "";
  document.getElementById("title").value = "";
  document.getElementById("branch").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("id").value = selectedRow.cells[0].innerHTML;
  document.getElementById("team").value = selectedRow.cells[1].innerHTML;
  document.getElementById("title").value = selectedRow.cells[2].innerHTML;
  document.getElementById("branch").value = selectedRow.cells[3].innerHTML;
}
function updatePosts(formData) {
  selectedRow.cells[0].innerHTML = formData.id;
  selectedRow.cells[1].innerHTML = formData.team;
  selectedRow.cells[2].innerHTML = formData.title;
  selectedRow.cells[3].innerHTML = formData.branch;
}

function onRemove(td) {
  if (confirm("Are you sure to delete this file ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function validate() {
  isValid = true;
  return isValid;
}
