import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {
  bug:Bug=new Bug();
  bugArray:any;
  constructor(private bugService:BugService) { }

  ngOnInit(): void {


      const observable=this.bugService.getAllBugs();
      observable.subscribe(response=>{
        console.log(response);
        this.bugArray=response})

  }


}
