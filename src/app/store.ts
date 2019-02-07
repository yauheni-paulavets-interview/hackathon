import { Injectable } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

@Injectable()
export class Store {
    overlayRef: OverlayRef;
    message: any;
    setSelectedMessage(message) {
        this.message = message;
    }
    getMessage() {
        return this.message;
    }
    setOverlay(overlayRef) {
        this.overlayRef = overlayRef;
    }
    disposeOverlay() {
        this.overlayRef.dispose();
    }
}