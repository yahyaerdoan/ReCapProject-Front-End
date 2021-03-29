import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm : FormGroup;
  brands:Brand[] = [];

  constructor(private formBuilder:FormBuilder, private brandService: BrandService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandUpdateForm();
    this.getAllBrands();
  }
  getAllBrands()
  {
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data;
    });
  }
  createBrandUpdateForm()
  {
    this.brandUpdateForm = this.formBuilder.group({
      brandId : ["",Validators.required],
      brandName : ["",Validators.required],
      brandModel : ["",Validators.required],
    });
  }
  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.update(brandModel).subscribe((response) => {
        this.toastrService.success(response.message, "Başarılı");
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i <responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası")
          }       
        } 
      })      
    }
    else{
      this.toastrService.error("Formunuz  Eksik", "Dikkat")   
    }
  }
}

