import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Tomato dosa', 'This is a tomato dosa', 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Tomato_Dosa_chutney.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
