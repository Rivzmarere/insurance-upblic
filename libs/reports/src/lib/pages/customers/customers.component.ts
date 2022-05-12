import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CustomerService } from '../../../../../customer/src/lib/service/customer.service';

@Component({
  selector: 'insurance-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: any;

  constructor( private CustomerService:CustomerService,) { }

  ngOnInit(): void {
    this.CustomerService.getAllCustomers().subscribe((res:any) =>{
      this.customers = res
    console.log(this.customers.length)



    },(err:any)=>{
    })
  }

  public openPDF(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const DATA = document.getElementById('htmlData')!;

    html2canvas(DATA).then((canvas) => {
      const fileWidth = 190;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('customers.pdf');
    });
  }
}
