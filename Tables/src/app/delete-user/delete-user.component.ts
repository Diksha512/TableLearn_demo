import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(private userservice:UsersService) { }

  ngOnInit(): void {
  }
  deleteUser(){
    this.userservice.deleteUser(1).subscribe(data=>{console.log("userdeleted SUccessfully"+data)},
    (err)=>console.log("Unable to delete user"+err));
  }
}
