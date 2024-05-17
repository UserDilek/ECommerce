import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule,AbstractControl  } from '@angular/forms';
import { NgClass ,NgIf} from '@angular/common';
import { User } from '../../../Contracts/User';
import { UserService } from '../../../services/comon/model/user.service';
import { HttpClientService } from '../../../services/common/http-client.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,NgIf],
  providers:[UserService,HttpClientService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
constructor(private formBuilder:FormBuilder,private userService:UserService) {}

frm:FormGroup;
ngOnInit(){
  this.frm = this.formBuilder.group({
    FullName:["",[Validators.required,Validators.minLength(5)]],
    UserName:["",[Validators.required]],
    Email:["",[Validators.required, Validators.email]],
    Password:["",[Validators.required]],
    PasswordConfirm:["",[Validators.required]]
});
}

get component(){
  return this.frm.controls;
}

 async onSubmit(data:User){
  console.log(data);
   const result = await this.userService.Create(data);
   console.log(result);
}

}

