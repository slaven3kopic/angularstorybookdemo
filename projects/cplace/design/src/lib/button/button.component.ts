import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICplaceButtonText, ICplaceButton, ICplaceButtonClick } from './button.api';
import { Event } from '@angular/router';

@Component({
  selector: 'cplace-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class CplaceButtonComponent implements ICplaceButton {

    /**
     * Cplace button text
     */
    @Input() text: ICplaceButtonText;

    /**
     * Cplace button click emitter
     */
    @Output() click: ICplaceButtonClick = new EventEmitter();

    /**
     * Cplace button click handler
     * @param event Click event
     */
    public onClick(event: Event): void {
        this.click.emit(event);
    }

}
