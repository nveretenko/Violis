import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SchemeComponent } from './scheme.component';

const routes: Routes = [{ path: '', component: SchemeComponent }];

@NgModule({
  declarations: [SchemeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SchemePageModule {}
