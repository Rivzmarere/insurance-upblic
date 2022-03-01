import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insurance-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
