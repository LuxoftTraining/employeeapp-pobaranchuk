const PLACEHOLDER = "employeesPlaceholder";

function clearEmployeesPlaceholder() {
  document.getElementById(PLACEHOLDER).innerHTML = " ";
}

function showEmployeesUI(employees) {
  clearEmployeesPlaceholder();
  const ul = document.createElement("ul");
  
  for (let employee of employees) {  
    const removeButton = document.createElement("button"); 
    const li = document.createElement("li");   
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener("click", () => removeEmployeeUI(employee.id));          
    li.innerHTML = employee.name + " " + employee.surname;
    li.appendChild(removeButton);
    ul.appendChild(li);
  }
  document.getElementById(PLACEHOLDER).appendChild(ul);
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

  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  addEmployee(name, surname);
  showEmployeesUI(DATA.employees);
}

function removeEmployeeUI(id) {
  removeEmployee(id);
  showEmployeesUI(DATA.employees);
}

function runUI() {
  showEmployeesUI(DATA.employees);
}
