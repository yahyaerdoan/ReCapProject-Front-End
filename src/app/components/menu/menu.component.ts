import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
    private router: Router) {
}

ngOnInit(): void {
}

isAuth() {
return this.authService.isAuthenticated();
}

logout() {
this.localStorageService.removeToken();
this.localStorageService.removeCurrentCustomer();
this.toastrService.success('Çıkış yapıldı', 'Başarılı');

return this.router.navigate(['/auth/login']);
}

getCurrentCustomer(): Customer {
return this.localStorageService.getCurrentCustomer()
}

}
