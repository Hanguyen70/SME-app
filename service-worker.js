/* Seahorse Manager — Service Worker  [BUILD-TAG: v3.15.58 — GĐ2A Module Kho trọn gói (B1→B4, test-first từng bước): B1 HỢP NHẤT nhập kho từ AP theo CỤM BATCH (mỗi dòng phiếu AP = 1 record, link batchId): 1 modal duy nhất openStockInUnified cho cả nút list + nút trong form; N2 cách 1: nút 📦 trong form TỰ LƯU NHÁP AP trước (await _mrSave('draft') tuần tự, cầu _mrLastBatch) → apId/apBatchId THẬT, hết đứt link; N3 banner đợt trước + cột Đã nhập cộng dồn theo srcApId (fallback desc), line mang srcApId + orderedQty (Đ2a PO-nhẹ); N4 nút 📦 hiện MỌI trạng thái AP (dời khỏi nhánh draft/rejected, định vị chỉ số vì actionBtns ×3); luồng cũ _pendRender/_mrStockRender DEPRECATED v3.15.58 không còn call-site. B1b: modal hiện đủ diễn giải (title full) + 📄 IMPORT CHI TIẾT Báo giá/HĐ Excel cho AP 1 dòng gộp (whParseQuoteRows header linh hoạt, whMergeQuoteRows prefill tick/SL/mã + orderedQty, neo srcApId, tự bỏ tick dòng gộp khi 1 nguồn, import lại thay bộ cũ). B1c: header phiếu đủ NCC (sửa được)/Số HĐ/Ngày HĐ/Số hóa đơn → doc.contractNo/contractDate/invoiceNoHdr. B1d (thiết kế lại theo Sếp — CP về SAU, NCC khác): form tạo AP chi phí có tick 💰 Chi phí nhập kho + chọn loại + tìm phiếu NK đích (NCC/số HĐ/số phiếu/hóa đơn, không dấu) → lưu AP xong TỰ GẮN vào landedCosts phiếu đích (source:'ap' NET y hệt thủ kho gắn tay, audit stock_cost_link), phiếu confirmed thì tự tính lại landedAlloc. B2 màn 📦 THEO DÕI NHẬP KHO thay 'Phiếu chờ nhập của tôi' (hết mất dấu sau xác nhận): KPI 3 ô, chip lọc + tìm + khoảng ngày, gom CỤM hóa đơn với badge Chờ/Còn thiếu/Nhập đủ + progress Đã nhận x/y · chờ z · N đợt, dòng đợt + 🖨 in, ➕ Đợt tiếp → modal thống nhất, khu CHƯA GẮN HÓA ĐƠN + 🔗 Gắn AP dọn phiếu mồ côi; tile trang chủ NV đổi 'N chờ nhập · M vừa nhập 7 ngày'. B3 IN ẤN: DocEngine thêm spec.watermark/footerNote/footerLines (dùng chung); phiếu pending in watermark CHỜ NHẬP — CHƯA XÁC NHẬN, bị đảo ĐÃ ĐẢO — KHÔNG SỬ DỤNG; confirmed in 'Đã xác nhận nhập kho ngày… bởi… · Tàu xác nhận…'; FIX BUG GIÁ NHIỀU ĐỢT (whComputeStockPrintPrices: mẫu số = orderedQty hoặc TỔNG SL các đợt cùng srcApId/apId, bỏ phiếu đảo — hết ca 40/100 lít giá phồng 2,5×); X1 landedAlloc nối vào giá bản in + chân phiếu 'Trong đó CP nhập kho: …' theo loại — hết dữ liệu chết; C2b in Đợt k/n · lũy kế; quy tắc giá theo NGƯỜI-PHÍA-TÀU (tàu luôn không giá; bờ kể cả NV mua sắm được chooser 2 bản — scope P2 đã chặn phiếu người khác); C2c 🖨 In bộ theo cụm: trang TỔNG HỢP LŨY KẾ + các phiếu confirmed nối trang (DocEngine.renderHtml). B4: X2 guard-theo-số-dư AP chi phí (whApCostRemaining: đã dùng/còn lại qua các phiếu bỏ đảo; _lcAddAp prefill phần còn lại, hết dư mới confirm; _lcSet cho sửa amount ≤ trần _maxAmount) — 1 AP cước chia được nhiều đợt; X3 tag +CP trên dòng đợt; N5 điều chuyển 2 BƯỚC kho tàu: vế IN pending chờ TÀU xác nhận qua màn Nhận hàng (openPendingInbound nhận cả TRANSFER_IN), OUT trừ nguồn ngay, notif tàu, đảo OUT khi vế IN còn pending → tự hủy vế chờ không mồ côi. Toàn bộ: 7 bộ test test-first PASS trên code thật trích từ file + regression GĐ1. Gốc v3.15.57 — GĐ1 Module Kho (P0 vá lỗ hổng tàu thấy mọi kho + scope chứng từ + guard xóa; P1 state machine + Đảo phiếu net-zero đảo cả cặp; UI kho tàu 4 nút Nhận hàng/Tồn tổng hợp/Kiểm kê/Báo cáo theo tàu + mã tạm SH-; Soát mã tạm; Nhập tồn đầu kỳ Excel FAST; 8 nhóm hàng hải; dọn vặt).]
   Strategy: Network-first for index.html (so updates load fast),
             Cache-first for static assets (icons, manifest).
   Cache version bumps automatically when SW_VERSION changes below.
   ⚠ IMPORTANT: Bump SW_VERSION mỗi khi release version mới của index.html
   để force trình duyệt invalidate cache cũ.
*/

const SW_VERSION = 'v3.15.58';
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
