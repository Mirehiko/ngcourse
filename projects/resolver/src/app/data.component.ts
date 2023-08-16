import {Component} from "@angular/core";
import {DataService} from "./data.service";
@Component({
    selector: 'product',
    template: '<h1 class="stock">Data Component</h1>' +
      'size of loaded data: {{dataSize}}',
    styles: ['.stock {background: rgba(0,255,255,0.14)}']
})
export class DataComponent {

  constructor(public dataService: DataService) {
  }

  get dataSize() {
    return this.dataService.mydata?.length
  }

}

