import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountNumberService {

  selectedAccountNumber: any;

  constructor(private httpClient: HttpClient) { }

  getAccountNumbers() {
    // return this.httpClient.get('/v1/account-numbers/id');
    return [
      { name: '123456789123', value: '123456789123'},
      { name: '234123456789', value: '234123456789'},
      { name: '345123456789', value: '345123456789'},
    ];
  }

  setSelectedAccountNumber(accountNumber: any) {
    this.selectedAccountNumber = accountNumber;
  }

  getSelectedAccountNumber() {
    return this.selectedAccountNumber;
  }
}
