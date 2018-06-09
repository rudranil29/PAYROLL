import { Routes, RouterModule } from '@angular/router';


//import Admin
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ApproveleavesComponent } from './approveleaves/approveleaves.component';
import { PayemployeeComponent } from './payemployee/payemployee.component';
import { EditpaymentComponent } from './editpayment/editpayment.component';

const routes: Routes = [

    //Admin Routes
    
    { path: 'admin/admin_profile', component: AdminprofileComponent },
    { path: 'admin/create_account', component: CreateaccountComponent },
    { path: 'admin/approve_leave', component: ApproveleavesComponent },
    { path: 'admin/pay_employee', component: PayemployeeComponent },
    { path: 'admin/edit_payment', component: EditpaymentComponent }


];

export const AdminRouting = RouterModule.forRoot(routes);