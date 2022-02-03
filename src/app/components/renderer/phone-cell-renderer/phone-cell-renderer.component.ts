import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-phone-cell-renderer',
  templateUrl: './phone-cell-renderer.component.html',
  styleUrls: ['./phone-cell-renderer.component.scss']
})
export class PhoneCellRendererComponent implements OnInit, ICellRendererAngularComp {
  public cellValue: any;
  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: any) {
    this.cellValue = params.value;
  }

  refresh(params: any): boolean {
    this.cellValue = params.value;
    return true;
  }

}
