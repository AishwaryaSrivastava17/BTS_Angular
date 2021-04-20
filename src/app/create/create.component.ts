import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {  //controller
 // title:string = 'Userform';
  bug:Bug=new Bug(); //model -stores all form data
  remainingText=50 ;
  remainingText1= 100;
  //bugArray:Bug[]=[];


  constructor(private bugService:BugService) { }
  valueChange(value: number) {
    this.remainingText = 50 - value;
   }
   valueChange2(value1: number) {
    this.remainingText1 = 100 - value1;
   }
  save(){
    if (!this.bug.name.trim()) {
      alert("Bug name is empty");
    }
    else if (this.bug.name.length > 10) {
      alert("Bug name cannot be more than 10 character");
    }
    else if (!this.bug.projectId.trim()) {
      alert("Project id is empty");
    }

    else if (!this.bug.testerId.trim()) {
      alert("Tster id is empty");
    }

    else if (!this.bug.product.trim()) {
      alert("Product name is empty");
    }

    else if (!this.bug.module.trim()) {
      alert("Module name is empty");
    }

    else if (!this.bug.buildVersion.trim()) {
      alert("Build version is empty");
    }

    else if (!this.bug.synopsis.trim()) {
      alert("Synopsis is empty");
    }
    else if (this.bug.synopsis.length > 50) {
      alert("Synopsis cannot be more than 50 character");
    }
    else if (!this.bug.description.trim()) {
      alert("Please provide description");
    }
    else if (this.bug.description.length > 100) {
      alert("description cannot be more than 100 character");
    }

    const promise = this.bugService.save(this.bug);
    promise.subscribe(response=> {
      console.log(response);
      alert('user added..')
     // this.bugArray.push(Object.assign({}, this.bug));
    },
    error=> {
      console.log(error);
      alert('error Happened')
    })

  }
  ngOnInit(): void {

  }
}
