import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [
     CategoryComponent,
     NewCategoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CategoryModule { }
