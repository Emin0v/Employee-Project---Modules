export class UI {

    constructor() {
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
        this.employeesList = document.getElementById("employees");
        this.updateButton = document.getElementById("update");

    }

    addAllEmployeeToUI(employees) {
        let result = "";

        employees.forEach(employee => {
            result += `
                         <tr>
                                            
                            <td>${employee.name}</td>
                            <td>${employee.department}</td>
                            <td>${employee.salary}</td>
                            <td>${employee.id}</td>
                            <td><a href="#" id = "update-employee" class= "btn btn-danger">Update</a></td> 
                            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
                         </tr>
            `
        });

        this.employeesList.innerHTML = result;
    }

    cleartInput() {
        this.nameInput.value = "";
        this.departmentInput.value = "";
        this.salaryInput.value = "";

    }

    addEmployeeToUI(employee) {
        this.employeesList.innerHTML += `
        <tr>
                           
           <td>${employee.name}</td>
           <td>${employee.department}</td>
           <td>${employee.salary}</td>
           <td>${employee.id}</td>
           <td><a href="#" id = "update-employee" class= "btn btn-danger">Update</a></td> 
           <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
        </tr>
       `;
    }

    deleteEmployeeFromUI(element) {
        element.remove();
    }

    
    toggleUpdateButton(target) {
        if (this.updateButton.style.display === "none") {
            this.updateButton.style.display = "block";
            this.addEmployeeInfoToInput(target);
        } else {
            this.updateButton.style.display = "none";
            this.cleartInput();
        }
    }

    addEmployeeInfoToInput(target) {
        const children = target.children;

        this.nameInput.value = children[0].textContent;
        this.departmentInput.value = children[1].textContent;
        this.salaryInput.value = children[2].textContent;
    }

    updateEmployeeOnUI(employee,parent){
        parent.innerHTML = `
        <tr>
                           
           <td>${employee.name}</td>
           <td>${employee.department}</td>
           <td>${employee.salary}</td>
           <td>${employee.id}</td>
           <td><a href="#" id = "update-employee" class= "btn btn-danger">Update</a></td> 
           <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
        </tr>
       `;

    }

}