import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Article[]>('http://localhost:8080/article');
  }

  create(payload: Article) {
    return this.http.post<Article>('http://localhost:8080/article', payload);
  }


}
