# Dat Kim — Personal Portfolio

Portfolio cá nhân của **Kim Huỳnh Tiến Đạt**, sinh viên Artificial Intelligence tại FPT University.

Giao diện tiếng Anh, tông kem – xanh rêu, chế độ sáng/tối, tương thích điện thoại. Được viết bằng HTML, CSS và JavaScript thuần; không cần npm, framework hay bước build.

## Xem thử trên máy

Giải nén và mở `index.html` trong trình duyệt. Giữ nguyên thư mục `assets` cạnh file này để ảnh, CV và chứng chỉ hiển thị đúng.

Nếu dùng VS Code, có thể mở bằng Live Server. Hoặc chạy trong thư mục vừa giải nén:

```bash
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## Đưa lên GitHub Pages

1. Mở repository bạn muốn dùng, ví dụ repository portfolio `Dat-Kim` hiện có, hoặc tạo một repository mới.
2. Upload **nội dung bên trong thư mục đã giải nén**: `index.html`, `styles.css`, `script.js`, `assets` và các file đi kèm. `index.html` phải ở thư mục gốc của repository. Không upload riêng file ZIP và không đặt toàn bộ nội dung vào thêm một thư mục con.
3. Commit các file lên nhánh `main` (hoặc nhánh bạn chọn).
4. Vào **Settings → Pages → Build and deployment**.
5. Chọn **Source: Deploy from a branch**, chọn nhánh đã upload, chọn **/(root)** rồi **Save**.
6. Sau khi quá trình triển khai hoàn tất, mở URL được GitHub hiển thị trong phần Pages.

Nếu đang cập nhật repository cũ, thay các file trùng tên bằng bản mới và giữ nguyên cấu trúc thư mục `assets` của gói này.

Hướng dẫn chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Cấu trúc

| File / thư mục | Nội dung |
| --- | --- |
| `index.html` | Giới thiệu, kỹ năng, học vấn, dự án, nghiên cứu, chứng chỉ, liên hệ |
| `styles.css` | Màu sắc, bố cục responsive, animation và dark mode |
| `script.js` | Nội dung chi tiết dự án/chứng chỉ, modal, menu mobile, copy email |
| `assets/portrait.webp` | Ảnh chân dung được lấy từ CV |
| `assets/Kim-Huynh-Tien-Dat-CV.pdf` | CV gốc để xem và tải |
| `assets/certificates/` | Ảnh chứng chỉ và tài liệu gốc |
| `assets/*.svg` | Favicon và hình minh họa chủ đề dự án |

## Chỉnh sửa sau này

- **Thông tin và liên hệ:** sửa trong `index.html`. Nếu đổi email hoặc GitHub, cũng sửa các vị trí tương ứng trong `script.js`.
- **Dự án:** sửa nội dung thẻ trong `index.html` và object `projects` đầu file `script.js`.
- **Chứng chỉ:** sửa thẻ trong `index.html` và object `certificates` trong `script.js`; đặt ảnh/PDF mới trong `assets/certificates`.
- **Màu sắc:** sửa các biến CSS ở đầu `styles.css`. `:root` là chế độ sáng, `[data-theme=dark]` là chế độ tối.
- **CV:** thay PDF trong `assets` bằng file mới cùng tên, hoặc cập nhật toàn bộ liên kết nếu đổi tên file.

## Ghi chú nội dung

- Nội dung chuyên môn, vai trò đóng góp, số liệu, DOI và đường dẫn cá nhân được lấy từ CV đã cung cấp. Không bổ sung kết quả thực nghiệm mới.
- Các hình dự án là minh họa SVG, không phải ảnh dự đoán thực tế của mô hình.
- Nút GitHub mở hồ sơ cá nhân vì file nguồn không cung cấp URL repository riêng cho từng dự án.
- Ba chứng chỉ Coursera có liên kết xác minh đúng mã trong tài liệu gốc. Chứng chỉ Gemini có ảnh gốc và thời hạn như tài liệu đã gửi.
- Ảnh, CSS, JavaScript và chứng chỉ đều nằm trong gói; trang không cần tải thư viện hay font từ bên thứ ba.
- Email dùng `mailto:` để mở ứng dụng email của người xem; đây không phải form gửi thư qua máy chủ.
- Có hỗ trợ bàn phím, đóng modal bằng Escape và tùy chọn giảm chuyển động của hệ điều hành.

## Kiểm tra trước bàn giao

Đã kiểm tra cú pháp JavaScript, tài nguyên nội bộ, hiển thị desktop và khung mobile 390px, menu mobile, chế độ tối, chi tiết dự án và xem chứng chỉ. Việc xuất bản lên GitHub được thực hiện sau khi bạn upload các file.
