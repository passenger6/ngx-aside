import { NgxAsideComponent } from './aside.component';
import { Injectable, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef } from '@angular/core';

@Injectable()
export class AsideService {

    private _vcRef: ViewContainerRef;
    private _asideComponent: ComponentFactory<NgxAsideComponent>;

    private _openedPanles: ComponentRef<any>[] = [];

    componentInstance;
    constructor(private _resolver: ComponentFactoryResolver) {
        this._asideComponent = this._resolver.resolveComponentFactory(NgxAsideComponent);
    }

    init(vcRef: ViewContainerRef) {
        this._vcRef = vcRef;
    }
    add<T>(asideContent: T) {
        this.componentInstance = this._vcRef.createComponent(this._asideComponent);
        this._openedPanles.push(this.componentInstance);
        this.componentInstance.instance.outlet.attach(asideContent);
        this.componentInstance.instance.showOverlay = true;
        this.componentInstance.instance.show();

    }
    hide() {
        this._openedPanles[this._openedPanles.length - 1].instance.hide();
        this._openedPanles.pop();
    }
    slide() {
        this.componentInstance.instance.slide();
    }
}
