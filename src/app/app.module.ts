import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzTreeModule } from 'ng-tree-antd';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { TreesComponent } from './trees/trees.component';
import { ModelssComponent } from './modelss/modelss.component';

@NgModule({
  declarations: [
    AppComponent,
    TreesComponent,
    ModelssComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NzTreeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
