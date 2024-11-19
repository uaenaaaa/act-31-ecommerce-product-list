import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	placeholder = 'https://placehold.co/100';
	private readonly products: Product[] = [
		{
			id: 1,
			name: 'Phone XL',
			price: 799,
			description: 'A large phone with one of the best screens',
			imageUrl: this.placeholder,
		},
		{
			id: 2,
			name: 'Phone Mini',
			price: 699,
			description: 'A great phone with one of the best cameras',
			imageUrl: this.placeholder,
		},
		{
			id: 3,
			name: 'Phone Standard',
			price: 299,
			imageUrl: this.placeholder,
			description: 'A standard phone with a great price',
		},
		{
			id: 4,
			name: 'Tablet Pro',
			price: 999,
			description: 'A powerful tablet with a stunning display',
			imageUrl: this.placeholder,
		},
		{
			id: 5,
			name: 'Tablet Mini',
			price: 499,
			description: 'A compact tablet with great performance',
			imageUrl: this.placeholder,
		},
		{
			id: 6,
			name: 'Laptop Pro',
			price: 1299,
			description: 'A high-end laptop for professionals',
			imageUrl: this.placeholder,
		},
		{
			id: 7,
			name: 'Laptop Air',
			price: 999,
			description: 'A lightweight laptop with excellent battery life',
			imageUrl: this.placeholder,
		},
		{
			id: 8,
			name: 'Smartwatch Series 5',
			price: 399,
			description: 'A smartwatch with advanced health features',
			imageUrl: this.placeholder,
		},
		{
			id: 9,
			name: 'Smartwatch Series 3',
			price: 199,
			description: 'An affordable smartwatch with essential features',
			imageUrl: this.placeholder,
		},
		{
			id: 10,
			name: 'Wireless Earbuds',
			price: 149,
			description:
				'High-quality wireless earbuds with noise cancellation',
			imageUrl: this.placeholder,
		},
		{
			id: 11,
			name: 'Bluetooth Speaker',
			price: 99,
			description: 'A portable speaker with excellent sound quality',
			imageUrl: this.placeholder,
		},
		{
			id: 12,
			name: 'Smart Home Hub',
			price: 129,
			description: 'A hub to control all your smart home devices',
			imageUrl: this.placeholder,
		},
		{
			id: 13,
			name: '4K TV',
			price: 799,
			description: 'A 4K television with stunning picture quality',
			imageUrl: this.placeholder,
		},
		{
			id: 14,
			name: 'Gaming Console',
			price: 499,
			description: 'A next-gen gaming console with immersive graphics',
			imageUrl: this.placeholder,
		},
		{
			id: 15,
			name: 'VR Headset',
			price: 299,
			description: 'A virtual reality headset for immersive experiences',
			imageUrl: this.placeholder,
		},
	];

	getProducts(): Observable<Product[]> {
		return new Observable<Product[]>((subscriber) => {
			subscriber.next(this.products);
			subscriber.complete();
		});
	}
}
