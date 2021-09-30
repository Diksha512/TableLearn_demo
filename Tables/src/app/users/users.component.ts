import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user :any;
  username:string=''
  nae:boolean =false;
  customers:string=''
  description:string=''
  

  constructor(private  usersService:UsersService) { }
  ngOnInit(): void {
    this.user =this.usersService.getUsers().subscribe(data=>
   {   console.log(data);
      this.user=data;
    }
    ,(err)=>{console.log("Unable to call data from url"+err)}  );
    
  }
  sortTable(str: any){

  }
}
