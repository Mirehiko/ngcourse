import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'product',
  template: `<h1 class="product">Showing products in {{productCategory}}</h1>`,
  styles: ['.product {background: cyan}']
})
export class ProductDetailComponent implements OnDestroy {
  productCategory?: string;
  subscription: Subscription

  constructor(route: ActivatedRoute) {

    // this.productCategory = route.snapshot.queryParams['category'];

    this.subscription = route.queryParams
      .subscribe(params => this.productCategory = params['category']);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
