import {
    Directive,
    TemplateRef,
    ViewContainerRef,
    ViewRef
} from '@angular/core';


@Directive({
    selector: '[ngxOutlet]'
})
export class OutletDirective {

    attached: ViewRef;
    content: TemplateRef<any>;

    constructor(private _vcr: ViewContainerRef, private _templateRef: TemplateRef<any>) {

    }


    attach() {
        this.content = this._templateRef;
        this.attached = this._vcr.createEmbeddedView(this.content);
    }

    hasAttached() {
        return this.attached != null;
    }

    detach() {
        this._vcr.detach();
        this.attached = null;
    }
}
