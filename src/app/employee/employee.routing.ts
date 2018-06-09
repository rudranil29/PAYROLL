import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import Employee
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { ApplyforleaveComponent } from './applyforleave/applyforleave.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { PayslipsComponent } from './payslips/payslips.component';

const routes: Routes = [


    //employee Routes

    { path: 'employee/employee_profile', component: EmployeeprofileComponent },
    { path: 'employee/leave_apply', component: ApplyforleaveComponent },
    { path: 'employee/leave_status', component: LeavestatusComponent },
    { path: 'employee/payslips', component:PayslipsComponent },


];

export const EmployeeRouting = RouterModule.forRoot(routes);