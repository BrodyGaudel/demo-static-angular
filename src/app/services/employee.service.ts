import { Injectable } from '@angular/core';
import {EmployeeModel} from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  listeEmployees!: EmployeeModel[];
  employee!: EmployeeModel;

  constructor() {
    this.listeEmployees = [
      {id: 1, prenom: "Karl Pierre Stan", nom: "Aziz Abdel", proffession: "Ingénieur en Cloud Computing"},
      {id: 2, prenom: "Mohamed Ali", nom: "Moustapha Aymen", proffession: "Ingénieur en Intelligence Artificielle"},
      {id: 3, prenom: "Oumaima Emma", nom: "MOUSSAVOU MBINA", proffession: "Ingénieur en Sécurité Informatique"},
      {id: 4, prenom: "John Kalvin Stan", nom: "MBINA MBANDINGA", proffession: "Ingénieur en Génie Logiciel"},
      {id: 5, prenom: "Marvin Ivan Dan", nom: "MOUBA BONGO MBA", proffession: "Ingénieur en Système Embarquée"}
    ];
  }

  afficherTousLesEmployees(){
    return this.listeEmployees;
  }

  ajouterUnEmployee(employee: EmployeeModel){
    this.listeEmployees.push(employee);
  }

  supprimerUnEmployee(employee: EmployeeModel){
    const index = this.listeEmployees.indexOf(employee, 0);
    if (index > -1) {
      this.listeEmployees.splice(index, 1);
    }
  }

  modifierUnEmployee(employee: EmployeeModel){
    this.supprimerUnEmployee(employee);
    this.ajouterUnEmployee(employee);
    this.trierListeDesEmployees();
  }

  consulterUnEmployee(id:number): EmployeeModel{
    this.employee = this.listeEmployees.find(p => p.id == id)!;
    return this.employee;
  }

  trierListeDesEmployees(){
    this.listeEmployees = this.listeEmployees.sort((n1,n2) => {
      if (n1.id > n2.id) {
        return 1;
      }
      if (n1.id < n2.id) {
        return -1;
      }
      return 0;
    });
  }


}
