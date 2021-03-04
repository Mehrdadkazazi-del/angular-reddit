import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input()articleModel : Article;
  constructor() {
  }

  ngOnInit(): void {
  }

  voteUp(): boolean {
    this.articleModel.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.articleModel.voteDown();
    return false;
  }
}
