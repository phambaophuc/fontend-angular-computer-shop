import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    products: Product[] = [];
    categories: Category[] = [];

    constructor(private productService: ProductService, private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.getAllProducts();
        this.getAllCategories();
    }

    getAllProducts() {
        this.productService.getAllProducts().subscribe({
            next: data => {
                this.products = data;
            },
            error: err => {
                console.error(err);
            }
        })
    }

    getAllCategories() {
        this.categoryService.getAllCategories().subscribe({
            next: data => {
                this.categories = data;
            },
            error: err => {
                console.error(err);
            }
        });
    }
}
