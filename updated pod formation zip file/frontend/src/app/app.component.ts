import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { faBell, faCalendar, faHeadset, faSearch, faNoteSticky, faStar } from '@fortawesome/free-solid-svg-icons';
// import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  faBell = faBell;
  faCalendar = faCalendar;
  faHeadset = faHeadset;
  faSearch = faSearch;
  faStar = faStar;
  faNoteSticky = faNoteSticky;

  isShow = false;
 
  toggleAllocation() {
    this.isShow = !this.isShow;
  }
  //AddPod
  podForm: FormGroup;
  // allocationForm: FormGroup;
  
  

  constructor(private formBuilder:FormBuilder)
  {
      this.podForm = this.formBuilder.group({
        podDetails: this.formBuilder.array([])
      });
      // if(token==false) {
      //   this.allocationForm = this.formBuilder.group({
      //     allocationDetails: this.formBuilder.array([])
      //   });
      // }
  }

  podDetails():FormArray {
    // idVal = this.podForm.get('id').value;
    return this.podForm.get("podDetails") as FormArray
  }

  newEntry():FormGroup {
    return this.formBuilder.group({
      id: '',
      role: '',
      name: '',
      department: '',
    })
  }

  addEntry() {
    this.podDetails().push(this.newEntry());    
  }

  removeEntry(i:number) {  
    this.podDetails().removeAt(i);  
  }  


  onSubmit() {
    console.log(this.podForm.value); 
  }
  
  // AddAllocation

  // allocationDetails():FormArray {
  //   // idVal = this.podForm.get('id').value;
  //   return this.allocationForm.get("allocationDetails") as FormArray
  // }

  // newAllocation():FormGroup {
  //   return this.formBuilder.group({
  
      
  //   })
  // }

  // addAllocation() 
  //   this.allocationDetails().push(this.newAllocation());    
  // }

  // removeAllocation(j:number) {  
  //   this.allocationDetails().removeAt(j);  
  // }  


  // allocationSubmit() {
  //   console.log(this.allocationForm.value); 
  // }
}
