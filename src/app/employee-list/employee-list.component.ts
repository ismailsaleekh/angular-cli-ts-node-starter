import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  employees: Employee[]

  getEmployees():void{
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }

/*   getEmployees():void{

  } */
  

}
