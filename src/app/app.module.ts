import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppStateModule } from './app-state/app-state.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AuthguardServiceService } from './authguard-service.service';
import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { CustomerlistingComponent } from './pages/customerlisting/customerlisting.component';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HeaderComponent } from './pages/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { SearchfilterPipe } from './searchfilter.pipe';
import { FooterComponent } from './footer/footer.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AuthenticatedGuard } from './authentication.guard';
import { Header1Component } from './pages/header1/header1.component';
import { Sidebar1Component } from './pages/sidebar1/sidebar1.component';
import { HomeComponent } from './pages/home/home.component';
import { LineComponent } from './pages/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    CustomerlistingComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    SearchfilterPipe,
    FooterComponent,
    User1Component,
    User2Component,
    ChatroomComponent,
    Header1Component,
    Sidebar1Component,
    HomeComponent,
    LineComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStateModule,
    StoreDevtoolsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    
    [CollapseModule.forRoot()]
    
  ],
  
  providers: [AuthguardServiceService,AuthenticatedGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
