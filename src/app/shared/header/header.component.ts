import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe} from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, AsyncPipe, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.count$ = this.cart.count$;
  }

  open(){
    document.querySelector('app-cart-drawer')
      ?.dispatchEvent(new CustomEvent('open'));
  }
  onLogin() {
 
  console.log('Login clicado');
}

}
