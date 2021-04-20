import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { GetBugComponent } from './get-bug/get-bug.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './update/update.component';

const appRoutes: Routes = [
  { path: '', component: CreateComponent }, //default, Home page
  { path: 'search', component: SearchComponent },
  { path: 'get-bug', component: GetBugComponent },
  { path: 'update', component: UpdateComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    GetBugComponent,
   SearchComponent,
   HeaderComponent,
   UpdateComponent

  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] //first component
})
export class AppModule { }
