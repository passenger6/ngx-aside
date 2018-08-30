import { ViewContainerRef, EventEmitter, ComponentFactoryResolver } from '@angular/core';
export declare class NgxAsideComponent {
    private _resolver;
    private vcRef;
    cancel: EventEmitter<any>;
    submit: EventEmitter<any>;
    position: string;
    showOverlay: boolean;
    closeOnEscape: boolean;
    showDefaultFooter: boolean;
    showDefaultHeader: boolean;
    title: string;
    cancelButtonTitle: string;
    submitButtonTitle: string;
    visibleStatus: boolean;
    private rootViewContainerRef;
    private backdrop;
    constructor(_resolver: ComponentFactoryResolver, vcRef: ViewContainerRef);
    hideAside(event: any): void;
    submitAside(event: any): void;
    handleEscape(event: any): boolean;
    hide(): void;
    show(): void;
    private addOverlay();
}
