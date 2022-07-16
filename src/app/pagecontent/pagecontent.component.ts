import { Component, OnInit } from '@angular/core';
import { ContentService } from "../content.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagecontent',
  templateUrl: './pagecontent.component.html',
  styleUrls: ['./pagecontent.component.scss']
})
export class PagecontentComponent implements OnInit {
  res: any;
  terms: any;
  cont: any;

  constructor(private contentservice:ContentService, private router: Router) { }

  ngOnInit(): void {
    this.Getcontent()
  }
  Getcontent()
  {
    this.contentservice.getContentList().subscribe((data:any)=>{
      this.res=data;
      this.terms= this.res[1].pageContentTitle;
      this.cont= this.res[1].Content;
      console.log(this.res);
    })
  }
  GetcontentById(id:number)
  {
    this.router.navigate(['/Details'], { queryParams: { Id: id } });
  }

}
