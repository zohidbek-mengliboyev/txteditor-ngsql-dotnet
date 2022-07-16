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
  mycontent: string | undefined;
  log: string | undefined
  @ViewChild('PageContent') PageContent: any;
  res: any;


  constructor(private contentservice: ContentService,
              private router: Router,
              private route: ActivatedRoute) { }

  public id!: number;
  public editMode: boolean = false;
  public contentdata = new Content();

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null

    })

    this.Getcontent()
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  // onSubmit()
  // {
  //   // debugger;
  //   // debugger;
  //   this.contentservice.AddUpdateContent(this.contentdata).subscribe((data : any) => {
  //     debugger;
  //     alert("Data saved Successfully");
  //     this.router.navigate(['/Post']);

  //   })
  // }

  onClickSubmit() {
    if (this.editMode) {
      this.contentservice.updateContent(this.id, this.contentdata).subscribe((data: any) => {
        alert("Data updated Successfully!");
        this.router.navigate(['/Put']);
      })
    } else  {
      this.contentservice.addContent(this.contentdata).subscribe((data: any) => {
        alert("Data saved Successfully!");
        this.router.navigate(['/Post']);
      })
    }
  }

  Getcontent()
  {
    this.contentservice.getContentList().subscribe((data:any)=>{
      this.res=data;
      console.log(this.res);
    })
  }

}
