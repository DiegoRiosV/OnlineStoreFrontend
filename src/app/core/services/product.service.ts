import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private mock: Product[] = [
    { id: 'tote-orange', title: 'Tote Naranja', price: 15, imageUrl: 'assets/img/tote-orange.svg', color: 'Naranja' },
    { id: 'tote-green',  title: 'Tote Verde',   price: 15, imageUrl: 'assets/img/tote-green.svg',  color: 'Verde'   },
    { id: 'tote-special',title: 'Edición Especial', price: 18, imageUrl: 'assets/img/tote-green.svg', color: 'Verde' }
  ];
  getAll(): Observable<Product[]> { return of(this.mock); }
  getById(id: string | number): Observable<Product> {
    const p = this.mock.find(x => String(x.id) === String(id))!;
    return of(p);
  }
}
