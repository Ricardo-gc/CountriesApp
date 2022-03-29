import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
