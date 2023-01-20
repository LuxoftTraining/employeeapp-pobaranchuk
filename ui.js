const PLACEHOLDER = "employeesPlaceholder";

function clearEmployeesPlaceholder() {
  document.getElementById(PLACEHOLDER).innerHTML = "";
}

function showEmployees(employees) {
  clearEmployeesPlaceholder();
  const ul = document.createElement("ul");
  for (let employee of employees) {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = employee.name + " " + employee.surname;
  }
  document.getElementById(PLACEHOLDER).appendChild(ul);
}

function runUI() {
  showEmployees(DATA.employees);
}

function addEmployeeUI() {
  let errorHTML = "";
  const name = document.getElementById("name").value;
  if (name == "") {
    errorHTML += " - Employee name should be set <br>";
  }
  const surname = document.getElementById("surname").value;
  if (surname == "") {
    errorHTML += " - Employee surname should be set <br>";
  }
  document.getElementById("addEmployeeFormErrorMessage").innerHTML = errorHTML;
  if (errorHTML.length != 0) return;

  const id = addEmployee(name, surname);
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";

  showEmployees(DATA.employees);
}
