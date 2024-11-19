import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ProductComponent],
	template: `
		<main class="container">
			<app-product class="product"></app-product>
		</main>
	`,
	styles: `
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    .product {
      width: 91%;
      max-width: 1536px;
    }
  `,
})
export class AppComponent {
	title = 'act-31-ecommerce-product-list';
}
