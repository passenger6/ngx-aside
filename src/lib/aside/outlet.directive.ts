import {
    Directive,
    TemplateRef,
    ViewContainerRef,
    ViewRef,
    ComponentFactoryResolver
} from '@angular/core';


@Directive({
    selector: '[ngxOutlet]'
})
export class OutletDirective {

    attached: ViewRef;
    content: TemplateRef<any>;

    constructor(private _vcRef: ViewContainerRef, private _resolver: ComponentFactoryResolver) {

    }


    attach(component: any) {
        component = this._resolver.resolveComponentFactory(component);
        const componentInstance = this._vcRef.createComponent(component, 0);
        //this.content = _templateRef;
        //this.attached = this._vcr.createEmbeddedView(this.content);
    }

    hasAttached() {
        return this.attached != null;
    }

    detach() {
        this._vcRef.detach();
        this.attached = null;
    }
}
