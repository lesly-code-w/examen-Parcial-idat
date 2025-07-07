import { Routes } from '@angular/router';
import { HomeComponent } from './modules/outer/pages/home/home.component';
import { ProductosComponent } from './modules/outer/pages/productos/productos.component';
import { GalleryComponent } from './modules/outer/pages/gallery/gallery.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './modules/outer/pages/login/login.component';
import { FetchingComponent } from './modules/outer/pages/fetching/fetching.component';
import { TablesComponent } from './modules/outer/pages/tables/tables.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'fetching', component: FetchingComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

