const Employee = require("../lib/Employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  generateManagerHTML(data) {
    return `<div class="card employee-card col-12 col-md-4">
     <div class="card-header">
          <h2 class="card-title"aa>${this.name}</h2>
          <h3 class="card-title"><i class="fab fa-galactic-republic mr-2"></i>${this.getRole()}</h3>
     </div>
     <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">Office Number: ${this.officeNumber}</li>
        </ul>
    </div>
 </div>
   `}
 };

module.exports = Manager;

