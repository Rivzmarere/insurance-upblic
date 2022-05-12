import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'insurance-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() Title:any

  constructor() { }

  ngOnInit(): void {
  }

}
