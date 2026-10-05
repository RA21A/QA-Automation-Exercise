# Automation Exercise — 40 Automated Test Cases

Dokumentasi ini dibuat langsung dari source code automation pada project `qa-automation-project [v1]`.

## Scope

- **Target:** `https://automationexercise.com`
- **Framework:** Cypress
- **UI Test Cases:** 26
- **API Test Cases:** 14
- **Total:** 40
- **Documentation Basis:** Current Cypress spec implementation in `cypress/e2e/ui/` and `cypress/e2e/api/`

> **Execution status note:** Dokumentasi ini tidak menjalankan ulang seluruh suite. Karena itu field **Actual Result** dan **Status** ditulis sebagai **Not Run**. Ini tidak berarti test gagal; hanya berarti hasil eksekusi terbaru tidak diasumsikan dari source code.

## Coverage Summary

### UI Test Coverage

| ID | Scenario | Module | Automation File |
|---|---|---|---|
| TC01 | Register User | Authentication | `authentication.cy.js` |
| TC02 | Login User with correct email and password | Authentication | `authentication.cy.js` |
| TC03 | Login User with incorrect email and password | Authentication | `authentication.cy.js` |
| TC04 | Logout User | Authentication | `authentication.cy.js` |
| TC05 | Register User with existing email | Authentication | `authentication.cy.js` |
| TC06 | Contact Us Form | Contact | `contact.cy.js` |
| TC07 | Verify Test Cases Page | Contact / Navigation | `contact.cy.js` |
| TC08 | Verify All Products and Product Detail Page | Products | `products.cy.js` |
| TC09 | Search Product | Products | `products.cy.js` |
| TC10 | Verify Subscription in Home Page | Cart / Subscription | `cart.cy.js` |
| TC11 | Verify Subscription in Cart Page | Cart / Subscription | `cart.cy.js` |
| TC12 | Add Products in Cart | Cart | `cart.cy.js` |
| TC13 | Verify Product Quantity in Cart | Cart / Product Detail | `cart.cy.js` |
| TC14 | Place Order: Register While Checkout | Checkout | `checkout.cy.js` |
| TC15 | Place Order: Register Before Checkout | Checkout | `checkout.cy.js` |
| TC16 | Place Order: Login Before Checkout | Checkout | `checkout.cy.js` |
| TC17 | Remove Products From Cart | Cart | `cart.cy.js` |
| TC18 | View Category Products | Products / Category | `products.cy.js` |
| TC19 | View and Cart Brand Products | Products / Brands | `products.cy.js` |
| TC20 | Search Products and Verify Cart After Login | Cart / Search / Authentication | `cart.cy.js` |
| TC21 | Add Review on Product | Products / Review | `products.cy.js` |
| TC22 | Add to Cart from Recommended Items | Products / Recommended Items | `products.cy.js` |
| TC23 | Verify Address Details in Checkout Page | Checkout / Address | `checkout.cy.js` |
| TC24 | Download Invoice After Purchase Order | Checkout / Invoice | `checkout.cy.js` |
| TC25 | Verify Scroll Up Using Arrow Button | Navigation / Scroll | `navigation.cy.js` |
| TC26 | Verify Scroll Up Without Arrow Button | Navigation / Scroll | `navigation.cy.js` |

### API Test Coverage

| ID | Scenario | Module | Automation File |
|---|---|---|---|
| API01 | Get All Products List | Products API | `products-api.cy.js` |
| API02 | POST To All Products List | Products API | `products-api.cy.js` |
| API03 | Get All Brands List | Brands API | `brands-api.cy.js` |
| API04 | PUT To All Brands List | Brands API | `brands-api.cy.js` |
| API05 | POST To Search Product | Products API | `products-api.cy.js` |
| API06 | POST To Search Product without search_product parameter | Products API | `products-api.cy.js` |
| API07 | POST To Verify Login with valid details | Users API / Login | `users-api.cy.js` |
| API08 | POST To Verify Login without email parameter | Users API / Login | `users-api.cy.js` |
| API09 | DELETE To Verify Login | Users API / Login | `users-api.cy.js` |
| API10 | POST To Verify Login with invalid details | Users API / Login | `users-api.cy.js` |
| API11 | POST To Create/Register User Account | Users API / Account | `users-api.cy.js` |
| API12 | DELETE METHOD To Delete User Account | Users API / Account | `users-api.cy.js` |
| API13 | PUT METHOD To Update User Account | Users API / Account | `users-api.cy.js` |
| API14 | GET User Account Detail by Email | Users API / Account | `users-api.cy.js` |

---

# Detailed UI Test Cases

## TC01 — Register User

**Type:** UI / E2E  
**Feature/Module:** Authentication  
**Scenario:** Register User  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses. Data user unik dapat dibuat melalui `createTestUser()`.  
**Automation File:** `cypress/e2e/ui/authentication.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis dari `users.js`: password `Test123456!`, title `Mr`, first name `QA`, last name `Tester`, company `QA Automation`, address `Jl. Testing Automation No. 1`, address2 `Jakarta`, country `Canada`, state/city `Jakarta`, zipcode `12345`, mobile `081234567890`; name dan email unik.

### Test Steps

1. Generate user baru dengan `createTestUser()`.
2. Buka Home Page dan verifikasi halaman utama terlihat.
3. Klik menu **Signup / Login**.
4. Verifikasi judul **New User Signup!** terlihat.
5. Isi nama dan email user lalu mulai proses signup.
6. Verifikasi **Enter Account Information** terlihat.
7. Isi informasi akun dan alamat, lalu submit **Create Account**.
8. Verifikasi **Account Created** terlihat.
9. Klik **Continue**.
10. Verifikasi user login dengan teks **Logged in as <username>**.
11. Hapus account melalui UI sebagai cleanup.

### Expected Result

User berhasil diregistrasi, masuk dalam keadaan login, dan account berhasil dihapus pada cleanup.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Automation membuat data name/email unik untuk menghindari bentrok account.

---
## TC02 — Login User with correct email and password

**Type:** UI / E2E  
**Feature/Module:** Authentication  
**Scenario:** Login User with correct email and password  
**Priority:** Not specified in automation source  
**Precondition:** User valid dibuat terlebih dahulu melalui API `/api/createAccount`.  
**Automation File:** `cypress/e2e/ui/authentication.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis dari `createTestUser()`.

### Test Steps

1. Generate user baru.
2. Buat account melalui custom command `cy.createUserByApi(user)`.
3. Buka Home Page dan verifikasi halaman utama.
4. Klik **Signup / Login**.
5. Verifikasi **Login to your account** terlihat.
6. Login menggunakan email dan password user valid.
7. Verifikasi **Logged in as <username>**.
8. Hapus account melalui UI.

### Expected Result

Login dengan credential valid berhasil dan username tampil sebagai user yang sedang login.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Precondition dibuat via API untuk menjaga test login tetap fokus pada fungsi login.

---
## TC03 — Login User with incorrect email and password

**Type:** UI / E2E  
**Feature/Module:** Authentication  
**Scenario:** Login User with incorrect email and password  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/ui/authentication.cy.js`  
**Automation Status:** Implemented  

### Test Data

Email `invalid_user@example.com`; password `WrongPassword123!`.

### Test Steps

1. Buka Home Page dan verifikasi halaman utama.
2. Klik **Signup / Login**.
3. Verifikasi **Login to your account** terlihat.
4. Masukkan email dan password yang salah.
5. Submit login.
6. Verifikasi pesan invalid login terlihat.

### Expected Result

Login ditolak dan pesan **Your email or password is incorrect!** terlihat.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Negative authentication test.

---
## TC04 — Logout User

**Type:** UI / E2E  
**Feature/Module:** Authentication  
**Scenario:** Logout User  
**Priority:** Not specified in automation source  
**Precondition:** User valid dibuat melalui API.  
**Automation File:** `cypress/e2e/ui/authentication.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis dari `createTestUser()`.

### Test Steps

1. Generate user dan buat account via API.
2. Buka Home Page.
3. Klik **Signup / Login** lalu login dengan credential valid.
4. Verifikasi **Logged in as <username>**.
5. Klik **Logout**.
6. Verifikasi URL mengandung `/login`.
7. Verifikasi **Login to your account** terlihat.
8. Hapus user melalui API.

### Expected Result

User berhasil logout dan diarahkan kembali ke halaman login.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Cleanup dilakukan via API.

---
## TC05 — Register User with existing email

**Type:** UI / E2E  
**Feature/Module:** Authentication  
**Scenario:** Register User with existing email  
**Priority:** Not specified in automation source  
**Precondition:** Account sudah dibuat via API menggunakan email yang akan digunakan kembali untuk signup.  
**Automation File:** `cypress/e2e/ui/authentication.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis dari `createTestUser()`.

### Test Steps

1. Generate user dan buat account via API.
2. Buka Home Page.
3. Klik **Signup / Login**.
4. Verifikasi **New User Signup!** terlihat.
5. Masukkan nama dan email yang sudah terdaftar.
6. Submit signup.
7. Verifikasi pesan existing email terlihat.
8. Hapus user melalui API.

### Expected Result

Registrasi ditolak dan pesan **Email Address already exist!** terlihat.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Negative registration test.

---
## TC06 — Contact Us Form

**Type:** UI / E2E  
**Feature/Module:** Contact  
**Scenario:** Contact Us Form  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/ui/contact.cy.js`  
**Automation Status:** Implemented  

### Test Data

Name/email dari user dinamis; subject `QA Automation Test`; message `This message was submitted by Cypress automation testing.`; file upload `contact-upload.txt` dibuat in-memory.

### Test Steps

1. Generate data user.
2. Buka Home Page dan verifikasi halaman utama.
3. Klik **Contact Us**.
4. Verifikasi **Get In Touch** terlihat.
5. Isi name, email, subject, dan message.
6. Upload file `contact-upload.txt`.
7. Set handler browser confirm untuk menerima dialog.
8. Klik **Submit**.
9. Verifikasi pesan sukses terlihat.
10. Klik **Home** dan verifikasi kembali ke Home Page.

### Expected Result

Form Contact Us berhasil dikirim, pesan sukses tampil, dan user dapat kembali ke Home Page.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

File upload dibuat dari `Cypress.Buffer`, bukan file fisik fixture.

---
## TC07 — Verify Test Cases Page

**Type:** UI / E2E  
**Feature/Module:** Contact / Navigation  
**Scenario:** Verify Test Cases Page  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/ui/contact.cy.js`  
**Automation Status:** Implemented  

### Test Data

Tidak ada data khusus.

### Test Steps

1. Buka Home Page dan verifikasi halaman utama.
2. Klik menu **Test Cases**.
3. Verifikasi URL mengandung `/test_cases`.
4. Verifikasi teks **Test Cases** terlihat.

### Expected Result

Halaman Test Cases terbuka dan heading Test Cases terlihat.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Navigation validation.

---
## TC08 — Verify All Products and Product Detail Page

**Type:** UI / E2E  
**Feature/Module:** Products  
**Scenario:** Verify All Products and Product Detail Page  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/ui/products.cy.js`  
**Automation Status:** Implemented  

### Test Data

Produk pertama pada daftar produk.

### Test Steps

1. Buka Home Page dan verifikasi halaman utama.
2. Klik **Products**.
3. Verifikasi URL mengandung `/products`.
4. Verifikasi judul **All Products**, list produk, dan minimal satu product card tersedia.
5. Klik **View Product** pada produk pertama.
6. Verifikasi URL mengandung `/product_details/`.
7. Verifikasi product name, category, price, availability, condition, dan brand terlihat.

### Expected Result

Daftar produk tampil dan detail produk pertama menampilkan seluruh informasi utama produk.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Positive product catalog/detail test.

---
## TC09 — Search Product

**Type:** UI / E2E  
**Feature/Module:** Products  
**Scenario:** Search Product  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/ui/products.cy.js`  
**Automation Status:** Implemented  

### Test Data

`productData.searchKeyword` = `Blue Top`.

### Test Steps

1. Buka Home Page.
2. Klik **Products**.
3. Verifikasi judul **All Products**.
4. Search produk menggunakan keyword `Blue Top`.
5. Verifikasi **Searched Products** terlihat.
6. Verifikasi daftar nama produk mengandung `Blue Top`.

### Expected Result

Hasil pencarian menampilkan produk yang sesuai dengan keyword `Blue Top`.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Menggunakan data dari `cypress/test-data/products.js`.

---
## TC10 — Verify Subscription in Home Page

**Type:** UI / E2E  
**Feature/Module:** Cart / Subscription  
**Scenario:** Verify Subscription in Home Page  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/ui/cart.cy.js`  
**Automation Status:** Implemented  

### Test Data

Email unik dari `generateUniqueEmail()`.

### Test Steps

1. Generate email unik.
2. Buka Home Page.
3. Scroll ke bagian bawah halaman.
4. Verifikasi judul **Subscription** terlihat.
5. Isi email dan submit subscription.
6. Verifikasi pesan sukses subscription.

### Expected Result

Subscription dari Home Page berhasil dan pesan **You have been successfully subscribed!** terlihat.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Email dibuat unik setiap run.

---
## TC11 — Verify Subscription in Cart Page

**Type:** UI / E2E  
**Feature/Module:** Cart / Subscription  
**Scenario:** Verify Subscription in Cart Page  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/ui/cart.cy.js`  
**Automation Status:** Implemented  

### Test Data

Email unik dari `generateUniqueEmail()`.

### Test Steps

1. Generate email unik.
2. Buka Home Page.
3. Klik menu **Cart**.
4. Scroll ke section Subscription dan verifikasi terlihat.
5. Isi email dan submit subscription.
6. Verifikasi pesan sukses subscription.

### Expected Result

Subscription dari Cart Page berhasil dan pesan sukses terlihat.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Menggunakan selector Cart navigation yang sudah dipersempit ke menu utama.

---
## TC12 — Add Products in Cart

**Type:** UI / E2E  
**Feature/Module:** Cart  
**Scenario:** Add Products in Cart  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses dan produk `Blue Top` serta `Men Tshirt` tersedia.  
**Automation File:** `cypress/e2e/ui/cart.cy.js`  
**Automation Status:** Implemented  

### Test Data

Produk `Blue Top` dan `Men Tshirt`.

### Test Steps

1. Buka Home Page lalu klik **Products**.
2. Tambahkan `Blue Top` ke cart.
3. Klik **Continue Shopping**.
4. Tambahkan `Men Tshirt` ke cart.
5. Klik **View Cart**.
6. Verifikasi Cart terlihat.
7. Verifikasi kedua nama produk terdapat di cart.
8. Untuk masing-masing produk, verifikasi price terlihat, quantity = `1`, dan total terlihat.

### Expected Result

Kedua produk tampil di cart dengan price, quantity 1, dan total.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Validasi value price/total numerik tidak dilakukan; hanya visibility.

---
## TC13 — Verify Product Quantity in Cart

**Type:** UI / E2E  
**Feature/Module:** Cart / Product Detail  
**Scenario:** Verify Product Quantity in Cart  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/ui/cart.cy.js`  
**Automation Status:** Implemented  

### Test Data

Quantity `4`.

### Test Steps

1. Buka Home Page.
2. Klik View Product pada produk pertama.
3. Verifikasi URL detail produk.
4. Set quantity menjadi `4` dan tambahkan produk ke cart.
5. Klik **View Cart**.
6. Verifikasi quantity produk pertama di cart adalah `4`.

### Expected Result

Quantity produk di cart sama dengan 4.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Quantity diambil langsung dari test implementation.

---
## TC14 — Place Order: Register While Checkout

**Type:** UI / E2E  
**Feature/Module:** Checkout  
**Scenario:** Place Order: Register While Checkout  
**Priority:** Not specified in automation source  
**Precondition:** Belum login; data user baru tersedia.  
**Automation File:** `cypress/e2e/ui/checkout.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis; product `Blue Top`; payment data dari `payment.js`.

### Test Steps

1. Generate user baru.
2. Buka Home Page dan verifikasi halaman utama.
3. Tambahkan `Blue Top` ke cart dan buka Cart.
4. Klik **Proceed To Checkout**.
5. Dari checkout modal, klik **Register / Login**.
6. Register user melalui UI dan verifikasi login berhasil.
7. Kembali ke Cart dan klik **Proceed To Checkout**.
8. Verifikasi Address Details dan Review Your Order.
9. Isi order comment, klik **Place Order**, isi payment details, dan submit payment.
10. Verifikasi pesan order confirmation.
11. Hapus account melalui UI.

### Expected Result

User dapat register saat checkout, menyelesaikan payment, dan order terkonfirmasi.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Cleanup account melalui UI.

---
## TC15 — Place Order: Register Before Checkout

**Type:** UI / E2E  
**Feature/Module:** Checkout  
**Scenario:** Place Order: Register Before Checkout  
**Priority:** Not specified in automation source  
**Precondition:** Data user baru tersedia.  
**Automation File:** `cypress/e2e/ui/checkout.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis; product `Blue Top`; payment data dari `payment.js`.

### Test Steps

1. Generate user baru.
2. Buka Home Page dan klik **Signup / Login**.
3. Register user melalui UI dan verifikasi login.
4. Tambahkan `Blue Top` ke cart dan buka Cart.
5. Klik **Proceed To Checkout**.
6. Verifikasi Address Details dan Review Your Order.
7. Isi order comment, lakukan Place Order dan payment.
8. Verifikasi order confirmation.
9. Hapus account melalui UI.

### Expected Result

User yang register sebelum checkout dapat menyelesaikan order dengan sukses.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Positive checkout flow.

---
## TC16 — Place Order: Login Before Checkout

**Type:** UI / E2E  
**Feature/Module:** Checkout  
**Scenario:** Place Order: Login Before Checkout  
**Priority:** Not specified in automation source  
**Precondition:** Account valid dibuat via API sebelum test.  
**Automation File:** `cypress/e2e/ui/checkout.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis; product `Blue Top`; payment data dari `payment.js`.

### Test Steps

1. Generate user dan buat account via API.
2. Buka Home Page dan klik **Signup / Login**.
3. Login menggunakan credential valid.
4. Verifikasi **Logged in as <username>**.
5. Tambahkan `Blue Top` ke cart dan buka Cart.
6. Klik **Proceed To Checkout**.
7. Verifikasi Address Details dan Review Your Order.
8. Isi order comment, lakukan Place Order dan payment.
9. Verifikasi order confirmation.
10. Hapus account melalui UI.

### Expected Result

User yang sudah login dapat menyelesaikan checkout dan order terkonfirmasi.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Account dibuat via API sebagai precondition.

---
## TC17 — Remove Products From Cart

**Type:** UI / E2E  
**Feature/Module:** Cart  
**Scenario:** Remove Products From Cart  
**Priority:** Not specified in automation source  
**Precondition:** Produk `Blue Top` tersedia.  
**Automation File:** `cypress/e2e/ui/cart.cy.js`  
**Automation Status:** Implemented  

### Test Data

Produk `Blue Top`.

### Test Steps

1. Buka Home Page lalu klik **Products**.
2. Tambahkan `Blue Top` ke cart.
3. Klik **View Cart**.
4. Verifikasi Cart terlihat dan row `Blue Top` ada.
5. Klik remove pada `Blue Top`.
6. Verifikasi row `Blue Top` tidak lagi ada.

### Expected Result

Produk `Blue Top` berhasil dihapus dari cart.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Negative existence assertion digunakan setelah remove.

---
## TC18 — View Category Products

**Type:** UI / E2E  
**Feature/Module:** Products / Category  
**Scenario:** View Category Products  
**Priority:** Not specified in automation source  
**Precondition:** Category Women/Dress dan Men/Tshirts tersedia.  
**Automation File:** `cypress/e2e/ui/products.cy.js`  
**Automation Status:** Implemented  

### Test Data

Women > Dress; Men > Tshirts.

### Test Steps

1. Buka Home Page.
2. Verifikasi category section terlihat.
3. Klik category **Women**, lalu subcategory **Dress**.
4. Verifikasi title mengandung `Women` dan `Dress`.
5. Klik category **Men**, lalu subcategory **Tshirts**.
6. Verifikasi title mengandung `Men` dan `Tshirts`.

### Expected Result

Produk berdasarkan category Women/Dress dan Men/Tshirts dapat ditampilkan.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Menguji navigasi category dan heading hasil.

---
## TC19 — View and Cart Brand Products

**Type:** UI / E2E  
**Feature/Module:** Products / Brands  
**Scenario:** View and Cart Brand Products  
**Priority:** Not specified in automation source  
**Precondition:** Brand `Polo` dan `H&M` tersedia.  
**Automation File:** `cypress/e2e/ui/products.cy.js`  
**Automation Status:** Implemented  

### Test Data

Brand `Polo` dan `H&M`.

### Test Steps

1. Buka Home Page lalu klik **Products**.
2. Verifikasi Brands section terlihat.
3. Klik brand **Polo**.
4. Verifikasi URL mengandung `/brand_products/` dan title mengandung `Polo`.
5. Klik brand **H&M**.
6. Verifikasi title mengandung `H&M`.

### Expected Result

Halaman produk untuk brand Polo dan H&M dapat dibuka dan heading sesuai brand.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Nama test mengandung 'Cart', tetapi implementasi saat ini tidak menambahkan produk brand ke cart; dokumentasi mengikuti source code aktual.

---
## TC20 — Search Products and Verify Cart After Login

**Type:** UI / E2E  
**Feature/Module:** Cart / Search / Authentication  
**Scenario:** Search Products and Verify Cart After Login  
**Priority:** Not specified in automation source  
**Precondition:** User valid dibuat via API; produk `Blue Top` tersedia.  
**Automation File:** `cypress/e2e/ui/cart.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis; search/product `Blue Top`.

### Test Steps

1. Generate user dan buat account via API.
2. Buka Home Page lalu klik **Products**.
3. Search `Blue Top` dan verifikasi hasil.
4. Tambahkan `Blue Top` ke cart dan buka Cart.
5. Verifikasi `Blue Top` ada di cart.
6. Klik **Signup / Login** dan login dengan user valid.
7. Verifikasi user login.
8. Buka Cart kembali.
9. Verifikasi `Blue Top` tetap ada di cart.
10. Hapus user via API.

### Expected Result

Produk hasil pencarian tetap tersimpan di cart setelah user login.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Menguji persistensi cart lintas login.

---
## TC21 — Add Review on Product

**Type:** UI / E2E  
**Feature/Module:** Products / Review  
**Scenario:** Add Review on Product  
**Priority:** Not specified in automation source  
**Precondition:** Minimal satu produk tersedia.  
**Automation File:** `cypress/e2e/ui/products.cy.js`  
**Automation Status:** Implemented  

### Test Data

Review name `QA Tester`; email `qatester@example.com`; review `This product review was created by Cypress automation testing.`.

### Test Steps

1. Buka Home Page lalu klik **Products**.
2. Verifikasi **All Products**.
3. Buka detail produk pertama.
4. Verifikasi **Write Your Review** terlihat.
5. Isi dan submit review.
6. Verifikasi pesan **Thank you for your review.**

### Expected Result

Review berhasil dikirim dan pesan sukses review terlihat.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Review data berasal dari `products.js`.

---
## TC22 — Add to Cart from Recommended Items

**Type:** UI / E2E  
**Feature/Module:** Products / Recommended Items  
**Scenario:** Add to Cart from Recommended Items  
**Priority:** Not specified in automation source  
**Precondition:** Section Recommended Items tersedia dan memiliki item aktif.  
**Automation File:** `cypress/e2e/ui/products.cy.js`  
**Automation Status:** Implemented  

### Test Data

Produk pertama pada carousel Recommended Items yang aktif.

### Test Steps

1. Buka Home Page.
2. Scroll ke Recommended Items dan verifikasi section/title terlihat.
3. Ambil nama produk pertama pada carousel aktif.
4. Klik Add to Cart pada produk tersebut.
5. Klik **View Cart**.
6. Verifikasi nama produk yang tadi diambil ada di Cart.

### Expected Result

Produk dari Recommended Items berhasil ditambahkan ke cart.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Expected product ditentukan dinamis dari item aktif.

---
## TC23 — Verify Address Details in Checkout Page

**Type:** UI / E2E  
**Feature/Module:** Checkout / Address  
**Scenario:** Verify Address Details in Checkout Page  
**Priority:** Not specified in automation source  
**Precondition:** Data user baru tersedia.  
**Automation File:** `cypress/e2e/ui/checkout.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis dengan first/last name, address1, city, state, zipcode; product `Blue Top`.

### Test Steps

1. Generate user.
2. Buka Home Page dan klik **Signup / Login**.
3. Register user melalui UI.
4. Tambahkan `Blue Top` ke cart dan buka Cart.
5. Klik **Proceed To Checkout**.
6. Pada Delivery Address verifikasi first name, last name, address1, city, state, zipcode.
7. Pada Billing Address verifikasi field yang sama.
8. Hapus account melalui UI.

### Expected Result

Delivery Address dan Billing Address menampilkan data yang sama dengan data user yang diregistrasikan.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Source code tidak memvalidasi country/mobile pada TC23.

---
## TC24 — Download Invoice After Purchase Order

**Type:** UI / E2E  
**Feature/Module:** Checkout / Invoice  
**Scenario:** Download Invoice After Purchase Order  
**Priority:** Not specified in automation source  
**Precondition:** Belum login; data user baru tersedia; download folder Cypress tersedia.  
**Automation File:** `cypress/e2e/ui/checkout.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis; product `Blue Top`; payment data dari `payment.js`; expected file `cypress/downloads/invoice.txt`.

### Test Steps

1. Generate user.
2. Buka Home Page.
3. Tambahkan `Blue Top` ke cart dan buka Cart.
4. Klik **Proceed To Checkout**, lalu **Register / Login**.
5. Register user melalui UI.
6. Kembali ke Cart dan Proceed To Checkout.
7. Complete order: verify address/order review, comment, place order, payment.
8. Verifikasi order confirmation.
9. Klik **Download Invoice**.
10. Baca `cypress/downloads/invoice.txt` dan verifikasi file tidak kosong.
11. Klik **Continue** dan hapus account.

### Expected Result

Order selesai dan invoice berhasil di-download sebagai `invoice.txt` dengan isi tidak kosong.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Validasi invoice hanya mengecek file tidak kosong.

---
## TC25 — Verify Scroll Up Using Arrow Button

**Type:** UI / E2E  
**Feature/Module:** Navigation / Scroll  
**Scenario:** Verify Scroll Up Using Arrow Button  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/ui/navigation.cy.js`  
**Automation Status:** Implemented  

### Test Data

Tidak ada data khusus.

### Test Steps

1. Buka Home Page dan verifikasi halaman utama.
2. Scroll ke bagian bawah.
3. Verifikasi **Subscription** terlihat.
4. Klik tombol Scroll Up.
5. Verifikasi teks hero **Full-Fledged practice website for Automation Engineers** terlihat.

### Expected Result

Scroll Up button mengembalikan halaman ke bagian atas sehingga hero text terlihat.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Menggunakan `#scrollUp` melalui HomePage object.

---
## TC26 — Verify Scroll Up Without Arrow Button

**Type:** UI / E2E  
**Feature/Module:** Navigation / Scroll  
**Scenario:** Verify Scroll Up Without Arrow Button  
**Priority:** Not specified in automation source  
**Precondition:** Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/ui/navigation.cy.js`  
**Automation Status:** Implemented  

### Test Data

Tidak ada data khusus.

### Test Steps

1. Buka Home Page dan verifikasi halaman utama.
2. Scroll ke bagian bawah.
3. Verifikasi **Subscription** terlihat.
4. Lakukan `scrollTo('top')` tanpa tombol arrow.
5. Verifikasi hero text terlihat.

### Expected Result

Manual scroll ke atas mengembalikan halaman ke area hero.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Tidak menggunakan Scroll Up button.

---

# Detailed API Test Cases

## API01 — Get All Products List

**Type:** API  
**Feature/Module:** Products API  
**Scenario:** Get All Products List  
**Priority:** Not specified in automation source  
**Precondition:** API Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/api/products-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

GET `/api/productsList`.

### Test Steps

1. Kirim request GET ke `/api/productsList`.
2. Parse response body.
3. Verifikasi HTTP status = 200.
4. Verifikasi application `responseCode` = 200.
5. Verifikasi `products` berupa array dan tidak kosong.

### Expected Result

Endpoint mengembalikan HTTP 200, responseCode 200, dan products array non-empty.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Positive API list test.

---
## API02 — POST To All Products List

**Type:** API  
**Feature/Module:** Products API  
**Scenario:** POST To All Products List  
**Priority:** Not specified in automation source  
**Precondition:** API Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/api/products-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

POST `/api/productsList` tanpa payload khusus.

### Test Steps

1. Kirim POST ke `/api/productsList` dengan `failOnStatusCode: false`.
2. Verifikasi application `responseCode` = 405.
3. Verifikasi message = `This request method is not supported.`

### Expected Result

Method POST ditolak pada productsList dengan responseCode 405 dan pesan method not supported.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Source code tidak meng-assert HTTP status untuk API02; hanya application response.

---
## API03 — Get All Brands List

**Type:** API  
**Feature/Module:** Brands API  
**Scenario:** Get All Brands List  
**Priority:** Not specified in automation source  
**Precondition:** API Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/api/brands-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

GET `/api/brandsList`.

### Test Steps

1. Kirim GET ke `/api/brandsList`.
2. Parse response body.
3. Verifikasi HTTP status = 200.
4. Verifikasi application responseCode = 200.
5. Verifikasi `brands` berupa array dan tidak kosong.

### Expected Result

Brands list berhasil dikembalikan sebagai array non-empty dengan status/responseCode 200.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Positive brands API test.

---
## API04 — PUT To All Brands List

**Type:** API  
**Feature/Module:** Brands API  
**Scenario:** PUT To All Brands List  
**Priority:** Not specified in automation source  
**Precondition:** API Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/api/brands-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

PUT `/api/brandsList`.

### Test Steps

1. Kirim PUT ke `/api/brandsList` dengan `failOnStatusCode: false`.
2. Verifikasi responseCode = 405.
3. Verifikasi message = `This request method is not supported.`

### Expected Result

Method PUT ditolak dengan application responseCode 405.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Negative method test.

---
## API05 — POST To Search Product

**Type:** API  
**Feature/Module:** Products API  
**Scenario:** POST To Search Product  
**Priority:** Not specified in automation source  
**Precondition:** API Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/api/products-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

POST `/api/searchProduct`; form body `search_product=top`.

### Test Steps

1. Kirim POST ke `/api/searchProduct` dengan parameter `search_product: top`.
2. Parse body.
3. Verifikasi HTTP status = 200.
4. Verifikasi application responseCode = 200.
5. Verifikasi property `products` ada, bertipe array, dan tidak kosong.

### Expected Result

Search API merespons sukses dan menghasilkan products array non-empty.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Test sengaja tidak memaksa setiap nama produk mengandung substring `top` karena implementasi API dapat mengembalikan hasil yang lebih luas.

---
## API06 — POST To Search Product without search_product parameter

**Type:** API  
**Feature/Module:** Products API  
**Scenario:** POST To Search Product without search_product parameter  
**Priority:** Not specified in automation source  
**Precondition:** API Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/api/products-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

POST `/api/searchProduct`; empty form body.

### Test Steps

1. Kirim POST `/api/searchProduct` tanpa `search_product`.
2. Verifikasi responseCode = 400.
3. Verifikasi message = `Bad request, search_product parameter is missing in POST request.`

### Expected Result

Request ditolak dengan responseCode 400 dan pesan missing parameter.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Negative parameter validation test.

---
## API07 — POST To Verify Login with valid details

**Type:** API  
**Feature/Module:** Users API / Login  
**Scenario:** POST To Verify Login with valid details  
**Priority:** Not specified in automation source  
**Precondition:** User valid dibuat melalui API sebelum verify login.  
**Automation File:** `cypress/e2e/api/users-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis dari `createTestUser()`; POST `/api/verifyLogin` dengan email/password valid.

### Test Steps

1. Generate user baru.
2. Buat account via API.
3. Kirim POST `/api/verifyLogin` dengan email/password user.
4. Verifikasi responseCode = 200.
5. Verifikasi message = `User exists!`.
6. Hapus user via API.

### Expected Result

Credential valid dikenali dan API mengembalikan responseCode 200 serta `User exists!`.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Test mengelola precondition dan cleanup sendiri.

---
## API08 — POST To Verify Login without email parameter

**Type:** API  
**Feature/Module:** Users API / Login  
**Scenario:** POST To Verify Login without email parameter  
**Priority:** Not specified in automation source  
**Precondition:** API Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/api/users-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

POST `/api/verifyLogin` hanya dengan password `Test123456!`.

### Test Steps

1. Kirim POST `/api/verifyLogin` tanpa email.
2. Verifikasi responseCode = 400.
3. Verifikasi message = `Bad request, email or password parameter is missing in POST request.`

### Expected Result

API menolak request karena email hilang dengan responseCode 400.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Negative missing parameter test.

---
## API09 — DELETE To Verify Login

**Type:** API  
**Feature/Module:** Users API / Login  
**Scenario:** DELETE To Verify Login  
**Priority:** Not specified in automation source  
**Precondition:** API Automation Exercise dapat diakses.  
**Automation File:** `cypress/e2e/api/users-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

DELETE `/api/verifyLogin`.

### Test Steps

1. Kirim DELETE `/api/verifyLogin` dengan `failOnStatusCode: false`.
2. Verifikasi responseCode = 405.
3. Verifikasi message = `This request method is not supported.`

### Expected Result

DELETE pada verifyLogin ditolak dengan responseCode 405.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Negative method test.

---
## API10 — POST To Verify Login with invalid details

**Type:** API  
**Feature/Module:** Users API / Login  
**Scenario:** POST To Verify Login with invalid details  
**Priority:** Not specified in automation source  
**Precondition:** Credential invalid tidak mewakili account valid.  
**Automation File:** `cypress/e2e/api/users-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

Email `invalid_user@example.com`; password `WrongPassword123!`.

### Test Steps

1. Kirim POST `/api/verifyLogin` dengan credential invalid.
2. Verifikasi responseCode = 404.
3. Verifikasi message = `User not found!`.

### Expected Result

API menolak credential invalid dengan responseCode 404 dan `User not found!`.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Negative authentication API test.

---
## API11 — POST To Create/Register User Account

**Type:** API  
**Feature/Module:** Users API / Account  
**Scenario:** POST To Create/Register User Account  
**Priority:** Not specified in automation source  
**Precondition:** Email user baru belum terdaftar; generated unique identity digunakan.  
**Automation File:** `cypress/e2e/api/users-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

Full user payload dari `createTestUser()` melalui `buildUserPayload()`.

### Test Steps

1. Generate user baru.
2. Kirim POST `/api/createAccount` dengan full payload.
3. Verifikasi responseCode = 201.
4. Verifikasi message = `User created!`.
5. Hapus user via API sebagai cleanup.

### Expected Result

Account berhasil dibuat dengan responseCode 201 dan pesan `User created!`.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Cleanup dilakukan setelah assertion.

---
## API12 — DELETE METHOD To Delete User Account

**Type:** API  
**Feature/Module:** Users API / Account  
**Scenario:** DELETE METHOD To Delete User Account  
**Priority:** Not specified in automation source  
**Precondition:** Account user dibuat via API sebelum delete.  
**Automation File:** `cypress/e2e/api/users-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis; DELETE `/api/deleteAccount` dengan email/password.

### Test Steps

1. Generate user dan create account via API.
2. Kirim DELETE `/api/deleteAccount` dengan email/password.
3. Verifikasi responseCode = 200.
4. Verifikasi message = `Account deleted!`.

### Expected Result

Account berhasil dihapus dengan responseCode 200.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Tidak ada cleanup tambahan karena test action sendiri menghapus account.

---
## API13 — PUT METHOD To Update User Account

**Type:** API  
**Feature/Module:** Users API / Account  
**Scenario:** PUT METHOD To Update User Account  
**Priority:** Not specified in automation source  
**Precondition:** Account user dibuat via API.  
**Automation File:** `cypress/e2e/api/users-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

User dinamis; update: name suffix `_Updated`, firstName `UpdatedQA`, lastName `Tester`, company `Updated QA Automation`, city `Updated City`; email/password tetap.

### Test Steps

1. Generate user dan buat account via API.
2. Buat object `updatedUser` dengan beberapa field yang diubah.
3. Kirim PUT `/api/updateAccount` dengan full updated payload.
4. Verifikasi responseCode = 200.
5. Verifikasi message = `User updated!`.
6. Hapus account menggunakan email/password yang sama.

### Expected Result

Account berhasil di-update dengan responseCode 200 dan pesan `User updated!`.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Source code tidak melakukan GET ulang untuk memverifikasi field hasil update; assertion hanya response update.

---
## API14 — GET User Account Detail by Email

**Type:** API  
**Feature/Module:** Users API / Account  
**Scenario:** GET User Account Detail by Email  
**Priority:** Not specified in automation source  
**Precondition:** Account user dibuat via API sebelum GET.  
**Automation File:** `cypress/e2e/api/users-api.cy.js`  
**Automation Status:** Implemented  

### Test Data

GET `/api/getUserDetailByEmail?email=<generated email>`.

### Test Steps

1. Generate user dan buat account via API.
2. Kirim GET `/api/getUserDetailByEmail` dengan query email user.
3. Parse response.
4. Verifikasi responseCode = 200.
5. Verifikasi `user` berupa object.
6. Verifikasi email, name, first_name, dan last_name sama dengan data user.
7. Hapus user via API.

### Expected Result

API mengembalikan detail account yang sesuai untuk email tersebut.

### Actual Result

Not re-executed during this documentation pass.

### Status

**Not Run** — documentation generated from the current automation source code.

### Notes

Field yang diverifikasi: email, name, first_name, last_name.

---

# Documentation Notes

1. **Priority** tidak ditentukan di source automation, sehingga tidak diisi dengan asumsi High/Medium/Low.
2. **Actual Result / Status** sengaja tidak diasumsikan sebagai Pass hanya karena test sudah diimplementasikan.
3. Dokumentasi mengikuti **perilaku source code aktual**, termasuk assertion dan cleanup yang benar-benar ada di project.
4. Beberapa test memiliki catatan coverage khusus:
   - **TC19** bernama *View and Cart Brand Products*, tetapi implementasi saat ini hanya memverifikasi navigasi/filter brand Polo dan H&M; tidak ada add-to-cart pada source test tersebut.
   - **API13** memverifikasi response sukses update tetapi tidak melakukan GET ulang untuk membuktikan field benar-benar berubah.
   - **TC24** memverifikasi file invoice ada dan tidak kosong; isi invoice tidak divalidasi lebih lanjut.
5. Jika hasil run terbaru tersedia, field **Actual Result** dan **Status** dapat diperbarui menjadi Pass/Fail sesuai evidence run.
