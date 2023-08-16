import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'product',
  template: `<h1 class="product">Product Detail for Product {{productID}}</h1>`,
  styles: ['.product {background: cyan}']
})
export class ProductDetailComponent implements OnDestroy {
  productID?: string|null;
  page?: string;
  subscription?:Subscription;

  constructor(route: ActivatedRoute) {
    // this.productID = route.snapshot.paramMap.get('id');

    // The correct way is to receive params via subscription
    this.subscription = route.paramMap.subscribe(
      params => this.productID = params.get('id')
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


}
