import { ViewContainerRef, EventEmitter, ComponentFactoryResolver } from "@angular/core";
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
    private backdrop;
    visibleStatus: boolean;
    private rootViewContainerRef;
    constructor(_resolver: ComponentFactoryResolver, vcRef: ViewContainerRef);
    private addOverlay();
    hideAside(event: any): void;
    submitAside(): void;
    handleEscape(event: any): boolean;
    hide(): void;
    show(): void;
}
