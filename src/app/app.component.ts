import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';


listing: Array<any> = [];




constructor(private listService:ListService ){

 
}
ngOnInit(): void {

this.getAllItems();

  
  }
 
  
addItemsForm = new FormGroup({
  items: new FormControl(''),
});

getAllItems(){
  this.listService.getAll().subscribe(res=>{
    console.log(res);      
    this.listing=res;

  });
}
// getById(){
// if(this.listId){
//   this.listService.getById(this.listId).subscribe();

// }
// }

// onComplete() {  
     
//   }

// onEdit(id) {
  
//   this.listService.put(this.listId, this.addItemsForm.value).subscribe(res => {
//     console.log(res);
//     this.addItemsForm.setValue({
//       items:res.items,
    

//   });
  
// })

// }



onSubmit(){
this.listService.post(this.addItemsForm.value).subscribe(res=>{
  console.log(res);
  this.listing.push({
    "items":res.items,
    });
  
});

}

// onDelete(id){
//   this.listService.delete(id).subscribe(res=>{this.getAllItems()});
// }
}