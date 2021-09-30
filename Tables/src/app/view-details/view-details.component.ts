import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  user :any;
 


  columnDefs = [
    {headerName:'s.no',valueGetter:"node.rowIndex +1",cellStyle:{'font':'14px','background':'pink'}},
    {field: 'id', sortable: true, filter: true},
    {field: 'userId', sortable: true, filter: true},
    {field: 'likes', sortable: true, filter: true},
    {field: 'body', sortable: true, filter: true, },
    {field: 'postId', sortable: true, filter: true, }
];

 
  constructor(private http: HttpClient,private userservice:UsersService) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
rowData =[{
  "id": 1,
  "userId": 1,
  "likes": 21,
  "body": "Eget consectetur sed dolor lacinia sit lectus a praesent mollis amet ut hendrerit amet a lorem nec ac arcu elit enim sit lorem donec consectetur.",
  "postId": 6
}, {
  "id": 2,
  "userId": 3,
  "likes": 10,
  "body": "Dolor mauris ipsum lorem porta libero nam dolor consectetur maecenas a consectetur ultricies non sit congue quam sit ligula ut mattis congue nam et non.",
  "postId": 7
}, {
  "id": 3,
  "userId": 5,
  "likes": 5,
  "body": "Ante diam donec lacinia tincidunt sit amet elit sit quam tincidunt dolor mollis donec sit porta libero arcu elit sit donec mattis libero arcu eget.",
  "postId": 9
}, {
  "id": 4,
  "userId": 7,
  "likes": 3,
  "body": "Viverra donec lacinia lorem adipiscing sit donec elit enim tincidunt ut libero ut tincidunt donec ut hendrerit lacinia diam ligula consectetur elit maecenas sit non.",
  "postId": 10
}, {
  "id": 5,
  "userId": 9,
  "likes": 5,
  "body": "Amet lectus donec a ultricies eget ac amet consectetur mauris consectetur dolor ac porta ipsum praesent amet dolor vitae ut libero non viverra tortor hendrerit.",
  "postId": 1
}, {
  "id": 6,
  "userId": 2,
  "likes": 27,
  "body": "Dolor lorem tortor ante consectetur sit donec ipsum sed ut lacinia maecenas praesent a quam tincidunt dolor vitae augue libero arcu donec egestas sed a.",
  "postId": 1
}, {
  "id": 7,
  "userId": 4,
  "likes": 1,
  "body": "Ipsum donec et nec et non praesent tortor et donec hendrerit ut vehicula consectetur congue sit sed arcu consectetur libero porta et sit viverra dolor.",
  "postId": 2
}, {
  "id": 8,
  "userId": 6,
  "likes": 2,
  "body": "Egestas consectetur maecenas sit dolor adipiscing dolor amet dolor adipiscing arcu quam ipsum diam sit non egestas nec a ac ut consectetur ante maecenas augue.",
  "postId": 3
}, {
  "id": 9,
  "userId": 8,
  "likes": 5,
  "body": "Elit donec vehicula hendrerit donec lorem consectetur egestas porta hendrerit donec tortor dolor porta mauris mollis ut et ac praesent libero tincidunt a vehicula tortor.",
  "postId": 4
}]
  /*ngOnInit(): void {
    this.rowData =this.userservice.getApi().subscribe(data=>
      {   //console.log(data);
         this.rowData=data;
         console.log(this.rowData);
        }
       ,(err)=>{console.log("Unable to call data from url"+err)}  );
    
  }*/

}
