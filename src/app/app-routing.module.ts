import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { SearchProductComponent } from './components/search-product/search-product.component';

const routes: Routes = [
    { path: 'products', component: ProductComponent },
    { path: 'category/:id', component: SearchProductComponent },
    { path: 'search/:keyword', component: SearchProductComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: '**', redirectTo: '/products', pathMatch: 'full' },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
