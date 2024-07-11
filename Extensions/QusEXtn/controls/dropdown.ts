// import { Component, OnInit } from '@angular/core';
// import { ModalDialogParams } from '@nativescript/angular';

// @Component({
// selector: 'custom-dropdown',
// template: `
// <StackLayout>
// <Label *ngFor="let option of options; let i = index" text="{{ option }}" (tap)="selectOption(i)"></Label>
// </StackLayout>
// `
// })
// export class CustomDropdownComponent implements OnInit {
// options: Array<string>;

// constructor(private params: ModalDialogParams) {}

// ngOnInit(): void {
// this.options = this.params.context.options;
// }

// selectOption(index: number): void {
// this.params.closeCallback(index);
// }
// }