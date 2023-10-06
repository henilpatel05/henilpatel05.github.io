import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [

  //Titles
  // {
  //     path: '',
  //     component: HomeComponent,
  //     title: "Henil Kajavadra | Human Experience Designer"
  // },

  // {
  //   path: 'projects',
  //   component: ProjectsComponent,
  //   title: "Projects | UX Design"
  // },

  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
