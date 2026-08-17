/* Seahorse Manager — Service Worker  [BUILD-TAG: v3.16.57 — NAV VM: ẨN NÚT SÓT (Sếp: 'ẩn khỏi tab của VM cho gọn, KHÔNG đụng gì tới Kho kỹ thuật; chỉ dành cho VM'): CHỈ trong renderVesselOpsSubmenu, CHỈ khi là VM (không admin): (1) bỏ đơn vị kho isShoreUnit (vd KHO KỸ THUẬT) khỏi ownRows — nó là kho vật tư kỹ thuật đăng ký dạng tàu type=TECH (Sếp chốt 16/8, cờ isShoreUnit đã loại khỏi đội tàu KPI/báo cáo), vào qua tab Kho vật tư, hiện ở submenu tàu gây rối; (2) bỏ nhãn tiêu đề 'Tàu quản lý hộ' (chữ đứng dọc), AFALINA/KATRAN giữ. KHÔNG đụng bản ghi/cờ/cơ chế kho; vai khác (admin/BOD/…) GIỮ NGUYÊN. Test-first 6 ca PASS (nền FAIL 2 đúng chỗ; test 5-6 xác nhận vai khác không đổi) + regression v31656 12 + vm 7 + nf 12 + nav 5 PASS + gác cổng PASS. Gốc v3.16.56.] [BUILD-TAG: v3.16.56 — NAV VM GỌN + 2 SỔ XEM TẠI CHỖ (Sếp: 'Nav VM chỉ hiện: tàu công ty, tàu QL hộ, Thu-Chi hộ, Kho vật tư — còn lại ẩn cho gọn'; 'Sổ theo dõi Khoán và Sổ Chi phí vận hành: tạo bảng xem TẠI SỔ như Số dư & đối chiếu — KHÔNG mở về trang tính'): (A) NAV VM: mẫu vai VM bỏ 'operations' khỏi tabs (còn 'inventory'); canAccessTab ẩn TUYỆT ĐỐI operations+library cho VM (nội dung tàu vào qua NÚT TÀU submenu + Thu-Chi hộ op_input + Kho vật tư). VÁ HỒI QUY: _canOps trong applyRoleUI thêm isVesselManager() để submenu chọn tàu VẪN dựng cho VM dù bỏ tab operations (nếu không VM mất luôn nút mở tàu). Nút tàu (openVesselHub/openOpVesselHub) không có data-page nên applyNavPermissions không đụng. (B) 2 SỔ: openOpKhoanReport (khoanReconcile → bảng Tháng×Loại: Thực chi·Mức khoán·Balance) + openOpSeahorseOpexReport (_seahorseOpexRows lọc tàu → Ngày·NCC·Gross·USD·TT) mở trong openModal như _qvOwnerDetail, nút In, KHÔNG navTo. Bỏ _gotoKhoanBook/_gotoSeahorseOpex ở thẻ. Test-first 12 ca PASS + regression vm 7 + nf 12 + nav 5 + crew 3 PASS + gác cổng PASS. Gốc v3.16.55.] [BUILD-TAG: v3.16.55 — DANH SÁCH THUYỀN VIÊN = HỒ SƠ NGƯỜI THẬT (Sếp: 'cần Danh sách thuyền viên — không phải lương'): thẻ Hub tàu QL hộ nay gọi openVesselCrewList(vid) đã có sẵn — danh sách hợp nhất từ Quyết định điều động + Hồ sơ NS (họ tên · chức danh · ngày lên/xuống · trạng thái · nguồn), KHÔNG nhập tay, KHÔNG gom từ lương. vesselCrewMerged(vid) thuần theo vid nên chạy cho AFALINA/KATRAN như tàu công ty. Thêm làm thẻ thứ 3 (giữ Sổ Khoán + Sổ Chi phí VH của v3.16.54). Test-first 3 ca PASS + regression hub 6 PASS + gác cổng PASS. Gốc v3.16.54.] [BUILD-TAG: v3.16.54 — SỬA 2 THẺ HUB TÀU QL HỘ CHO ĐÚNG Ý (Sếp: 'Hiếu sai ý tôi — cần báo cáo Sổ theo dõi Khoán và Sổ Chi phí vận hành (chi Seahorse chịu)'): v3.16.51 dựng SAI (bảng gom tổng/tháng tự chế + danh sách thuyền viên). NAY bỏ hẳn 4 hàm gom-tháng + 2 modal đó; 2 thẻ Hub mở THẲNG 2 SỔ ĐÃ CÓ trong tab QL vận hành tàu: (1) 'Sổ theo dõi Khoán' → _gotoKhoanBook: navTo operations, mở section #khoan-recon-section, set #khoan-filter-vessel=tàu, renderOpKhoanRecon, cuộn tới. (2) 'Sổ Chi phí vận hành' (Seahorse tự chịu, nội bộ) → _gotoSeahorseOpex: mở section #seahorse-opex-block, set #seaopex-filter-vessel=tàu, renderSeahorseOpex, cuộn tới. Không dựng bảng mới, không đụng số liệu. Test-first 6 ca PASS + regression VM 7 + nf 12 + nav 5 PASS + gác cổng PASS. Gốc v3.16.53.] [BUILD-TAG: v3.16.53 — VM ẨN PHẢI THU · PHẢI TRẢ · TẠM ỨNG NV (Sếp: 'Ẩn Phải thu - phải trả/ tạm ứng nhân viên trên VM'): GỐC — canAccessTab cấp NGẦM payables/receivables (NV_CORE_TABS) và advances cho MỌI tài khoản đăng nhập nên VM thấy dù mẫu vai chỉ tick operations+inventory. VÁ: chốt VM đặt SAU chốt tài khoản tàu, TRƯỚC 2 nhánh cấp ngầm (NV_CORE + advances) — với isVesselManager (không phải admin), 3 tab này chỉ vào khi admin TICK TAY; NV thường/admin/Thư viện giữ nguyên; tài khoản tàu mang nhầm cờ VM vẫn bị bộ tab tàu tuyệt đối. Nav (v3.16.47/50) tự ẩn theo. Test-first 7 ca PASS (nền FAIL 2 đúng chỗ) + regression nf 12 + nav 5 + Hub 9 PASS + 5 gác cổng PASS. Gốc v3.16.52.] [BUILD-TAG: v3.16.52 — Ô NHẬP TIỀN: NGUYÊN TẮC CỨNG CHO MỌI LOẠI TIỀN (Sếp: 'chỉ là số thập phân khi người dùng CHỦ ĐỘNG gõ dấu . hoặc , — app KHÔNG được tự suy diễn'; các loại tiền khác VND giữ đúng nguyên tắc; tỷ giá VND = số nguyên): GỐC — getter cũ đoán dấu thập phân theo số chữ số sau dấu chấm → gõ thêm số vào sau số đã nhóm ('15.838'+'2000') đọc lệch (Tổng sau VAT 15.838,2 · Giá trị thực hiện 8.238đ); ô Chi hộ VND backspace cắt mất số. VÁ: mỗi ô giữ trạng thái ý định _decPos (số chữ số trước dấu thập phân người ĐÃ gõ; null=mọi dấu là nhóm nghìn), bookkeeping ở beforeinput nên oninput inline đọc đúng ngay. Hiển thị theo loại tiền (VND nhóm '.' lẻ ','; ngoại tệ nhóm ',' lẻ '.'). Ngoại lệ tỷ giá VND (data-nf-int=1/id fx): số nguyên, mọi dấu=nhóm ('25.000'=25000). 30 ô cơ chế song song gộp về cửa chung (bỏ 5 oninput inline, opNumFmtLive chỉ recalc); ô dựng động tự nâng cấp lúc focus. _unformatNumber tin chuỗi getter (64 chuỗi ≥3 số lẻ) — chỉ văn bản import mới đoán. Test-first 12 ca DOM giả PASS + regression nav 5 + Hub 9 PASS + 5 gác cổng PASS. Gốc v3.16.51.] [BUILD-TAG: v3.16.51 — TÀU QL HỘ: thay thẻ 'Thu / Chi hộ' trong Hub bằng 2 thẻ báo cáo CHỈ-XEM (Sếp chốt): (1) Chi phí theo tháng — Chi khoán + Chi vận hành (tổng số/tháng, KHÔNG tách đòi/chi): opCostByMonth(vid) thuần — chi khoán = thực chi khoán (opTx khoanRole=chi NET + AP VESSEL_MGMT khoanCat NET, gộp theo _khoanPeriodOf); chi vận hành = chi hộ thường (opTx OUT không khoán/không seahorseOwn/không _isBudget) + AP chi hộ thường; quy USD dùng chung opTxUsd/apArToUsd. (2) Danh sách thuyền viên — opCrewList(vid) suy từ phiếu lương gắn tàu (opTx CREW_SALARY + AP VESSEL_MGMT 'Lương thuyền viên'), gom theo tên: tổng chi USD + số kỳ + kỳ gần nhất. 2 modal chỉ nút In (window.print), 0 thao tác ghi. Không đụng số dư/nghiệp vụ (hàm thuần đọc). Test-first 9 ca PASS + regression nav 5+4 PASS + 5 gác cổng PASS. Gốc v3.16.50.] [BUILD-TAG: v3.16.50 — LỖ HỔNG NAV CẢ LỚP (Sếp: 'lỗi nghiêm trọng — check đủ và triển khai'): RÀ TOÀN NAV — 4 phần tử ẩn chủ đích (nav-group-fin, nav-group-expenses[data-legacy], nav-mobile-approval, nav-group-bod). GỐC LỖ: với nav PHẲNG (VM/NV/captain) CSS display:contents bung nhóm, tab CON quyết định hiển thị; tab con thuộc NV_CORE_TABS → canAccessTab=true → không bị ẩn theo quyền → MỌI nhóm ẩn chủ đích chứa tab NV_CORE lộ ra (nhóm Chi phí legacy trúng 3/3: vessel/hr/qn_expense). Đây là lỗ cả lớp, không riêng legacy. VÁ GỐC tại applyNavPermissions: LUẬT TỔNG QUÁT — nhóm mang data-legacy → ẩn CẢ CÂY CON bất kể quyền, mọi vai/chế độ; áp cho mọi nhóm ẩn chủ đích tương lai (chỉ cần gắn data-legacy), không phát sinh lỗ mới. KHÔNG đụng nav-group-fin/bod (có _finGrouped/quyền BOD quản riêng). 3 lớp phòng vệ: inline display:none + CSS !important (v3.16.49) + luật JS này. Test-first 5 ca PASS (nền FAIL 2 đúng chỗ) + regression 4+5 ca PASS + 5 gác cổng PASS. Gốc v3.16.49.] [BUILD-TAG: v3.16.49 — ẨN CỨNG NHÓM 'CHI PHÍ (LEGACY)' (Sếp: 'dọn dẹp lỗi đó cẩn thận — app Trọng vẫn hiện thị tào lao'; máy anh Trọng vai VM đã lên 48 vẫn thấy 3 tab Tàu/Dự án O&M · Nhân sự bảo mật · Quản lý chung): GỐC — VM KHÔNG phải phía tàu (whIsVesselSideUser=false → _vaEnforceNav bỏ qua), nav PHẲNG, 3 tab thuộc NV_CORE_TABS nên canAccessTab=true → applyNavPermissions (đã sửa ở 48, chỉ ẩn mục thiếu quyền) KHÔNG ẩn; inline display:none của nhóm cha từng bị JS đời trước xoá và có thể lẫn cache SW cũ. VÁ TẦNG CSS (chắc chắn, không phụ thuộc JS/cache): rule '.nav [data-legacy=true], #nav-group-expenses, và mọi con → display:none!important' phủ MỌI vai/chế độ nav. Giữ 2 lớp: inline display:none gốc + applyNavPermissions bản 48. Test-first 4 ca PASS + regression nav 5 ca PASS + 5 gác cổng PASS. Gốc v3.16.48.] [BUILD-TAG: v3.16.48 — TRẢ CÁCH HIỂN THỊ NAV VỀ VERSION CHUẨN (Sếp: 'quay về cách hiển thị của version chuẩn trước đó'): ẢNH — nhóm 'Chi phí (legacy)' (Tàu/Dự án O&M · Nhân sự bảo mật · Quản lý chung, ẩn cứng từ v1.30) sống lại; cùng gốc 7 tab TCKT tràn/trùng. NGUYÊN NHÂN: applyNavPermissions (v3.16.47) ép el.style.display = ok ? '' : 'none' cho MỌI [data-page] có quyền → hồi sinh mục/nhóm đã ẩn CHỦ ĐÍCH (nav-group-expenses display:none; data-fin-group do _finGrouped; đè display:contents nav phẳng NV). VÁ theo _vaEnforceNav bản chuẩn v3.16.46: CHỈ ẩn mục THIẾU quyền (if(!ok) display=none), KHÔNG set display='' cho mục có quyền; nhóm cha chỉ ẩn khi mọi con thiếu quyền. Giữ nguyên tắc admin-gom/NV-lẻ + ý ẩn hẳn màn không quyền của v3.16.47. Test 5 PASS + 5 gác cổng PASS. Gốc v3.16.47.] [BUILD-TAG: v3.16.47 — ẨN HẲN MÀN KHÔNG CÓ QUYỀN, BỎ POPUP VI PHẠM (Sếp: 'những màn không được phân quyền: ẩn hẳn thay vì thông báo — phản cảm'): GỐC: nav hiện đủ mục cho mọi người; bấm vào mới chặn bằng modal đỏ '⛔ Vi phạm quyền truy cập — Hành vi này đã được ghi vào nhật ký bảo mật'. Người dùng chỉ bấm thứ app bày ra mà bị báo như kẻ đột nhập. (1) applyNavPermissions(): quét mọi [data-page], ẩn mục không qua canAccessTab. Áp cho MỌI VAI — trước chỉ có _vaEnforceNav dành riêng phía tàu. Nhóm cha mà mọi mục con đã ẩn thì ẩn theo, không để lại nhóm rỗng. (2) Gọi ở HAI chỗ: applyRoleUI (sau đăng nhập) và đầu navigateToPage (mỗi lần chuyển trang) — nav có phần dựng động (submenu tàu), áp một lần là không đủ. (3) navigateToPage KHÔNG còn gọi guardAction('access_tab') → 0 chỗ bật popup khi XEM. Chuyển về tab hợp lệ trong im lặng, VẪN ghi logAuditEvent('permission_denied') để soát. (4) GIỮ NGUYÊN showPermissionDenied cho hành vi GHI/SỬA/XÓA trái quyền — đó mới là vi phạm thật. VÁ TRONG LÚC LÀM: lần nối đầu tiên chèn nhầm vào giữa một try{}catch đang mở → hỏng cú pháp toàn file, gác cổng syntax bắt được ngay. Test-first 5 ca PASS + 5 gác cổng PASS + regression 92 bộ PASS. Gốc v3.16.46.] — ĐÚNG MỘT tab; flags:{} — không cờ duyệt/kế toán/quản lý người dùng. (2) VM quản TẤT CẢ tàu nên KHÔNG cần gán tàu đích danh (khác Thuyền trưởng vốn bắt buộc chọn tàu). Ghi rõ trong mô tả mẫu vai để người cấp quyền không tick nhầm. (3) Sếp chốt VM thấy ĐỦ nội dung tab, gồm cả Opex · Nợ NCC · Đối chiếu khoán — không ẩn khối nào. VM không gắn tàu nên không bị coi là phía tàu, đi nhánh BỜ và thấy đủ 6 khối. Test-first 5 ca PASS (gồm ca canh KHÔNG đụng 9 mẫu vai cũ) + 5 gác cổng PASS + regression 88 bộ PASS. Gốc v3.16.42.]', gắn cờ deprecated, và CHẶN ngay tại khâu ghi — hiện cảnh báo MỘT lần cho cả đợt rồi bỏ qua, chỉ đường sang Kho vật tư → Nhập tồn đầu kỳ. Không chặn thì sau này lại đẻ ra số ma y như lần này. Test-first 4 ca PASS + 5 gác cổng PASS + regression 68 bộ PASS. Gốc v3.16.22.] 1 + GS.E.CON.058 [Cuộn] 24 = 25 (vô nghĩa); GS.E.GE.085 [Psc] + GS.E.GE.086 [Set]; GS.E.ME.086 [Pcs] + GS.E.ME.262 [Cái]; GS.E.GE.219 [Psc] + SUR.DRI.EQM.0301 [Nos]. KHẮC PHỤC: khóa gộp = TÊN + ĐƠN VỊ TÍNH, áp cho cả whStockPeriodRows (màn chính) lẫn whStockMatrixAll. Dòng phiếu thiếu tên/ĐVT vẫn tra ngược theo mã nên không bị tách nhầm. ĐO LẠI: 2.309 mã → 2.271 dòng (trước khi vá: 2.267 — đúng 4 dòng bị gộp sai nay tách ra). Tổng tồn GS 11.515,8 khớp file FAST; tổng tồn SUR 19.881,834 khớp file. Test-first 4 ca PASS + 3 gác cổng PASS + regression 44 bộ PASS. Gốc v3.16.03.] = mã riêng của từng kho. Khác tên thì KHÔNG gộp bừa. (3) Mọi thao tác dùng ĐÚNG mã theo kho: xuất dùng ghi mã kho mình; đề xuất điều chuyển ghi mã của KHO NGUỒN và đổi mã theo khi người dùng đổi kho nguồn; dropdown hiện kèm mã để đối chiếu; dòng nào có nhiều mã hiện '+n mã'. (4) Dọn tàn dư: xóa bản openVesselStockOverview CŨ còn sót sau lần gộp màn v3.15.94 — bản cũ nằm sau nên đang là bản chạy thật (cùng loại lỗi khai báo trùng mà gác cổng đã bắt ở bản trước). KIỂM CHỨNG 2 kho thật (GS 1.879 + SUR 430 = 2.309 mã): còn 2.267 dòng, phát hiện 'Bolt' có ở CẢ HAI kho với hai mã khác nhau — đúng thứ trước đây không nhìn thấy. Test-first 6 ca PASS + gác cổng cú pháp PASS + regression 35 bộ PASS. Gốc v3.15.94.]=lưu (status confirmed, tàu VẪN sửa được) ≠ [Gửi HR]=chốt (submitted, tàu khóa) + ghi thẳng thành bản ghi BCC_DOITAU trong hrAttendance (cùng cửa với file Excel HR import, có _empId neo sẵn, unit=tên tàu để kỳ lương chia tàu). HR: 🔒 Kiểm & khóa (khóa CẢ bảng tàu lẫn bản ghi BCC → kỳ lương kéo như thường) · ↩ Trả lại tàu BẮT BUỘC lý do, tàu đọc ngay trên bảng, bản BCC nháp bị xóa dòng để HR không kiểm nhầm số cũ. (5) Màn HR dựng lại theo đúng bộ cột BCC + cùng thứ tự chức danh. Lối vào: chip 'Chấm công' trên dashboard tàu. Không đẻ nguồn thứ hai — FLAG_TS_ABSORB_DISABLED vẫn chặn đường cũ đổ thẳng vào kỳ lương. Test-first 9 ca PASS + regression 16 bộ PASS. Gốc v3.15.73.] — tức Dashboard tàu + Kho vật tư. Bỏ: Tạm ứng NV (advances), Chi phí Tàu/Dự án (vessel_expense), Thu-Chi hộ tàu QL (op_input). (2) CHẶN TẠI CỬA: canAccessTab siết cho MỌI tài khoản phía tàu, không chỉ tài khoản mang cờ isVesselAccount — tài khoản cũ gắn tàu qua linkVesselId hay thuyền trưởng cũng chỉ vào được bộ 2 tab, dù dữ liệu tabs cũ còn ghi 5 mục. (3) Dọn dữ liệu cũ: _vaNormalizeVesselTabs chuẩn hóa tabs của tài khoản tàu về đúng bộ hiện hành lúc boot (chỉ đụng tài khoản phía tàu). (4) Vá vòng lặp: migration v1.44.0 tự cấp op_input chạy MỖI lần boot — nay bỏ qua tài khoản tàu, nếu không thì cứ dọn xong nó lại cấp lại. Test-first 5 ca PASS + regression 8 bộ PASS. Gốc v3.15.65.] nên thấy TOÀN BỘ tàu QL hộ → Sổ công nợ NCC lộ 10,5 tỷ VND / 39.624 USD / 6.800 RUB / 89 NCC cho buồng lái. VÁ: (1) userAssignedOpVesselIds — nhánh phía tàu đặt TRÊN CÙNG (trước cả admin/L1/L2), chưa gán = rỗng. (2) userAssignedVesselIds — phía tàu đọc thẳng assignedVesselIds + linkVesselId, không fallback tất cả tàu. (3) userAssignedProjectIds — phía tàu chưa gán dự án = rỗng. (4) visibleCashFunds — thuyền trưởng chưa gán tàu không còn thấy quỹ văn phòng/quỹ tàu khác. (5) Sổ công nợ NCC ẩn HẲN cả section với phía tàu (không để bảng rỗng). (6) Nhãn 'Chờ nhập' → 'Chờ giao hàng' trong màn Theo dõi nhập kho (thẻ số + chip lọc + badge). NV bờ chưa gán phạm vi giữ nguyên hành vi cũ ở mọi cửa — không khóa nhầm. Test-first 7 ca PASS + regression v3.15.60 (9 ca) + nền GĐ1/GĐ2A (9 bộ) PASS. Gốc v3.15.60.]; Tồn theo kho/Chờ nhập kho/Báo cáo kho/Soát mã/Nhập tồn đầu kỳ + Phiếu nhập/Xuất/Điều chuyển/Kiểm kê gate hết về thủ kho/admin; nút ✓ Nhận hàng dòng pending phía tàu gate riêng. (4) Báo cáo kho phía tàu: khóa cứng đích danh kho tàu (⚓ tên kho), bỏ dropdown 'Mọi kho được phép'. Test-first 4 ca + regression 7 bộ GĐ2A PASS. Gốc v3.15.58 — GĐ2A Module Kho trọn gói (hợp nhất nhập kho từ AP theo cụm batch + tự lưu nháp + nhiều đợt + import báo giá + AP chi phí tự gắn + màn Theo dõi nhập kho + bộ in watermark/lũy kế/giá đúng nhiều đợt + CP vào giá + in bộ + guard số dư + transfer 2 bước kho tàu).]
   Strategy: Network-first for index.html (so updates load fast),
             Cache-first for static assets (icons, manifest).
   Cache version bumps automatically when SW_VERSION changes below.
   ⚠ IMPORTANT: Bump SW_VERSION mỗi khi release version mới của index.html
   để force trình duyệt invalidate cache cũ.
*/

const SW_VERSION = 'v3.16.57';
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
