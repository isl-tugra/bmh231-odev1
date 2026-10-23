\# BMH231 - Ödev 1: Web'in Temelleri ve Geliştirme Ekosistemi



\*\*Öğrenci Bilgileri:\*\*

\* \*\*Ad Soyad:\*\* Adem Tuğra İslamoğlu

\* \*\*Öğrenci No:\*\* 16008125074

\* \*\*Ders:\*\* BMH231 - Web'in Temelleri ve Geliştirme Ekosistemi



\---



\## 1. Projenin Amacı

Bu proje, Node.js yerleşik `http` modülü ve `dayjs` tarih kütüphanesi kullanılarak, herhangi bir harici çatı (Express vb.) olmaksızın temel bir HTTP sunucusu geliştirmek amacıyla oluşturulmuştur. Geliştirme sürecinde Git sürüm kontrol sistemi aktif olarak kullanılmış; farklı dallar (`hakkimda`, `baslik`), dallar arası birleştirmeler (`merge`) ve bilinçli olarak oluşturulan bir çakışmanın (`merge conflict`) manuel çözümü başarıyla gerçekleştirilmiştir.



\---



\## 2. Kurulum ve Çalıştırma Adımları



Projeyi kendi bilgisayarınızda veya farklı bir dizinde sorunsuz bir şekilde çalıştırmak için sırasıyla şu adımları izleyebilirsiniz:



1\. \*\*Projeyi Klonlayın:\*\*

&#x20;  ```bash

&#x20;  git clone <repo-url>

&#x20;  cd bmh231-odev1

Bağımlılıkları Yükleyin:



Bash

npm install

Sunucuyu Başlatın:



Bash

npm start

(Sunucu başarılı bir şekilde başladığında terminalde Dinleniyor: http://localhost:3000 mesajı görüntülenecektir).



3\. Sunucunun Desteklediği Yollar (Routes) ve Test Komutları

Sunucu üzerinden desteklenen rotaları test etmek için yeni bir terminal penceresinde aşağıdaki curl komutlarını kullanabilirsiniz:



Ana Sayfa (/):



Açıklama: Projenin ana karşılama sayfasıdır.



Komut: curl.exe -i http://localhost:3000/



Hakkımda Sayfası (/hakkimda):



Açıklama: Öğrenci bilgilerini içeren HTML tabanlı sayfadır (hakkimda dalında geliştirilmiştir).



Komut: curl.exe -i http://localhost:3000/hakkimda



Proje Görseli (/resim):



Açıklama: Klasördeki logo.png dosyasını tarayıcıya/istemciye image/png formatında sunar.



Komut: curl.exe -i http://localhost:3000/resim



Ders Bilgisi API (/api/ders):



Açıklama: Ders detaylarını JSON formatında döner.



Komut: curl.exe -i http://localhost:3000/api/ders



AGEP Kalan Gün API (/api/agep):



Açıklama: dayjs kütüphanesini kullanarak hedef tarihe kalan gün sayısını dinamik olarak hesaplar.



Komut: curl.exe -i http://localhost:3000/api/agep



404 Hata Yönetimi (Bulunamayan Sayfa):



Açıklama: Tanımlı olmayan rotalar için 404 Not Found hatası döndürür.



Komut: curl.exe -i http://localhost:3000/gecersiz-rota



405 Method Not Allowed (Desteklenmeyen Metot):



Açıklama: Sadece GET isteklerine izin verildiği için, POST gibi farklı metotları 405 koduyla engeller.



Komut: curl.exe -i -X POST http://localhost:3000/api/ders



4\. Farklı Klasörde Klonlama ve Test Sonucu Raporu

Hocanın yönergesi doğrultusunda proje, bilgisayardaki tamamen farklı bir dizine git clone ile klonlanmış, ardından sırasıyla npm install ve npm start komutları çalıştırılarak test edilmiştir.



Test Sonucu: node\_modules klasörü package.json bağımlılıklarına (dayjs) dayanarak eksiksiz bir şekilde oluşturulmuş, sunucu port 3000 üzerinde hatasız ayağa kalkmış ve yukarıda belirtilen tüm uç noktalardan tam ve doğru yanıtlar alınmıştır. Proje başka bir ortamda tamamen sorunsuz çalışmaktadır.

