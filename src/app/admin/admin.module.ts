import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ApproveleavesComponent } from './approveleaves/approveleaves.component';
import { PayemployeeComponent } from './payemployee/payemployee.component';
import { EditpaymentComponent } from './editpayment/editpayment.component';
import { AdminRouting } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting
  ],
  declarations: [AdminprofileComponent, CreateaccountComponent, ApproveleavesComponent, PayemployeeComponent, EditpaymentComponent]
})
export class AdminModule { }
