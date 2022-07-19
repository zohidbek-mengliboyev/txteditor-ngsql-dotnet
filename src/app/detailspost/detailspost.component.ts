import { Content } from './../Content';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-detailspost',
  templateUrl: './detailspost.component.html',
  styleUrls: ['./detailspost.component.scss']
})
export class DetailspostComponent implements OnInit {
  res: any;

  constructor(private route: ActivatedRoute, private contentservice:ContentService) { }

  ngOnInit(): void {

    let Id = this.route.snapshot.queryParams["Id"]
    this.GetcontentById(Id);
  }

  GetcontentById(Id:number)
  {
     this.contentservice.getContentById(Id).subscribe((data: any)=>{
      this.res=data;
    });
  }


}
