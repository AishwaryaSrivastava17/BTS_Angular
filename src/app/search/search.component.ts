import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bug:Bug = new Bug();
  bugResult:any;
  bugArray:Bug[]=[];
  name: string = '';
  status:string = 'NEW';
  constructor(private bugService: BugService) { }
  getBugName() {
    const bugName = this.name.trim();
    if (bugName) {
      const promise = this.bugService.getBugName(bugName);
      promise.subscribe(response => {
        this.bugResult = response;
        if(this.bugResult.length){

        this.bugArray=this.bugResult;

        }
        else{
          alert("Bug Name not in records");
        }
      },
        error => {
          console.log(error);
          alert('error happened..')
        })
    }
    else {
      const status = this.status;
      const promise = this.bugService.getBugStatus(status);
      promise.subscribe(response => {
        this.bugResult = response;
        if (this.bugResult.length) {
          this.bugArray = this.bugResult;
        }
        else {
          alert("No Bug with Status : " + status + " found");
        }
      },
        error => {
          console.log(error);
          alert('error happened..')
        })
    }
  }
  ngOnInit(): void {
  }
}
