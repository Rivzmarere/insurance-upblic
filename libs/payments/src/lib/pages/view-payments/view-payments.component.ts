import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'insurance-view-payments',
  templateUrl: './view-payments.component.html',
  styleUrls: ['./view-payments.component.scss']
})
export class ViewPaymentsComponent implements OnInit {


  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];


  constructor(private notification: NzNotificationService,) { }

  ngOnInit(): void {
  }

}
