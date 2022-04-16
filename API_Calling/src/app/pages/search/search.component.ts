import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DemoService } from 'src/app/shared/services/demo.service';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  userForm = new FormGroup({
    'name': new FormControl({value: '', disabled: false})  
  });

  constructor(private service: DemoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    
    //console.log(this.userForm.value.name); 
    console.warn(this.service.getUsers(this.userForm.value.name));
  }

}
