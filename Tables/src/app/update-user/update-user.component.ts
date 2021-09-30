import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { HttpClient
 } from '@angular/common/http';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user :any;
  avatar:string =''
  email:string=''
  firstName :string=''
  username :string=''
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.user =this.usersService.getUsers().subscribe(data=>
      {   console.log(data);
         this.user=data;}
       ,(err)=>{console.log("Unable to call data from url"+err)}  );
     }
     updateUser(formValue :NgForm){
      console.log(formValue.value);
      const postBody={
       title:formValue.value.firstname,
       body: formValue.value.description,
     
     }
      this.usersService.updateUser(postBody).subscribe(data=>{
     console.log(data) 
     
      },(err)=>{console.log("not able user post")}
      )
       }

}
