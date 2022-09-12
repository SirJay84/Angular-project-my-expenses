import { Injectable } from '@angular/core';
import { Expense } from '../expense/expense-model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseservicesService {

  constructor(private http: HttpClient) {
    
  }

  // exp1: Expense = {
  //   id:1,
  //   name: "Omo",
  //   amount: 50,
  //   category: "product",
  //   date: "string"
  // };

  // exp2: Expense = {
  //   id:2,
  //   name:"Bread",
  //   amount:500,
  //   category:"product",
  //   date:"string"
  // }

  expenses:Expense[] = [];
  baseUrl : string = "http://127.0.0.1:8000";

  getExpenses() {
    //HTTP Request to expenses
    //HTTPClient.get() returns an Observable of type
    return this.http.get(this.baseUrl + "/expenses");
    
  }

  postExpenses(items:Expense) {
    return this.http.post(this.baseUrl + '/expenses',items)
  }

  
  
  // addExpense(items: any) {

  //   // this.expenses.push(items);
  //   // console.log(this.expenses);
  // }
}
