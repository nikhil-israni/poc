import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticatedGuard } from './authentication.guard';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {CustomerlistingComponent} from './pages/customerlisting/customerlisting.component'
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { Header1Component } from './pages/header1/header1.component';
import { Sidebar1Component } from './pages/sidebar1/sidebar1.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',component:SignUpComponent,pathMatch:'full'},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent,canActivate:[AuthenticatedGuard]},
  {path:'sidebar',component:SidebarComponent,canActivate:[AuthenticatedGuard]},
  {path:'customerlisting',component:CustomerlistingComponent,canActivate:[AuthenticatedGuard]},
  {path:'footer',component:FooterComponent,canActivate:[AuthenticatedGuard]},
  {path:'user1',component:User1Component,canActivate:[AuthenticatedGuard]},
  {path:'user2',component:User2Component,canActivate:[AuthenticatedGuard]},
  {path:'chatroom',component:ChatroomComponent,canActivate:[AuthenticatedGuard]},
  {path:'header1',component:Header1Component,canActivate:[AuthenticatedGuard]},
  {path:'sidebar1',component:Sidebar1Component,canActivate:[AuthenticatedGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthenticatedGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticatedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
