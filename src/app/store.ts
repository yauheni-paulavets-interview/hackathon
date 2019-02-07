import { Injectable } from '@angular/core';

@Injectable()
export class Store {

    message: any;
    setSelectedMessage(message) {
        this.message = message;
    }
    getMessage() {
        return this.message;
    }
}