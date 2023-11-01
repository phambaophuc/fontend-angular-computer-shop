import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { SearchProductComponent } from './components/search-product/search-product.component';

const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'products', component: ProductComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products/search/:id', component: SearchProductComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
