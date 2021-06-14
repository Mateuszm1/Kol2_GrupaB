import { Component, OnInit } from '@angular/core';
import {MWDataService} from "../../service/mw-data.service";

@Component({
  selector: 'mw-forum',
  templateUrl: './mw-forum.component.html',
  styleUrls: ['./mw-forum.component.css']
})
export class MWForumComponent implements OnInit {

 	public items$: any;

  constructor(private service: MWDataService) { }

  ngOnInit(){
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    }); }

}
