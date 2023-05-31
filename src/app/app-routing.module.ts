import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEmployeeComponent} from "./composants/list-employee/list-employee.component";
import {AjouterEmployeeComponent} from "./composants/ajouter-employee/ajouter-employee.component";
import {ModifierEmployeeComponent} from "./composants/modifier-employee/modifier-employee.component";

const routes: Routes = [
  {path: "", redirectTo: "list-des-employees", pathMatch: "full"},
  {path: "list-des-employees", component: ListEmployeeComponent},
  {path: "ajouter-un-employee", component: AjouterEmployeeComponent},
  {path: "modifier-employee/:id", component: ModifierEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
