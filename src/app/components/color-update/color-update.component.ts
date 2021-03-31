import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  dataLoaded = false;
  colors : Color[] = [];
  colorId : number;

  colorAddForm:FormGroup;
  selectedColor:Color;
  colorUpdateForm:FormGroup;

  constructor(
    private colorsService:ColorService,
    private router:Router,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getColors();
    
  }

  getColors() {
    this.colorsService.getColors().subscribe(response=>{
      this.colors = response.data;
      this.dataLoaded = response.success;
    })
  }

  

 

  setSelectedColor(color:Color){
    this.selectedColor = color;
    this.updateCreateForm();
  }

  updateCreateForm(){
    this.colorUpdateForm=this.formBuilder.group({
      colorId:[this.selectedColor.colorId, Validators.required],
      colorName:["",Validators.required]
    })
  }

  updateColor(){
    if(this.colorUpdateForm.valid){
      let colorModel=Object.assign({},this.colorUpdateForm.value);
      this.colorsService.update(colorModel).subscribe(
        (response) => {
          this.toastrService.success(response.message,"Başarılı");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        (responseError) => {
          console.log(responseError);
          if(responseError.error.ValidationErrors.length>0){
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
              this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası");
            }
          }
        }
      );
    }
    else{
      this.toastrService.warning("Renk ismi boş olamaz","Güncelleme Başarısız");
    }
  }


  getSelectedColorId(colorId : number) {
    if(this.colorId == colorId)
    {  
      return true;
    }
    else
    {
      return false;
    }
  }
}
