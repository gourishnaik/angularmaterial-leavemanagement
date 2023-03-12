import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { leavemodel } from './leavemodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //apply leave
   applyleave(data:leavemodel){
     return this.http.post<leavemodel>("http://localhost:3000/posts",data)
   }
  // view leave
  viewleave(){
    return this.http.get<leavemodel[]>("http://localhost:3000/posts");
  }
  // delete leave
  delete(id:number){
    return this.http.delete<leavemodel>("http://localhost:3000/posts/"+id)
  }
  // fetch data
  fetchdata(id:number){
    return this.http.get<leavemodel>("http://localhost:3000/posts/"+id)
  }
  // update data
  update(data:leavemodel,id:number){
    return this.http.put<leavemodel>("http://localhost:3000/posts/"+id,data)
  }

}
