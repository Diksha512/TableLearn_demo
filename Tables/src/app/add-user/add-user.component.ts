import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{from} from 'rxjs'
import { UsersService } from '../users.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})


export class AddUserComponent implements OnInit {
user :any;
avatar:string =''
email:string=''
firstName :string=''
username :string=''

  constructor( private userService :UsersService ) { }

  ngOnInit(): void {
    this.user =this.userService.getUsers().subscribe(data=>
   {   console.log(data);
      this.user=data;}
    ,(err)=>{console.log("Unable to call data from url"+err)}  );
  }
  addCustomer(formValue :NgForm){
    console.log(formValue.value);
    const postBody={
     title:formValue.value.firstname,
     body: formValue.value.description,
   
   }
    this.userService.addUser(postBody).subscribe(data=>{
   console.log(data) 
   
    },(err)=>{console.log("not able user post")}
    )
     }
}
