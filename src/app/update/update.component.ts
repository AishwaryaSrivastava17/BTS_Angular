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

  constructor(private bugService: BugService) { }
update()
{const promise = this.bugService.update(this.bug,this.bug.id);
  promise.subscribe((response: any)=> {
    console.log(response);
    alert('Bug added..')

  },
    (  error: { ok: any; })=> {
    console.log(error);
    if(!error.ok)

    alert('error Happened')
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
