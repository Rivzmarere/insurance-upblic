import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'insurance-view-cutomers',
  templateUrl: './view-cutomers.component.html',
  styleUrls: ['./view-cutomers.component.scss']
})
export class ViewCutomersComponent implements OnInit {
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

  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers()
  }


  getCustomers(){
    this.service.getAllCustomers().subscribe(res=>{
     this.data = res
    })
  }

  getUser(event:any){
    console.log(event)
  }

}
