import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  columns = ['select', 'firstName', 'lastName'];
  tableData = new MatTableDataSource<Person>(data);
  selection = new SelectionModel<Person>(true, []);

  constructor() { }

  ngOnInit() {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.tableData.data.forEach(row => this.selection.select(row));
  }

  printSelected(){
    console.log(this.selection.selected);
  }
}

export interface Person{
  firstName: string;
  lastName: string;
}

const data: Person[] = [
  {firstName: 'Pelle', lastName: 'Svanslös'},
  {firstName: 'Kalle', lastName: 'Anka'},
  {firstName: 'Grodan', lastName: 'Boll'},
  {firstName: 'Musse', lastName: 'Pigg'}
]
