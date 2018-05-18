import { Component } from "@angular/core";
import { Model, TodoItem } from "./model";
@Component({
    selector: "todo-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    model = new Model();

		getName() {
        return this.model.user;
    }

    getTodoItems() {
    		return this.model.items;
        
    }

    selectAll() {
    	this.model.items.forEach(item => item.done = !item.done);
    	console.log(this.model.items);
    	
    }

    getSelectItems() {
    	return this.model.items.filter(item => !item.done);
    }

    addItem(newItem) {
        if (newItem != "") {
            this.model.items.push(new TodoItem(newItem, false));
        }
      }

    deleteItem() {
    	// return this.model.items.filter(item => !item.done);
    	this.model.items = this.getSelectItems();
    	console.log(this.getSelectItems());
    }    
}
