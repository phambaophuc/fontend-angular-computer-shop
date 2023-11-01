import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    baseUrl = 'http://localhost:8080/api/categories';

    constructor(private httpClient: HttpClient) { }

    getAllCategories(): Observable<any> {
        return this.httpClient.get(this.baseUrl);
    }
}