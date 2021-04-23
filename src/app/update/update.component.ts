import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
bug:Bug=new Bug();
bugResult:any;
  bugArray:Bug[]=[];
  name: string = '';
  remainingText=70 ;
  remainingText1= 100;

  constructor(private bugService:BugService) { }
  valueChange(value: number) {
    this.remainingText = 70 - value;
   }
   valueChange1(value1: number) {
    this.remainingText1 = 100 - value1;
   }


update()
{const promise = this.bugService.update(this.bug,this.bug.id);
  promise.subscribe((response: any)=> {
    console.log(response);
    alert('Bug added..')

  },
  error=> {
    if(!error.ok){
      let message:string=error.headers.get("error");
      if(message.length<100){
        alert("Error !! :"+error.headers.get("error"));
      }
      else if(message.indexOf('ETA')>-1){
       alert("ETA Date cannot be past date");
      }
      else{
        alert("Error occured");
      }

    }
  })
}

getBugName() {
  const bugName = this.name.trim();
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
          this.bug=bug;
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

  ngOnInit(): void {
  }

}
