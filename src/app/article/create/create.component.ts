import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    articleForm: Article = {
      id:0,  
      namear:'',
      name:'',	
      category:'', 
      unit:'',  
      serial:'',
      type:'',
      qmax:'',
      volume:'',
      remarks:'',	
      stock:true,
      used:true,
    };
   
    constructor(private articleService:ArticleService,
      private router:Router) {}
   
    ngOnInit(): void {}
   
    create(){
      this.articleService.create(this.articleForm)
      .subscribe({
        next:(data) => {
          this.router.navigate(["/article/home"])
        },
        error:(err) => {
          console.log(err);
        }
      })
    }
  }
