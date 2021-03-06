import { routing } from './employees.routing';
import { EmployeesComponent } from './employees.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { EmployeeService } from './employee.service';
import { EmployeeTableComponent } from './employee-report/employee-table/employee-table.component';
import { EmployeeChartComponent } from './employee-report/employee-chart/employee-chart.component';
import { SimpleNotificationsModule } from "angular2-notifications";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    SimpleNotificationsModule,    
    routing,
  ],
  providers: [EmployeeService],
  declarations: [NewEmployeeComponent, EmployeesComponent, EmployeeReportComponent, EmployeeTableComponent, EmployeeChartComponent]
})
export class EmployeesModule { }
