import { Component, Input } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { ElectionTableComponent } from '../../components/election-table/election-table.component';
import { ColumnConfiguration } from '../../model/column-configutation';
import { VotersList } from '../../model/voters-list';
import { DisplayStyle } from '../../model/column-configutation';
import { RationCardType } from '../../model/column-configutation';
import { Observable, from, of } from 'rxjs';

import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TableComponent, ElectionTableComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})

export class AboutUsComponent  {
   
  @Output() dataSource: Array<any> = [];
   ELEMENT_DATA: VotersList[] = [
    { name: 'Arjun', age: 32, phone: 8792424, isWhatsappUser: true, constituency: 'Thiruvanthapuram', isEligibleToVote: true, rationCardType: RationCardType.White}, 
    { name: 'Ravi', age: 37, phone: 9898764, isWhatsappUser: false, constituency: 'Kollam', isEligibleToVote: true, rationCardType: RationCardType.Blue},
    { name: 'Akhil', age: 35, phone: 9998764, isWhatsappUser: true, constituency: 'Kocchi', isEligibleToVote: true},
    { name: 'Nkhil', age: 16, phone: 9998713, isWhatsappUser: false, constituency: 'Kottayam', isEligibleToVote: false}
  ];
  @Output() arraySource: Array<any> = [];
   

   columnConfigurations: Array<ColumnConfiguration> = [ 
    { columnDef: 'name', title: 'Name of Citizen',  displayStyle: DisplayStyle.string,   cell:this.ELEMENT_DATA.map(function (user) {
      return user.name;     
  })}, 
     
     { columnDef: 'age', title: 'Age', sortable:true, displayStyle: DisplayStyle.number, cell:this.ELEMENT_DATA.map(function (user) {
      return user.age;  
  })}, 
  { columnDef: 'constituency', title: 'Constituency', hide:true, displayStyle: DisplayStyle.string, cell:this.ELEMENT_DATA.map(function (user) {
    return user.constituency;  
})},
{ columnDef: 'rationCardType', displayStyle: DisplayStyle.string,  title: 'Ration card type', cell:this.ELEMENT_DATA.map(function (user) {
  return user.rationCardType;  
})},
  { columnDef: 'isEligibleToVote', displayStyle: DisplayStyle.boolean,  title: 'Is Eligible To Vote', cell:this.ELEMENT_DATA.map(function (user) {
    return user.isEligibleToVote;  
})},
     { columnDef: 'phone', title: 'Phone', displayStyle: DisplayStyle.number,  cell:this.ELEMENT_DATA.map(function (user) {
      return user.phone;  
  })}
  ];
  @Input()
  newArr: VotersList[] = [];
  ngOnChanges() {
    // create header using child_id
    //console.log(this.dataSource);
  }
  constructor() {
    console.log(this.arraySource) ;           
  }
}
