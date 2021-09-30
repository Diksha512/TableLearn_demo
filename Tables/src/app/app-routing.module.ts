import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users/users.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  { path: 'user', component: UsersComponent},
  { path: 'Add', component: AddUserComponent},
  { path: 'update', component: UpdateUserComponent},
  { path: 'delete', component: DeleteUserComponent},
  { path: 'Profile', component: ViewDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
