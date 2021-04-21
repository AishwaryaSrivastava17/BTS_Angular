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
  bugArray:any;
  name: string = '';
  status:string = '';
  constructor(private bugService: BugService) { }

  getBugNameandStatus() {
    const bugName = this.name.trim();

    const bugStatus = this.status.trim();

    if (bugName&&bugStatus) {
      const promise = this.bugService.getBugNameandStatus(bugName,bugStatus);

      promise.subscribe(response => {

        this.bugResult = response;
        if(this.bugResult.length){

        this.bugArray=this.bugResult;

        }
        else{
          alert("Bug not in records");
        }
      },
        (        error: any) => {
          console.log(error);
          alert('error happened..')
        })
    }
  else  if (bugName) {
      if (bugName) {
        const promise = this.bugService.getBugName(bugName);
        promise.subscribe(response => {
          this.bugResult = response;
          console.log(this.bugResult);
          if(this.bugResult.length){
            this.bugResult.forEach((bug: Bug) => {
              let etaDate = bug.etaDate;
              if (etaDate) {
                let finalEtaDate = etaDate.split('T')[0];
                bug.etaDate = finalEtaDate;
              }
              this.bugArray=this.bugResult;
            });
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
  }
  else  if (bugStatus) {
    if (bugStatus) {
      const promise = this.bugService.getBugStatus(bugStatus);
      promise.subscribe(response => {
        this.bugResult = response;
        console.log(this.bugResult);
        if(this.bugResult.length){
          this.bugResult.forEach((bug: Bug) => {
            let etaDate = bug.etaDate;
            if (etaDate) {
              let finalEtaDate = etaDate.split('T')[0];
              bug.etaDate = finalEtaDate;
            }
            this.bugArray=this.bugResult;
          });
        }
        else{
          alert("Bug Status not in records");
        }
      },
        error => {
          console.log(error);
          alert('error happened..')
        })
    }
}
  else{
    const observable=this.bugService.getAllBugs();
    observable.subscribe(response=>{
      console.log(response);
      this.bugArray=response})
  }
}
  ngOnInit(): void {

  }
}
