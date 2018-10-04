import { Component } from '@angular/core';


export interface ChitDataType{
  chitName:string,
  startDate: Date,
  endDate: Date
}

const CHIT_INFO : ChitDataType[] = [
  {chitName:'chit-1', startDate:new Date(), endDate: new Date()},
  {chitName:'chit-2', startDate:new Date(), endDate: new Date()}
] 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chit-nag';
  displayedColumns: string[] = ['chitName','startDate','endDate'];
  chitsDataSource = CHIT_INFO;
}
