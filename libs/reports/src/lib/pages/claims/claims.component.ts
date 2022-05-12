import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ClaimService } from 'libs/claim/src/lib/service/claim.service';

@Component({
  selector: 'insurance-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {
  claims: any;

  constructor(  private ClaimService:ClaimService,) { }

  ngOnInit(): void {
    this.ClaimService.getAllClaims().subscribe((res:any) =>{
      this.claims = res


    },(err)=>{

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

      PDF.save('claim.pdf');
    });
  }

}
