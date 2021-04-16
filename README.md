# # Araç Kiralama Uygulaması (Front-End) & (Back-End) # #


# Projemin ismi (ReCapProject) Araç Kiralama Projesi

Bu proje [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3. oluşturuldu.

## Development server için 

Açılış için `ng serve --open` komutu kullanıldı. Yerel ağ `http://localhost:4200/` yönlendirildi. Kaynak dosyalardan herhangi birini değiştirirseniz uygulama otomatik olarak yeniden yüklenir.

## Code scaffolding yapısısı için

Bileşen oluşturmak için `ng generate component component-name` komutu kullanıldı ve yeni bileşen oluşturuldu. Ayrıca şu yapılar kullanıldı: `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Projeyi çalıştırmak için `ng build` komutu çalıştırılır. Build yapıları `dist/` dizininde saklanır. Bir üretim derlemesi için `--prod` bayrağı kullanılır.

## Running unit tests (Birim testlerini çalıştırma)

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Birim testlerini şu yolla yürütmek için `ng e2e` çalıştırın. [Protractor](http://www.protractortest.org/).

## Further help (Daha fazla yardım)

Angular CLI hakkında daha fazla yardım almak için `ng help` ı kullanın veya [Angular CLI Overview and Command Reference](https://angular.io/cli) sayfasına bakın. 

## Araç Kiralama Uygulaması(Front-End) :

* Özellikler :

• Müşterilerimiz kayıt olabilir ve oturum açabilirler.
• Müşteriye özel alanları giriş yapmayan bir kullanıcı görüntüleyemez.
• Müşterilerimiz, araç listesini ve detaylarını görüntüleyebilirler.
• Kategori, Araç ismi, Marka ve Renk seçeneklerine göre filitreleme ve arama yapabilirler.
• Müşteri ve araç, findex puan sorgulaması yapılmakta olup findex puanına göre kiralama yapılabilir.
• Findex puanı yeterli olan müşterimiz müsait araçları kiralayabilir.
• Sisteme yönetici rolü ile giriş yapabilen yönetici, kategorileri, araçları, renkleri, markaları ve araç resimlerini yönetebilir.
• Kiralanan araca yönelik müşterimizin findex puanı yeterli ise kredi kartı ile ödeme hizmeti sunulur.
• Yetersiz puanlama durumuında yeterli araçların yeniden görüntülenmesi için müşterimiz araç listesine yönlendirilir.
• Müşterimize kredi kartlarını kayıt edip etmeyeceği sorusu yöneltilmiş olup, kartını kaydetmesi durumunda, daha sonraki ödemseinde kartına kolayca ulaşabilir.
• Müşterimiz kiralamış olduğu aracını teslim edebilir.
• Müşterimiz kirlama geçmişine ulaşabilir.
• Yönetici araç kira durum listesini ve araç kiralama geçmiş listesi görüntüleyebilir.

## Kullanılan Teknolojiler (Back-End) :

• Asp.Net Core 3.1
• Katmanlı Mimari (NTier)
• Design Patterns
• Autofac (IoC)
• FluentValidation
• Log4Net
• JWT Bearer
• Entity Framework
• Json WebApi
• AOP Teknikleri (Caching, Validation, Performance, Transaction)
• Swagger Web Api UI

## Kullanılan Teknolojiler (Front-End) :

* Paketler:

• Angular 11.2.5
• Angular CLI 11.2.4
• Bootstrap 5.0.0-beta2
• JQuery 3.6.0
• Toastr 2.1.4
• @auth0/angular-jwt (Decode Token) 5.0.2
• bootswatch 4.6.0
• font-awesome 4.7.0

* Teknikler:

• Custom Form Control
• Custom Pipe
• Custom Directive
• QueryParams
• Guards
• LocalStorage Service

## Görseller
Ana Sayfa
image

Araç Detayları ve Kiralama
image

Kiralama Bilgi Girişi
image

Findex puan kontrolü
image

Sepet Kontrolü
image

Tahsilat Modülü
image

Kiralama Geçmişi ve Araç Teslim Modülü
image

Marka Yönetim Sayfası (Admin)
image

Renk Yönetim Sayfası (Admin)
image

Araç Yönetim Sayfası (Admin)
image

Araç Resimleri Yönetim Sayfası (Admin)
image

Kullanıcı Profil Bölümü (Kullanıcı, Admin)
