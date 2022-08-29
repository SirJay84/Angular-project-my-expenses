import { Component, OnInit } from '@angular/core';
import { Expense } from './expense-model';
import { FormsModule,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expense_string : any  = "hi there";

  exp1: Expense = {
    id:1,
    name: "Omo",
    amount: 50,
    category: "product",
    date: "string"
  };

  exp2: Expense = {
    id:2,
    name:"Bread",
    amount:500,
    category:"product",
    date:"string"
  }

  expenses:any = [];

  checker:boolean = true;

  
  sayMessage() {
    this.expense_string = "By there"
  }
  
  constructor() { 
    this.expenses.push(this.exp1);
    this.expenses.push(this.exp2);
  }

  itemsformgroup = new FormGroup({
    name : new FormControl(""), 
    category:new FormControl(""), 
    amount:new FormControl(""),
    date:new FormControl(""), 
  })
  
  emitItems(){
    this.expenses.push(this.itemsformgroup.value);
  
  }
  ngOnInit(): void {
  }

}
