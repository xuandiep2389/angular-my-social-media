import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostsComponent} from './posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent},
  { path: 'detail/:id', component: PostDetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
