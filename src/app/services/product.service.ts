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
        return this.httpClient.get(`${this.baseUrl}/find-by-category/${name}`);
    }
}
