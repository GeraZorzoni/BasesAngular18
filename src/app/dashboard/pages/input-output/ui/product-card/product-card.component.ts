import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  // Forma tradicional antes de Angular 17/18
  // @Input({
  //   required: true,
  // })
  // public product!: Product;

  public product = input.required<Product>(); // agrego required para evitar el undefined

  // Forma tradicional antes de Angular 17/18
  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>()

  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect(() => {
    console.log(this.product().name);
  });
}
