import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from "../../models/employee.model";
import {Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  listeDesEmployees!: EmployeeModel[];
  errorMessage!: string;

  constructor(private employeeService: EmployeeService, private router: Router) {}


  ngOnInit(): void {
    this.listeDesEmployees = this.employeeService.afficherTousLesEmployees();
  }

  modifier(employee: EmployeeModel) {
    this.router.navigate(["modifier-employee", employee.id]).then();
  }

  supprimer(employee: EmployeeModel) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.employeeService.supprimerUnEmployee(employee);
    }
  }
}
