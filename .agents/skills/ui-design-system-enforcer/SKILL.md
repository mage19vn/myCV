---
name: ui-design-system-enforcer
description: >-
  Use this skill when designing or implementing user interfaces, styling components, or creating web pages. It enforces rich aesthetics, dynamic animations, modern typography, and semantic HTML for a premium user experience.
---

# UI Design System Enforcer

Khi kỹ năng này được kích hoạt, bạn phải tuân thủ nghiêm ngặt các nguyên tắc thiết kế giao diện (UI) sau đây khi xây dựng hoặc cập nhật ứng dụng web.

## Các Nguyên Tắc Cốt Lõi

1. **Ưu tiên sự xuất sắc về mặt thị giác (Visual Excellence)**
   - Sử dụng các bảng màu được lựa chọn kỹ lưỡng, hài hòa (ví dụ: màu HSL tùy chỉnh, giao diện tối mượt mà). KHÔNG sử dụng các màu cơ bản (đỏ, xanh dương, xanh lá cây thuần).
   - Sử dụng nghệ thuật chữ (typography) hiện đại từ Google Fonts (ví dụ: Inter, Roboto, Outfit). Không bao giờ sử dụng font chữ mặc định của trình duyệt.
   - Áp dụng các dải màu (gradients) mượt mà và hiệu ứng kính (glassmorphism) ở những nơi phù hợp.

2. **Thiết kế Động & Vi hiệu ứng (Dynamic Design & Micro-animations)**
   - Đảm bảo giao diện mang lại cảm giác phản hồi và sống động.
   - Thêm các hiệu ứng khi di chuột (hover), trạng thái focus và các chuyển đổi (transitions) cho các thành phần tương tác.
   - Sử dụng các vi hiệu ứng tinh tế để nâng cao trải nghiệm người dùng (ví dụ: khi nhấn nút, chuyển trang, trạng thái tải).

3. **Cảm giác Cao cấp (Premium Feel)**
   - Tránh tạo ra các sản phẩm MVP đơn giản, cơ bản. Hãy hướng tới một thiết kế mang cảm giác cao cấp, hiện đại khiến người dùng phải "wow".

4. **Kiến trúc Component (Component Architecture)**
   - Xây dựng các component tập trung và có thể tái sử dụng.
   - Đảm bảo tất cả các component sử dụng các style được định nghĩa sẵn từ hệ thống thiết kế (ví dụ: `index.css`) thay vì các tiện ích tùy biến (ad-hoc) lẻ tẻ.

5. **Thực hành tốt nhất về SEO & Trải nghiệm (SEO & Accessibility)**
   - Đảm bảo sử dụng các thẻ HTML5 ngữ nghĩa (ví dụ: `<main>`, `<article>`, `<nav>`, `<header>`).
   - Đảm bảo các thành phần tương tác có ID duy nhất và mang tính mô tả.
   - Cấu trúc tiêu đề (heading) hợp lý (chỉ một thẻ `<h1>` trên mỗi trang, cấu trúc phân cấp `<h2>`, `<h3>`).

## Các bước thực hiện

1. **Kiểm tra Tài nguyên Thiết kế**: Đảm bảo bạn đang sử dụng các font chữ phù hợp (ví dụ: qua thẻ `<link>` cho Google Fonts) và không dùng ảnh giữ chỗ (placeholder). Hãy sử dụng công cụ `generate_image` để tạo hình ảnh minh họa nếu cần.
2. **Đánh giá Stylesheet**: Bắt đầu bằng việc thiết lập các design tokens cốt lõi (biến cho màu sắc, khoảng cách, typography) trong file CSS chính.
3. **Tinh chỉnh Tương tác**: Kiểm tra tất cả các nút (buttons), liên kết (links), và ô nhập liệu (inputs) để đảm bảo có trạng thái hover, active, và focus thích hợp.
4. **Tự Đánh Giá**: Nếu thiết kế kết quả trông "đơn giản và cơ bản", bạn BẮT BUỘC phải sửa lại và nâng cấp nó trước khi trình bày cho người dùng.
