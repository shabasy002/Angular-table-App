import { CommonModule } from '@angular/common';
import {Component, Input, OnInit, input,  OnChanges, OnDestroy,SimpleChange, SimpleChanges, DoCheck, AfterContentInit} from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { HightlightDirective } from '../../custom-directives/hightlight.directive';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { Output, EventEmitter } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ColumnConfiguration, RationCardType, SelectedSort } from '../../model/column-configutation';
import { SortOrder } from '../../model/column-configutation';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { VotersList } from '../../model/voters-list';
import { Observable, of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-temp-table',
  standalone: true,
  imports: [MatTableModule, SearchFieldComponent, HightlightDirective, ReactiveFormsModule ,MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule, FormsModule, MatCheckboxModule, MatIconModule, MatSortModule],
  templateUrl: './temp-table.component.html',
  styleUrl: './temp-table.component.scss'
})
export class TempTableComponent implements AfterContentInit ,DoCheck, OnInit, OnChanges {

  //public toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  @Input({ required: true })
  public columnConfigs: Array<ColumnConfiguration> = [];
  @Input({ required: true }) 
  public dataSource: Array<any> = [];
sortedData: Array<any> = [];

private selectedSortOrder?:SelectedSort;
public filterFields: Array<any> = [];
public filterNames:Array<any>=[];
public filter = new FormControl(this.filterFields);
//public nameFilter = new FormControl("");

public selected: string | undefined;
searchEvent: any;

 
constructor() {
  
  

}

ngDoCheck(): void {
  
 
  }
ngOnInit(): void {
 
  
}

ngOnChanges(changes: SimpleChanges): void {
  
  
}

ngAfterContentInit(): void {
 
}
protected getDatafrom(e:any){
  this.searchEvent=e;
 
}
protected inputChange(event:any){
  
  const tempColumnconfig = this.columnConfigs.slice();
  
  for(let i=0;i<=this.filterFields.length-1;i++){
    let fetching = this.columnConfigs.filter(x => x.columnDef === this.filterFields[i]);
    if (event.indexOf(this.filterFields[i]) == -1){
          fetching[0].hide=true;
        }else{
          fetching[0].hide=false;
    }
  }

}

protected getColumnsToDisplayForSelect(): ColumnConfiguration[] {

  const filtered = this.columnConfigs.filter(x => x.columnDef !== "");
  filtered.forEach((x,i)=>{
    this.filterFields.push(x.columnDef) ;    
  })
 
  return filtered;
}
   protected getColumnsToDisplay(optionalName?: any): ColumnConfiguration[] {
    if (typeof optionalName === "undefined") {
      const filtered = this.columnConfigs.filter(x => x.hide !== true);
      return filtered;
      
    }else{
      const rowSearch=this.dataSource.filter(x => x.name.match(optionalName));
     
      return rowSearch;
    }
    
  }

  protected getrowtoDisplay():any[]{
    let value=(this.searchEvent);
    if(value){
      var rowFiltered = this.dataSource.filter(x => (x.name.toLowerCase()).match(value.toLowerCase()) && x.hide !==true );
    }else{
      var rowFiltered = this.dataSource.filter(x => x.hide !== true);
      
    }
   
    
    return rowFiltered;
  }
  protected getDataForKeyFromRow(row: Object): any {
   
    return row as string;
  }
 
 
  protected isCurrentSortOrder(fieldName:string, sortOrder:SortOrder):boolean{
    return fieldName===this.selectedSortOrder?.columnDef && sortOrder===this.selectedSortOrder.order;
     
  }
  protected sortData($event: any, fieldName:string, sortOrder:SortOrder) {
    const data = this.dataSource.slice();
    
    this.selectedSortOrder={columnDef:fieldName, order:sortOrder};
    if(sortOrder === 'ASC'){
     
       this.sortedData=data.sort((a, b) => b[fieldName] > a[fieldName]? 1 : -1);
    }else{
      this.sortedData=data.sort((a, b) => a[fieldName] > b[fieldName]? 1 : -1);
    }
    
    
    this.dataSource.length=0;
    this.sortedData.forEach((x,i)=>{
      this.dataSource.push(x) ;    
    })
   
    
  }
  
}




