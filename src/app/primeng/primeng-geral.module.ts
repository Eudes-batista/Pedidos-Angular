import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    ToastModule,
    CardModule,
    InputMaskModule,
    DropdownModule
  ],
  exports: [
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    ToastModule,
    CardModule,
    InputMaskModule,
    DropdownModule
  ],
})
export class PrimengGeralModule { }
