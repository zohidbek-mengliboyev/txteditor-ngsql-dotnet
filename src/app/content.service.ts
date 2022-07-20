import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from "./Content";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  readonly txtEditorUrl = "https://localhost:7212/api";

  constructor(private http: HttpClient) { }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.txtEditorUrl + '/PostContent/Create', content);
  }

  updateContent(id: number, content: Content): Observable<Content> {
    return this.http.put<Content>(this.txtEditorUrl + `/PostContent/Update/${id}`, content);
  }

  deleteContent(id: string): Observable<number> {
    return this.http.delete<number>(this.txtEditorUrl + `/PostContent/Delete/${id}`);
  }

  getContentList(): Observable<Content[]> {
    return this.http.get<Content[]>(this.txtEditorUrl + '/PostContent/GetAll');
  }

  getContentById(id: number): Observable<Content> {
    return this.http.get<Content>(this.txtEditorUrl + `/PostContent/Get/${id}`);
  }

}
