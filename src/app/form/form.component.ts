import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formName = 'Contributor License Agreement Form';
    
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }

}
