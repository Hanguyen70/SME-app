/* Seahorse Manager — Service Worker  [BUILD-TAG: v3.16.40 — GIÁ TỒN ĐẦU KỲ LÀM ĐIỂM THAM CHIẾU ĐẦU TIÊN (Sếp: 'giá trị đầu kỳ — đơn giá bình quân — lấy làm số tham chiếu, điểm đầu tiên trên đồ thị, không nên bỏ qua'): GỐC: phiếu TỒN ĐẦU KỲ thường nằm TRƯỚC kỳ 6 tháng đang xem (VD: chốt 31/07, xem kỳ 08), nên lọc theo kỳ là nó rơi mất — đồ thị không có mốc so sánh, và với dữ liệu hiện tại (mới chỉ nạp tồn đầu kỳ) thì màn TRỐNG HOÀN TOÀN. (1) Lấy riêng phiếu tồn đầu kỳ GẦN NHẤT trước-hoặc-trong kỳ làm điểm đầu — CHỈ MỘT, không lấy hết các kỳ cũ (thử với 2 phiếu đầu kỳ: chọn đúng phiếu 31/07, bỏ phiếu 31/12 năm trước). (2) Nhãn 'Tồn đầu kỳ (tham chiếu)' thay cho '(không gắn hóa đơn)' — nó không phải một lần mua. (3) KHÔNG gộp vào bảng so sánh NCC: tồn đầu kỳ không phải nhà cung cấp, gộp vào sẽ đẻ ra một 'NCC' ma và làm lệch xếp hạng giá. (4) Giá thấp/cao/gần nhất vẫn tính trên các LẦN MUA THẬT; giá đầu kỳ trả riêng qua openingPrice/openingDate. (5) HIỂN THỊ: điểm đầu kỳ vẽ HÌNH VUÔNG màu nâu + đường ngang nét đứt làm mốc, khác hẳn chấm tròn xanh của các lần mua; thang giá của đồ thị gồm cả giá đầu kỳ (không thì điểm này nằm ngoài khung); dòng tóm tắt thêm 'Đầu kỳ (ngày): giá' và % chênh của lần mua gần nhất so đầu kỳ; dòng đầu kỳ trong bảng tô nền nhạt. MÔ PHỎNG: chỉ có tồn đầu kỳ → 1 điểm (không còn màn trống); đầu kỳ 140.000 + Petrolimex 152.000 + Total 133.000 → 3 điểm, -5% so đầu kỳ, bảng so NCC vẫn đúng 2 nguồn. Test-first 6 ca PASS + 5 gác cổng PASS + regression 85 bộ PASS. Gốc v3.16.39.]', gắn cờ deprecated, và CHẶN ngay tại khâu ghi — hiện cảnh báo MỘT lần cho cả đợt rồi bỏ qua, chỉ đường sang Kho vật tư → Nhập tồn đầu kỳ. Không chặn thì sau này lại đẻ ra số ma y như lần này. Test-first 4 ca PASS + 5 gác cổng PASS + regression 68 bộ PASS. Gốc v3.16.22.] 1 + GS.E.CON.058 [Cuộn] 24 = 25 (vô nghĩa); GS.E.GE.085 [Psc] + GS.E.GE.086 [Set]; GS.E.ME.086 [Pcs] + GS.E.ME.262 [Cái]; GS.E.GE.219 [Psc] + SUR.DRI.EQM.0301 [Nos]. KHẮC PHỤC: khóa gộp = TÊN + ĐƠN VỊ TÍNH, áp cho cả whStockPeriodRows (màn chính) lẫn whStockMatrixAll. Dòng phiếu thiếu tên/ĐVT vẫn tra ngược theo mã nên không bị tách nhầm. ĐO LẠI: 2.309 mã → 2.271 dòng (trước khi vá: 2.267 — đúng 4 dòng bị gộp sai nay tách ra). Tổng tồn GS 11.515,8 khớp file FAST; tổng tồn SUR 19.881,834 khớp file. Test-first 4 ca PASS + 3 gác cổng PASS + regression 44 bộ PASS. Gốc v3.16.03.] = mã riêng của từng kho. Khác tên thì KHÔNG gộp bừa. (3) Mọi thao tác dùng ĐÚNG mã theo kho: xuất dùng ghi mã kho mình; đề xuất điều chuyển ghi mã của KHO NGUỒN và đổi mã theo khi người dùng đổi kho nguồn; dropdown hiện kèm mã để đối chiếu; dòng nào có nhiều mã hiện '+n mã'. (4) Dọn tàn dư: xóa bản openVesselStockOverview CŨ còn sót sau lần gộp màn v3.15.94 — bản cũ nằm sau nên đang là bản chạy thật (cùng loại lỗi khai báo trùng mà gác cổng đã bắt ở bản trước). KIỂM CHỨNG 2 kho thật (GS 1.879 + SUR 430 = 2.309 mã): còn 2.267 dòng, phát hiện 'Bolt' có ở CẢ HAI kho với hai mã khác nhau — đúng thứ trước đây không nhìn thấy. Test-first 6 ca PASS + gác cổng cú pháp PASS + regression 35 bộ PASS. Gốc v3.15.94.]=lưu (status confirmed, tàu VẪN sửa được) ≠ [Gửi HR]=chốt (submitted, tàu khóa) + ghi thẳng thành bản ghi BCC_DOITAU trong hrAttendance (cùng cửa với file Excel HR import, có _empId neo sẵn, unit=tên tàu để kỳ lương chia tàu). HR: 🔒 Kiểm & khóa (khóa CẢ bảng tàu lẫn bản ghi BCC → kỳ lương kéo như thường) · ↩ Trả lại tàu BẮT BUỘC lý do, tàu đọc ngay trên bảng, bản BCC nháp bị xóa dòng để HR không kiểm nhầm số cũ. (5) Màn HR dựng lại theo đúng bộ cột BCC + cùng thứ tự chức danh. Lối vào: chip 'Chấm công' trên dashboard tàu. Không đẻ nguồn thứ hai — FLAG_TS_ABSORB_DISABLED vẫn chặn đường cũ đổ thẳng vào kỳ lương. Test-first 9 ca PASS + regression 16 bộ PASS. Gốc v3.15.73.] — tức Dashboard tàu + Kho vật tư. Bỏ: Tạm ứng NV (advances), Chi phí Tàu/Dự án (vessel_expense), Thu-Chi hộ tàu QL (op_input). (2) CHẶN TẠI CỬA: canAccessTab siết cho MỌI tài khoản phía tàu, không chỉ tài khoản mang cờ isVesselAccount — tài khoản cũ gắn tàu qua linkVesselId hay thuyền trưởng cũng chỉ vào được bộ 2 tab, dù dữ liệu tabs cũ còn ghi 5 mục. (3) Dọn dữ liệu cũ: _vaNormalizeVesselTabs chuẩn hóa tabs của tài khoản tàu về đúng bộ hiện hành lúc boot (chỉ đụng tài khoản phía tàu). (4) Vá vòng lặp: migration v1.44.0 tự cấp op_input chạy MỖI lần boot — nay bỏ qua tài khoản tàu, nếu không thì cứ dọn xong nó lại cấp lại. Test-first 5 ca PASS + regression 8 bộ PASS. Gốc v3.15.65.] nên thấy TOÀN BỘ tàu QL hộ → Sổ công nợ NCC lộ 10,5 tỷ VND / 39.624 USD / 6.800 RUB / 89 NCC cho buồng lái. VÁ: (1) userAssignedOpVesselIds — nhánh phía tàu đặt TRÊN CÙNG (trước cả admin/L1/L2), chưa gán = rỗng. (2) userAssignedVesselIds — phía tàu đọc thẳng assignedVesselIds + linkVesselId, không fallback tất cả tàu. (3) userAssignedProjectIds — phía tàu chưa gán dự án = rỗng. (4) visibleCashFunds — thuyền trưởng chưa gán tàu không còn thấy quỹ văn phòng/quỹ tàu khác. (5) Sổ công nợ NCC ẩn HẲN cả section với phía tàu (không để bảng rỗng). (6) Nhãn 'Chờ nhập' → 'Chờ giao hàng' trong màn Theo dõi nhập kho (thẻ số + chip lọc + badge). NV bờ chưa gán phạm vi giữ nguyên hành vi cũ ở mọi cửa — không khóa nhầm. Test-first 7 ca PASS + regression v3.15.60 (9 ca) + nền GĐ1/GĐ2A (9 bộ) PASS. Gốc v3.15.60.]; Tồn theo kho/Chờ nhập kho/Báo cáo kho/Soát mã/Nhập tồn đầu kỳ + Phiếu nhập/Xuất/Điều chuyển/Kiểm kê gate hết về thủ kho/admin; nút ✓ Nhận hàng dòng pending phía tàu gate riêng. (4) Báo cáo kho phía tàu: khóa cứng đích danh kho tàu (⚓ tên kho), bỏ dropdown 'Mọi kho được phép'. Test-first 4 ca + regression 7 bộ GĐ2A PASS. Gốc v3.15.58 — GĐ2A Module Kho trọn gói (hợp nhất nhập kho từ AP theo cụm batch + tự lưu nháp + nhiều đợt + import báo giá + AP chi phí tự gắn + màn Theo dõi nhập kho + bộ in watermark/lũy kế/giá đúng nhiều đợt + CP vào giá + in bộ + guard số dư + transfer 2 bước kho tàu).]
   Strategy: Network-first for index.html (so updates load fast),
             Cache-first for static assets (icons, manifest).
   Cache version bumps automatically when SW_VERSION changes below.
   ⚠ IMPORTANT: Bump SW_VERSION mỗi khi release version mới của index.html
   để force trình duyệt invalidate cache cũ.
*/

const SW_VERSION = 'v3.16.40';
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
