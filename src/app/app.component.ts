import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CartDrawerComponent } from './shared/cart-drawer/cart-drawer.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CartDrawerComponent, FormsModule],
  templateUrl: './app.component.html',     
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
