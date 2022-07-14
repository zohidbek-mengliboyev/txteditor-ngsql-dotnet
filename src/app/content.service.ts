import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  url :any;
  constructor(private http: HttpClient) { }

  AddUpdateContent(pagecontent: any) {
      debugger
      this.url = 'http://localhost:56357/Api/Contents/saveconetnt';
      return this.http.post(this.url, pagecontent);
  }
  Getcontent() {
    debugger
    this.url = 'http://localhost:56357/Api/Contents/Getpagdata';
    return this.http.get(this.url);
  }
  GetcontentById(Id: number) {
    debugger
    this.url = 'http://localhost:56357/Api/Contents/GetpagecontentBy?Id='+Id;
    return this.http.get(this.url);
  }
}
