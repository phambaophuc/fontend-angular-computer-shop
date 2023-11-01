import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-search-product',
    templateUrl: './search-product.component.html',
    styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

    products: Product[] = [];
    categories: Category[] = [];

    currentCategoryId: string = '';

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private categoryService: CategoryService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(
            () => this.listProducts()
        );

        this.listCategories();
    }

    listProducts() {
        const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

        if (hasCategoryId) {
            this.currentCategoryId = this.route.snapshot.paramMap.get('id')!;
        }

        this.productService.getProductsByCategory(this.currentCategoryId).subscribe({
            next: data => {
                this.products = data;
            },
            error: err => {
                console.error(err);
            }
        });
    }

    listCategories() {
        this.categoryService.getAllCategories().subscribe({
            next: data => {
                this.categories = data;
            },
            error: err => {
                console.error(err);
            }
        })
    }
}
