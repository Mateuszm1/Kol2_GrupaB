import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MWForumComponent } from './components/mw-forum/mw-forum.component';
import { MWForumDetailsComponent } from './components/mw-forum-details/mw-forum-details.component';

const routes: Routes = [

 {
    path: '',
    component: MWForumComponent
  },
  {
    path: 'forum',
    component: MWForumComponent
  },
  {
    path: 'forum/:id',
    component: MWForumDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
