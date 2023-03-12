import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { leavemodel } from '../leavemodel';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  public leave:leavemodel = {} as leavemodel;
  constructor(private api:ApiService,private route:Router) { }

  ngOnInit(): void {
  }

  apply(){
    this.api.applyleave(this.leave).subscribe((res=>{
    alert("leave applied sucessfully!!!")
    this.route.navigate(['/viewleave'])
    }))
  }
}
