import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { leavemodel } from '../leavemodel';

@Component({
  selector: 'app-update-leave',
  templateUrl: './update-leave.component.html',
  styleUrls: ['./update-leave.component.css']
})
export class UpdateLeaveComponent implements OnInit {
   public dataid:any;
   public leave:leavemodel={} as leavemodel
  constructor(private api:ApiService,private activateroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((param:Params)=>{
    this.dataid = param['get']('id');
    //console.log(this.dataid)
    })
    this.api.fetchdata(this.dataid).subscribe((data:any)=>{
     this.leave = data;
    // console.log(this.leave)
    })
  }

  //update
  updatedata(){
    this.api.update(this.leave,this.dataid).subscribe((data:any)=>{
      alert("Data updated successfully!!!!")
      this.router.navigate(['/viewleave'])
    })
  }
}
