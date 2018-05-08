import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {PrivacyvaultdataService} from "../privacyvaultdata.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data;
  tableSource;
  columns = ['select', 'type', 'name', 'adress', 'email', 'pnr'];
  tableData;
  selection;

  constructor(private dataService: PrivacyvaultdataService) { }



  ngOnInit() {
    this.dataService.searchData('Pelle Svanslös 1234567891 mail@mail.se').subscribe(data => {
      console.log(data);
      this.data = data;
      this.createSource();
      this.tableData = new MatTableDataSource<Person>(this.tableSource);
      this.selection = new SelectionModel<Person>(true, []);
    });
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
    let selected = this.selection.selected;
    let dataToPrint = [];
    for(var i = 0; i < selected.length; i++){
      if(selected[i].type === 'customer'){
        dataToPrint.push(this.data.customers[selected[i].id]);
      } else if(selected[i].type === 'supplier'){
        dataToPrint.push(this.data.suppliers[selected[i].id]);
      }else if(selected[i].type === 'employee'){
        dataToPrint.push(this.data.employees[selected[i].id]);
      }else if(selected[i].type === 'customer invoice'){
        dataToPrint.push(this.data.customer_invoices[selected[i].id]);
      }else if(selected[i].type === 'customer order'){
        dataToPrint.push(this.data.customer_orders[selected[i].id]);
      }else if(selected[i].type === 'customer offer'){
        dataToPrint.push(this.data.customer_offers[selected[i].id]);
      }else if(selected[i].type === 'customer contract'){
        dataToPrint.push(this.data.customer_contracts[selected[i].id]);
      }else if(selected[i].type === 'supplier invoice'){
        dataToPrint.push(this.data.supplier_invoices[selected[i].id]);
      }
    }
    console.log(this.selection.selected);
    console.log(dataToPrint);
  }

  createSource(){
    let source: Person[] = [];

    if(this.data){
      for(var i = 0; i < this.data.customers.length; i++){
        let customer = this.data.customers[i];
        let item: Person = {id: i, name: customer.Name, adress: customer.Address1, pnr: customer.OrganisationNumber, email: customer.Email, type: 'customer'};
        source.push(item);
      }
      for(var i = 0; i < this.data.suppliers.length; i++){
        let supplier = this.data.suppliers[i];
        let item: Person = {id: i, name: supplier.Name, adress: supplier.Address1, pnr: supplier.OrganisationNumber, email: supplier.Email, type: 'supplier'}
        source.push(item);
      }
      for(var i = 0; i < this.data.employees.length; i++){
        let employee = this.data.suppliers[i];
        let item: Person = {id: i, name: employee.FullName, adress: employee.Address1, pnr: employee.PersonalIdentityNumber, email: employee.Email, type: 'employee'}
        source.push(item);
      }
      for(var i = 0; i < this.data.customer_invoices.length; i++){
        let customer_invoice = this.data.customer_invoices[i];
        let item: Person = {id: i, name: customer_invoice.CustomerName, adress: customer_invoice.Address1, pnr: customer_invoice.OrganisationNumber, email: customer_invoice.EmailInformation.EmailAddressTo, type: 'customer invoice'}
        source.push(item);
      }
      for(var i = 0; i < this.data.customer_orders.length; i++){
        let customer_order = this.data.customer_orders[i];
        let item: Person = {id: i, name: customer_order.CustomerName, adress: customer_order.Address1, pnr: customer_order.OrganisationNumber, email: customer_order.EmailInformation.EmailAddressTo, type: 'customer order'}
        source.push(item);
      }
      for(var i = 0; i < this.data.customer_offers.length; i++){
        let customer_offer = this.data.customer_offers[i];
        let item: Person = {id: i, name: customer_offer.CustomerName, adress: customer_offer.Address1, pnr: customer_offer.OrganisationNumber, email: customer_offer.EmailInformation.EmailAddressTo, type: 'customer offer'}
        source.push(item);
      }
      for(var i = 0; i < this.data.customer_contracts.length; i++){
        let customer_contract = this.data.customer_contracts[i];
        let item: Person = {id: i, name: customer_contract.CustomerName, adress: customer_contract.Address1, pnr: customer_contract.OrganisationNumber, email: customer_contract.EmailInformation.EmailAddressTo, type: 'customer contract'}
        source.push(item);
      }
      for(var i = 0; i < this.data.supplier_invoices.length; i++){
        let supplier_invoice = this.data.supplier_invoices[i];
        let item: Person = {id: i, name: supplier_invoice.SupplierName, adress: supplier_invoice.Address1, pnr: supplier_invoice.OrganisationNumber, email: '', type: 'supplier invoice'}
        source.push(item);
      }

    }

    this.tableSource = source;
  }
}

export interface Person{
  id;
  name;
  adress;
  email;
  pnr;
  type;
}

