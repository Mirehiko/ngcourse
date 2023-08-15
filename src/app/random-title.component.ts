import { Component, inject } from "@angular/core";
import { RandomTitleService } from "./random-title.service";

@Component({
    template: '{{title}}'
})
export class RandomTitleComponent {
    protected title: string;
    private _titleService = inject(RandomTitleService);
    constructor() {
        this.title = this._titleService.title;
    }
}