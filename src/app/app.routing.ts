import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaComponent} from './components/lista/lista.component';
import { DetailComponent} from './components/detail/detail.component';
import { DataServiceResolver} from './resolvers/data-service.resolver';


const appRoutes: Routes = [
    { path: 'lista', component: ListaComponent},
    { path: 'detail/:id', component: DetailComponent, resolve: {data:DataServiceResolver}} 
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
