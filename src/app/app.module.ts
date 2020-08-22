import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  imports: [
    BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot([
			{ path: 'products', component: ProductListComponent },
			{ path: 'products/:id',
				canActivate: [ProductDetailGuard],
				component: ProductDetailComponent },
			{ path: 'welcome', component: WelcomeComponent },
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
		])
  ],
  declarations: [
    AppComponent,
		ProductListComponent,
		ConvertToSpacesPipe,
		StarComponent,
		ProductDetailComponent,
		WelcomeComponent
  ],
  bootstrap: [
		AppComponent
	]
})
export class AppModule { }
