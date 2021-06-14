import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'mw-forum-item',
  templateUrl: './mw-forum-item.component.html',
  styleUrls: ['./mw-forum-item.component.css']
})
export class MWForumItemComponent implements OnInit {

  @Input() image = ' ';
  @Input() text = ' ';
  @Input() title = ' ';
  @Input() id = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
