/* Seahorse Manager — Service Worker  [BUILD-TAG: v3.15.42 — Kỳ lương: WIZARD 6 bước lần lượt (Kéo BCC → Kéo thẻ → Tính → Validate → Đối chiếu → Chuyển KT) thay thanh nút liệt kê; tùy chọn Khoản PS/Sức khỏe/PC dự án hàng riêng. Gốc v3.15.41 — Máy kiểm: nút 📤 Xuất biên bản lệch (đúng khung mẫu duyệt, số BB tự tăng) + lọc dòng trang trí khỏi khớp tay. Gốc v3.15.40 — Nút 🧮 Áp phát sinh chuyển vào trong modal ➕ Khoản PS (một cửa: nhập → duyệt → áp đúng kỳ). Duyệt mẫu Biên bản lệch (nút xuất làm sau). Gốc v3.15.39 — Máy kiểm siết nguyên tắc SO SÁNH THUẦN: mỗi chỉ tiêu ↔ đúng 1 cột, bỏ hẳn cộng dồn, gắn ≥2 cột = lỗi mapping; banner nguyên tắc trên màn. Gốc v3.15.38 — Máy kiểm FIX ca Lê Trí Thành 422tr: GROSS cộng nhầm 4 cột (keyword quá rộng + multi-sum áp cho tiền). Nay chỉ Ngày công được cộng dồn; field tiền trúng ≥2 cột = bắt chọn tay; keyword khớp cụm (gross)/(net). Gốc v3.15.37 — Máy kiểm: màn kết quả in rõ nguồn đã so (sheet + cột→chỉ tiêu) để tự soi chọn nhầm sheet/cột. Gốc v3.15.36 — Máy kiểm: bước chọn SHEET cho file HR nhiều nhóm (mỗi nhóm 1 sheet) — hết đối chiếu chéo nhóm. Gốc v3.15.35 — Máy kiểm nhận file HR KHÔNG có MSNV: khớp Họ tên luật chặt + khớp tay lưu alias dùng lại T1-T6; nhiều cột công cộng dồn; bỏ dòng #REF!. Đã test trên file thật SME_T01_2026. Gốc v3.15.34 — Biến động NS: 2 đường nghỉ việc tự ghi resignDate; card Vào-Ra fallback lastWorkDay/hrHistory cho hồ sơ cũ thiếu ngày. Gốc v3.15.33 — Audit dọn thừa/trùng: hợp nhất pipeline A-D chuyên gia + nhập lô payExtras về 1 đường, ẩn Ghi sổ khi kỳ có cụm AP, đánh dấu deprecated luồng ký cũ, nhãn quỹ nhất quán. Gốc v3.15.32 — Đường đi mới sau đối chiếu khớp: Chuyển kế toán tạo cụm AP tách vào luồng ký AP, kỳ tự advance; 👁 AP→kỳ lương; bảng chuyển khoản theo mẫu NH + PDF. Gốc v3.15.31 — Cổng máy kiểm áp TẤT CẢ nhóm lương. Gốc v3.15.30 — GĐ-V3 cổng trình ký máy kiểm: kỳ office chỉ Trình duyệt khi đối chiếu Excel HR PASS còn hiệu lực; health N11. Gốc v3.15.29 — MÁY KIỂM BẢNG LƯƠNG GĐ-V1+V2: import Excel HR, đối chiếu từng NV × từng cột với số app (BCC+thẻ+engine), chỉ cảnh báo không sửa, lưu hồ sơ verdict. Gốc v3.15.28 — Quyết toán TNCN: nguồn tập hợp MỌI kỳ VND đã khóa (thêm STER GROSS/khoán/expat) tại 5 điểm chuỗi quyết toán. Gốc v3.15.27 — Hồ sơ thuế năm chuyển ra card Thuế TNCN kỳ (trọn cụm thuế). Gốc v3.15.26 — Chuyển 🧾 Quyết toán TNCN + 🛡 BHXH biến động từ modal Khoản thu/chi ra card Thuế TNCN/BHXH tại Dashboard NS. Gốc v3.15.25 — Card Thuế TNCN/BHXH kỳ (Dashboard NS): loại kỳ đã xóa, lọc VND theo tiền tệ kỳ (gộp cả GROSS/khoán/expat VND). Gốc v3.15.24 — Dashboard NS: hết card trùng (render idempotent), Vào-Ra đếm theo ngày vào làm/nghỉ thực, Quỹ lương lấy kỳ đã duyệt trở lên mọi nhóm VND. Gốc v3.15.23 — Sổ lương: gập lịch sử điều chỉnh mặc định (nút ▸ từng dòng + mở hết/gập hết). Gốc v3.15.22 — Sổ lương: sắp xếp Chức danh → Mã NV, NV nghỉ xuống cuối. Gốc v3.15.21 — Sổ chi phí lương năm FIX theo check Sếp: canon phòng ban hết trùng tên; tàu từng tàu (ưu tiên BCC tháng); ngoại tệ quy đổi VND theo tỷ giá tại kỳ (fxTemp), BP riêng Chuyên gia O&M / Chuyên gia VP. Gốc v3.15.20 — Sổ chi phí lương năm (BP×12 tháng, gross+BHXH cty 21,5%) trong Payroll Dashboard + chuyển nút 📒 Sổ lương từ Nhân sự sang Payroll Dashboard. Kế thừa v3.15.19 Sổ ngân hàng: sổ dẫn xuất per-TK (mỏ neo snapshot + giao dịch sau snapshot) + đối chiếu sao kê; gắn TK cho thu hộ/chi hộ; TK trích nợ vay → kỳ đã trả vào sổ; hình thức Giải ngân (không trừ TK) tự gom khế ước nháp + tách; chuyển tiền nội bộ NH↔NH/NH↔quỹ; mục chưa gắn TK]
   Strategy: Network-first for index.html (so updates load fast),
             Cache-first for static assets (icons, manifest).
   Cache version bumps automatically when SW_VERSION changes below.
   ⚠ IMPORTANT: Bump SW_VERSION mỗi khi release version mới của index.html
   để force trình duyệt invalidate cache cũ.
*/

const SW_VERSION = 'v3.15.42';
const CACHE_NAME = `seahorse-${SW_VERSION}`;

// Pre-cache critical files on install
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './lib/xlsx-js-style.min.js'   // v3.10.09 Phase A: self-host thư viện style (cache để dùng offline)
];

self.addEventListener('install', event => {
  console.log('[SW] Install', SW_VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS).catch(e => {
        console.warn('[SW] Precache partial fail:', e);
      }))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Activate', SW_VERSION);
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k.startsWith('seahorse-') && k !== CACHE_NAME)
        .map(k => { console.log('[SW] Delete old cache', k); return caches.delete(k); })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Never cache Google Apps Script (cloud sync) — always go to network
  if (url.hostname.includes('script.google.com') || url.hostname.includes('googleusercontent.com')) {
    return;
  }
  // Never cache CDN fonts (handled by browser cache headers)
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    return;
  }
  // Never cache version.json (we want fresh check)
  if (url.pathname.endsWith('/version.json')) {
    return;
  }

  // Strategy: network-first for HTML, cache-first for assets
  const isHTML = req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/');

  if (isHTML) {
    // v3.12.35 — CACHE-FIRST + CẬP NHẬT NỀN (stale-while-revalidate) cho index.html.
    //   FIX "mở app chậm": trước đây network-first chờ mạng tải 5.2MB (tới 3.5s) MỖI lần mở
    //   dù cache có bản y hệt. Giờ: có cache → phục vụ NGAY (mở tức thì, cả offline/mạng yếu),
    //   fetch nền cập nhật cache cho lần sau. BẢN MỚI vẫn được phát hiện như cũ qua
    //   version.json (không cache) + checkForUpdate (auto chạy lúc boot) → auto-reload,
    //   lúc reload cache đã được fetch nền cập nhật → lên bản mới nhanh. SW_VERSION bump
    //   khi release vẫn xóa cache cũ + precache bản mới như trước.
    event.respondWith((async () => {
      const cached = await caches.match(req);
      const networkUpdate = fetch(req, {cache:'no-store'}).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => null);
      if (cached) {
        // Có cache → trả ngay; mạng chạy nền cập nhật (không await)
        return cached;
      }
      // Chưa có cache (lần cài đầu) → chờ mạng; fail → thử cache index chung
      const net = await networkUpdate;
      if (net) return net;
      return caches.match('./index.html');
    })());
  } else {
    // Cache-first for assets
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, clone));
          }
          return res;
        });
      })
    );
  }
});

// Allow page to trigger immediate update
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
