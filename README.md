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

# Özellikler :

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

# Paketler :

• Angular 11.2.5
• Angular CLI 11.2.4
• Bootstrap 5.0.0-beta2
• JQuery 3.6.0
• Toastr 2.1.4
• @auth0/angular-jwt (Decode Token) 5.0.2
• bootswatch 4.6.0
• font-awesome 4.7.0

# Teknikler :

• Custom Form Control
• Custom Pipe
• Custom Directive
• QueryParams
• Guards
• LocalStorage Service

## Görseller

Ana Sayfa
![image](https://user-images.githubusercontent.com/77584301/115083908-cba7d880-9f10-11eb-839e-c56adaf2ab9a.png)

Home Sayfa
![image](https://user-images.githubusercontent.com/77584301/115084004-ec702e00-9f10-11eb-94cc-51c0ce521745.png)

Kategoriye ait araçlar listesi
![image](https://user-images.githubusercontent.com/77584301/115084166-217c8080-9f11-11eb-8a78-0b8a208504c5.png)

Araç Detayları ve Kiralama
![image](https://user-images.githubusercontent.com/77584301/115084239-4113a900-9f11-11eb-9e80-db31a8fbc5c9.png)

Araçlar listesi
![image](https://user-images.githubusercontent.com/77584301/115084323-66081c00-9f11-11eb-8a91-2e3cc96f95f4.png)

Araç rengine göre liste
![image](https://user-images.githubusercontent.com/77584301/115084397-87690800-9f11-11eb-8c86-f03e2f50a11a.png)

Markaya göre liste
![image](https://user-images.githubusercontent.com/77584301/115084470-a4054000-9f11-11eb-8def-d4518a1c04f2.png)

Araç detay sayfası
![image](https://user-images.githubusercontent.com/77584301/115084765-fe9e9c00-9f11-11eb-83f7-1de7cff2208d.png)
 
 Araç detay sayfasında Özellikler koşullar ve avantajlar
 ![image](https://user-images.githubusercontent.com/77584301/115084948-47565500-9f12-11eb-85fa-9ca3fcc7f36a.png)
 
 Footer
 ![image](https://user-images.githubusercontent.com/77584301/115085072-7f5d9800-9f12-11eb-91c9-62b224747d04.png)
 
 Giriş ekranı
 ![image](https://user-images.githubusercontent.com/77584301/115085133-a1571a80-9f12-11eb-8ca5-4506294c92ba.png)
 
 Üyelik ekranı
 ![image](https://user-images.githubusercontent.com/77584301/115085172-b2079080-9f12-11eb-8832-83049ff0f6c4.png)

 Açılır kutu müşteri profili ve findex puanı
 ![image](https://user-images.githubusercontent.com/77584301/115085287-eed38780-9f12-11eb-919e-6e15167e02f7.png)
 
 Kiralama takvimi
 ![image](https://user-images.githubusercontent.com/77584301/115085319-027eee00-9f13-11eb-932a-d888a7a69133.png)
 
 Kirlama takviminde müşteri adı soyadı ve toplam ücret bilgisi
 ![image](https://user-images.githubusercontent.com/77584301/115085401-293d2480-9f13-11eb-836a-abf989c54e65.png)
 
 Kiralanan araç ve detay bilgisinin olduğu sepet
 ![image](https://user-images.githubusercontent.com/77584301/115085470-42de6c00-9f13-11eb-9679-f9096484ad7f.png)
 
 İşlem ücretini ödeme sayfası 
 ![image](https://user-images.githubusercontent.com/77584301/115085524-5be71d00-9f13-11eb-9eb4-7ebd4d05100b.png)
 
 müşteri mkartını seçtiğinde kart bilgileri otomatik yükleniyor
 ![image](https://user-images.githubusercontent.com/77584301/115085618-7c16dc00-9f13-11eb-9def-2ddddb862541.png)
 
 Kiralama ve ödeme başarılı 
 ![image](https://user-images.githubusercontent.com/77584301/115085690-9d77c800-9f13-11eb-89fe-dc4ca55fb537.png)
 
 Araç yeniden kiralanmak istediğinde müsait olmadığı belirtiliyor 
 ![image](https://user-images.githubusercontent.com/77584301/115085757-bbddc380-9f13-11eb-9311-0dd8def4d44e.png)

 Ana sayfadan kiralanmış araç tekrar sepete eklenmek istendiğinde uyarı veriliyor
 ![image](https://user-images.githubusercontent.com/77584301/115085858-eb8ccb80-9f13-11eb-8206-b8c2f6fcf4aa.png)
 
 Sepete birden fazla araç eklenebiliniyor
 ![image](https://user-images.githubusercontent.com/77584301/115085958-0f501180-9f14-11eb-9ce0-0f1b6e42b6a4.png)
 
 Aracı sepetten silebiliyoruz
 ![image](https://user-images.githubusercontent.com/77584301/115086086-47efeb00-9f14-11eb-9ced-9f0c6f74a0d0.png)
 
 Kiralama geçmişi ve kiradaki araç listesi görüntülenebiliyor
 ![image](https://user-images.githubusercontent.com/77584301/115086187-72da3f00-9f14-11eb-9a18-26a573b15892.png)

 Araç teslim ediliyor
 ![image](https://user-images.githubusercontent.com/77584301/115086224-85547880-9f14-11eb-92c4-c60f1c92101d.png)
 
 Kiralan araç teslim edildi geçmiş listesine aktarıldı
 ![image](https://user-images.githubusercontent.com/77584301/115086310-ad43dc00-9f14-11eb-831d-6d8368a53325.png)
 
 Güncelleme se silme için listeler oluşturuldu
 ![image](https://user-images.githubusercontent.com/77584301/115086387-d06e8b80-9f14-11eb-8ace-78e3426d1e78.png)
 
 Örnek marka listesi
 ![image](https://user-images.githubusercontent.com/77584301/115086446-ef6d1d80-9f14-11eb-849e-cc1bef78aff6.png)
 
 Güncellenmek istenen marka seçiliyor
 ![image](https://user-images.githubusercontent.com/77584301/115086492-090e6500-9f15-11eb-9eba-fbdb6eb10c74.png)
 
 Form eksikliğinde uyarı hatası alıyoruz
 ![image](https://user-images.githubusercontent.com/77584301/115086544-25120680-9f15-11eb-82c6-d8dd9e0c9f86.png)
 
 Ekleme işlemleri için ayrı liste oluşturuldu
 ![image](https://user-images.githubusercontent.com/77584301/115086605-407d1180-9f15-11eb-8773-4c7c383ff9bd.png)
 
 Örnek araç ekleme formu
 ![image](https://user-images.githubusercontent.com/77584301/115086662-60143a00-9f15-11eb-83c2-0d1cdf0138e0.png)
 
 Renk marka ve kategori seçimi yapılıyor araç grubuna göre ekleniyor
 ![image](https://user-images.githubusercontent.com/77584301/115086731-8043f900-9f15-11eb-8204-eb55a83a6610.png)
 
 Resim eklemenin kolaylaığı sağlandı 
 ![image](https://user-images.githubusercontent.com/77584301/115086797-a1a4e500-9f15-11eb-9f0a-4a4cf365be83.png)
 
 Resim seçildi
 ![image](https://user-images.githubusercontent.com/77584301/115087022-1710b580-9f16-11eb-8555-1b50937a88b0.png)
 
 Resim eklendi
 ![image](https://user-images.githubusercontent.com/77584301/115087066-298aef00-9f16-11eb-8032-fc80e0352621.png)
 
 Resim silindi
 ![image](https://user-images.githubusercontent.com/77584301/115087097-3ad3fb80-9f16-11eb-80d2-d7c8cab8529a.png)
 
 Findex puan kontorlü yapıldı tercih edilen araç kiralama takvimine yönlendirilemedi
 ![image](https://user-images.githubusercontent.com/77584301/115087267-838bb480-9f16-11eb-8813-0c25182538aa.png)
 
 Custom directive uygulandı
 ![image](https://user-images.githubusercontent.com/77584301/115087497-ed0bc300-9f16-11eb-962c-091796655a4f.png)

