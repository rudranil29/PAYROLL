import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { ApplyforleaveComponent } from './applyforleave/applyforleave.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { PayslipsComponent } from './payslips/payslips.component';
import { EmployeeRouting } from './employee.routing';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRouting
  ],
  declarations: [EmployeeprofileComponent, ApplyforleaveComponent, LeavestatusComponent, PayslipsComponent]
})
export class EmployeeModule { }
