import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    baseUrl = 'http://localhost:8080/api/products';

    constructor(private httpClient: HttpClient) { }

    getAllProducts(): Observable<any> {
        return this.httpClient.get(this.baseUrl);
    }

    getProductsByCategory(name: string): Observable<any> {
        const searchUrl = `${this.baseUrl}/category/${name}`;
        return this.httpClient.get(searchUrl);
    }

    searchProduct(keyword: string): Observable<any> {
        const searchUrl = `${this.baseUrl}/search?name=${keyword}`;
        return this.httpClient.get(searchUrl);
    }
}
