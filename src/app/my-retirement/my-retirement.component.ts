import { Component, OnInit } from '@angular/core';
import { AccountNumberService } from '../services/account-number.service';

@Component({
  selector: 'app-my-retirement',
  templateUrl: './my-retirement.component.html',
  styleUrls: ['./my-retirement.component.scss']
})
export class MyRetirementComponent implements OnInit {

  displayDialog = false;
  currencies: any[] = [];
  selectedCurrency: any;

  accountNumbers: any[] = [];
  selectedAccountNumber: any;

  constructor(private accountNumberService: AccountNumberService) {
    this.currencies = [
      { name: 'USD', value: 'USD'},
      { name: 'CNY', value: 'CNY'},
      { name: 'INR', value: 'INR'},
    ];
  }

  ngOnInit(): void {
    this.accountNumbers = this.accountNumberService.getAccountNumbers();
    this.selectedAccountNumber = this.accountNumberService.getSelectedAccountNumber() ? this.accountNumberService.getSelectedAccountNumber() : null;
  }

  changeAccountNumber() {
    this.displayDialog = true;
  }

  confirmDialog() {
    this.accountNumberService.setSelectedAccountNumber(this.selectedAccountNumber);
    this.displayDialog = false;
  }

}
