import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from "../../models/employee.model";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-employee',
  templateUrl: './ajouter-employee.component.html',
  styleUrls: ['./ajouter-employee.component.css']
})
export class AjouterEmployeeComponent implements OnInit{

  newEmployee = new EmployeeModel();
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {}

  ajouterEmployee(){
    this.employeeService.ajouterUnEmployee(this.newEmployee);
    this.router.navigateByUrl("list-des-employees").then();
  }

}
