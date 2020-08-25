import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoronavirusComponent } from './Coronavirus/Coronavirus.component';
import { LocationComponent } from './Location/Location.component';
import { AboutusComponent } from './Aboutus/About.component';
import { ContactComponent } from './ContactUs/contact.component';

// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const appRoutes: Routes = [
  { path: '', component: CoronavirusComponent },
  { path: 'Location', component: LocationComponent },
  { path: 'AboutUs', component: AboutusComponent },
  { path: 'ContactUs', component: ContactComponent },
  // {path:'users', component:UsersComponent,children:[{path:':id/:name',component:UserComponent}]},
  // {path:'servers', canActivateChild:[AuthGuard],component:ServersComponent,children:[{path:':id/edit',canDeactivate:[CanDeactivateGuard],component:EditServerComponent},
  // {path:':id',component:ServerComponent}]},
  // {path:'not-found',component:PageNotFoundComponent},
  // {path:'**',redirectTo:'/not-found',pathMatch:'full'}

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {

}