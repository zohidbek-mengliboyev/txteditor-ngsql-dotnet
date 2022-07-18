import { Component, OnInit, ViewChild ,ElementRef } from '@angular/core';
import { ContentService } from "../content.service";
import { Content } from "../Content";
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.scss']
})
export class TexteditorComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string;
  @ViewChild('PageContent') PageContent: any;
  res: any;

  constructor(private contentservice: ContentService,
              private router: Router,
              private route: ActivatedRoute) { }

  contentdata = new Content();

  ngOnInit(): void {
    this.Getcontent()
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  onSubmit() {
    this.contentservice.addContent(this.contentdata).subscribe((data: any) => {
      alert("Data Saved Successfully!");
      this.router.navigate(['/Post']);
    })
  }

  Getcontent()
  {
    this.contentservice.getContentList().subscribe((data:any)=>{
      this.res=data;
      console.log(this.res);
    })
  }

}
