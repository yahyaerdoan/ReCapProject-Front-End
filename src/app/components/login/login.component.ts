import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { LoginModel } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
   customer: Customer;
   currentCustomerEmail: string = '';

   constructor(
     private formBuilder: FormBuilder,
     private toastrService: ToastrService,
     private authService: AuthService,
     private router: Router,
     private localStorageService: LocalStorageService,
     private customerService: CustomerService) {
   }

   ngOnInit(): void {
      this.setCurrentCustomerEmail();
      this.createLoginForm();
   }

   createLoginForm() {
      this.loginForm = this.formBuilder.group({
         email: [this.currentCustomerEmail, [Validators.required, Validators.email]],
         password: ['', Validators.required]
      });
   }

   login() {
      if (this.loginForm.invalid) {
         this.toastrService.warning('Alanları gerektiği gibi doldurunuz', 'Dikkat');
         return;
      }

      let loginModel: LoginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe(responseSuccess => {
         this.toastrService.success(responseSuccess.message, 'Başarılı');
         this.localStorageService.setToken(responseSuccess.data);
         this.getCustomerByEmail(loginModel.email);

         return this.router.navigate(['/cars']);
      }, responseError => {

         return this.toastrService.error(
            responseError.error, 'Hata'
         );
      });
   }

   getCustomerByEmail(email: string) {
      this.customerService.getCustomersByEmail(email).subscribe(responseSuccess => {
         this.customer = responseSuccess.data;
         this.localStorageService.setCurrentCustomer(this.customer);
      });
   }
   setCurrentCustomerEmail() {
      return this.localStorageService.getCurrentCustomer()
         ? this.currentCustomerEmail = this.localStorageService.getCurrentCustomer().email
         : null;
   }
   getYear() {
    return new Date().getFullYear();
 }
 getMounth(){
  return new Date().getMonth();
}
  
  
  
  // loginForm : FormGroup
  // constructor( private formBuilder : FormBuilder,
  //   private authService : AuthService,
  //   private toastrService : ToastrService) { }

  // ngOnInit(): void {
  //   this.createLoginForm();
  // }
  // createLoginForm(){
  //   this.loginForm = this.formBuilder.group({
  //     email : ["", Validators.required],
  //     password : ["", Validators.required],
  //   })
  // }
  // login(){
  //   if(this.loginForm.valid){
  //     console.log(this.loginForm.value);
  //     let loginModel = Object.assign({}, this.loginForm.value) //Boş bir obje oluşturup onun içine login formu map etmiş olduk.
  //     this.authService.login(loginModel).subscribe(response => {
  //       this.toastrService.info(response.message)
  //       localStorage.setItem("token", response.data.token)
  //       console.log(response)
  //     },responseError =>{
  //       this.toastrService.error(responseError.error, "Dikkat!")
  //     })
  //   }
  // }
}
