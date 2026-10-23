const http = require("http");
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");

const sunucu = http.createServer((istek, yanit) => {
  console.log(`${istek.method} ${istek.url}`);

  if (istek.method !== "GET") {
    yanit.writeHead(405, { "Content-Type": "text/plain; charset=utf-8", "Allow": "GET" });
    return yanit.end("Yalnızca GET isteklerine izin verilmektedir.");
  }

  if (istek.url === "/") {
    yanit.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    yanit.end("<h1>Ana Sayfa - Cakisma Basariyla Cozuldu</h1><p><a href='/hakkimda'>Hakkimda Sayfasina Git</a></p><p><a href='/resim'>Proje Gorseline Git</a></p>");
  } 
  else if (istek.url === "/hakkimda") {
    yanit.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    yanit.end("<h1>Hakkimda Sayfasi</h1><p>Merhaba, ben Adem Tuğra İslamoğlu. Bu sayfa hakkimda dalinda gelistirildi.</p>");
  } 
  else if (istek.url === "/resim") {
    // Proje klasöründe 'logo.png' adında bir resim olduğunu varsayıyoruz
    const resimYolu = path.join(__dirname, "logo.png");
    
    fs.readFile(resimYolu, (hata, veri) => {
      if (hata) {
        yanit.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        return yanit.end("Resim dosyasi bulunamadi! Lutfen klasöre logo.png ekleyin.");
      }
      yanit.writeHead(200, { "Content-Type": "image/png" });
      yanit.end(veri);
    });
  }
  else if (istek.url === "/api/ders") {
    yanit.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    const dersVerisi = { kod: "BMH231", ad: "Web Programlama", gun: "Cuma" };
    yanit.end(JSON.stringify(dersVerisi));
  } 
  else if (istek.url === "/api/agep") {
    const teslimTarihi = dayjs("2026-11-01");
    const bugun = dayjs();
    const kalanGun = teslimTarihi.diff(bugun, "day");
    
    yanit.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    const agepVerisi = { sonTeslim: "01.11.2026", kalanGun: kalanGun };
    yanit.end(JSON.stringify(agepVerisi));
  } 
  else {
    yanit.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    yanit.end("Sayfa bulunamadı");
  }
});

sunucu.listen(3000, () => {
  console.log("Dinleniyor: http://localhost:3000");
});