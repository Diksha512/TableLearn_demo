import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
interface User{
  name:string,email:string,phonenumber:number,postId:number
}
interface  Comment{
  id:number,userId:number,likes:number,body:string
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
addUser(  body:any){
    const headers =new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'2345'
    });

    const params =new HttpParams().set('pageSize','10').set('pageOptions','100')
  return  this.http.post('http://fakeapi.jsonparseronline.com/users',body,{headers:headers,params:params})
        }
  getUsers() :Observable<User>{
    const headers =new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'2345'
    });

    const params =new HttpParams().set('pageSize','10').set('pageOptions','100')
  
   return this.http.get<User>("http://fakeapi.jsonparseronline.com/users",{headers:headers,params:params});
   /* const user=[{UserId:10,Username:'falana'},
    {Id:20,username:'diksdana'},{Id:30,Username:'nothing',}
    ];
    return users;*/
  }
  updateUser(  body:any){
    const headers =new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'2345'
    });

    const params =new HttpParams().set('pageSize','10').set('pageOptions','100')
  return  this.http.put('http://fakeapi.jsonparseronline.com/users/1',body,{headers:headers,params:params})
        }
        getApi():Observable<Comment>{
          return this.http.get<Comment>('http://fakeapi.jsonparseronline.com/comments');
        }
        deleteUser(avatar: any):Observable<object>{
          return this.http.delete('http://fakeapi.jsonparseronline.com/users'+avatar);
        }
}
