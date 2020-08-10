import { EventEmitter } from '@angular/core';

export interface ICplaceButton {
    text: ICplaceButtonText;
    click?: EventEmitter<any>;
}

export type ICplaceButtonText = string;
export type ICplaceButtonClick = EventEmitter<any>;
