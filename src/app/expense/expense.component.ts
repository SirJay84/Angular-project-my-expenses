import { Component, OnInit } from '@angular/core';
import { Expense } from './expense-model';
import { FormsModule,FormControl,FormGroup } from '@angular/forms';
import { ExpenseservicesService } from '../servicesFolder/expenseservices.service';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expense_string : any  = "hi there";

  

  checker:boolean = true;

  
  sayMessage() {
    this.expense_string = "By there"
  }
  
  constructor(private injectedexpensesservices:ExpenseservicesService) { 
    this.showExpenses()
  }

  myexpenses : Expense[] = [] 
  showExpenses() {
    this.injectedexpensesservices.getExpenses()
      .subscribe((data:any) => {
        console.log("data is ",data);
        this.myexpenses= data;
        console.log("expenses is ", data);
      });
  }

  itemsformgroup = new FormGroup({
    user_id:new FormControl(""),
    name : new FormControl(""), 
    category:new FormControl(""), 
    amount:new FormControl(""),
    date:new FormControl(""), 
  })
  
  items :any= {}
  emitItems(){
    this.items = this.itemsformgroup.value
    this.injectedexpensesservices.postExpenses(this.items)
    .subscribe((data: any)=>{
      this.myexpenses.push(data)
    })
  
    
  }
  ngOnInit(): void {
    
  }

}
