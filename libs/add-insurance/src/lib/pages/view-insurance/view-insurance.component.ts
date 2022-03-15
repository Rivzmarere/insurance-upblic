import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { resolve } from 'path';
import { InsuranceService } from '../../service/insurance.service';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'insurance-view-insurance',
  templateUrl: './view-insurance.component.html',
  styleUrls: ['./view-insurance.component.scss']
})
export class ViewInsuranceComponent implements OnInit {

  data:any= []

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

  constructor(private notification: NzNotificationService,private service: InsuranceService,) { }

  ngOnInit(): void {
    this.getInsurances()
  }


  getInsurances(){
    this.service.getAllInsurances().subscribe(res=>{
     this.data = res
     this.notification.success(
      'Success',
      'Succefully Retrived Insurances.'
    );
    },(err)=>{
      this.notification.success(
        'Eror',
        err
      );
    })
  }

}
