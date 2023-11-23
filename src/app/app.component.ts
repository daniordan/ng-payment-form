import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  date = '';
  amount = 0;
  // height = 0;
  // miles = 0;

  // car = {
  //   make: 'Toyota',
  //   model: 'Camry',
  //   year: 2000,
  // };

  onNameChange(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  onDateChange(event: Event) {
    this.date = (<HTMLInputElement>event.target).value;
  }

  onAmountChange(event: Event) {
    this.amount = parseFloat((<HTMLInputElement>event.target).value);
  }

  // onHeightChange(event: Event) {
  //   this.height = parseFloat((<HTMLInputElement>event.target).value);
  // }

  // onMilesChange(event: Event) {
  //   this.miles = parseFloat((<HTMLInputElement>event.target).value);
  // }
}
