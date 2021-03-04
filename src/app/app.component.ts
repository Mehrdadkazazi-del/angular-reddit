import { Component } from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articleList : Article [] = [];

  constructor() {
    this.articleList = [
      new Article(10, "title1" , "link1"),
      new Article(20, "title2" , "link2"),
      new Article(30, "title3" , "link3")
    ]
  }

  sortedArticles(): Article[] {
    return this.articleList.sort((a: Article, b: Article) => b.votes - a.votes).reverse();
  }

  addArticle(newTitle: HTMLInputElement, newLink: HTMLInputElement) {
    console.log(`${newTitle.value} <-----> ${newLink.value}`);
    this.articleList.push(new Article(0,`${newTitle.value}`,`${newTitle.value}`));
    return false;
  }
}
