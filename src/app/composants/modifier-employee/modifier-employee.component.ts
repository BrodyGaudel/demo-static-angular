import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {EmployeeModel} from "../../models/employee.model";

@Component({
  selector: 'app-modifier-employee',
  templateUrl: './modifier-employee.component.html',
  styleUrls: ['./modifier-employee.component.css']
})
export class ModifierEmployeeComponent implements OnInit {

  currentEmployee = new EmployeeModel();
  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.currentEmployee = this.employeeService.consulterUnEmployee(this.activatedRoute.snapshot. params['id']);
    console.log(this.currentEmployee);
  }

  modifierEmployee() {
    this.employeeService.modifierUnEmployee(this.currentEmployee);
    this.router.navigate(['list-des-employees']).then();
  }
}
