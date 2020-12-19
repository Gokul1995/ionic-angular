import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = 'Default Text';
  expense = {};
  expenseList = [];
  constructor() {}

  onChangeText() {
      this.text = 'Text has been changed';
  }
  addExpense(data) {
    console.log('value : ', data);
    this.expenseList.push(data);
  }
}
