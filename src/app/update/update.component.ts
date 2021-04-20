import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
bug:Bug=new Bug();
  constructor() { }
save(){}
  ngOnInit(): void {
  }

}
