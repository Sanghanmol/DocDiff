# 📄✨ PDF Compare App  

🚀 A modern **PDF Comparison Tool** built with **Django (Backend)** & **React + Vite (Frontend)**.  
Easily upload, compare, and track differences between two PDF files with an intuitive UI and history feature.  

---

## ✅ Features  

- 📤 Upload **two PDF files** for comparison  
- 🔍 Extracts and compares text to highlight differences  
- 📝 Stores comparison history in the database  
- 📊 View previous comparisons and reload them  
- 🎨 Clean React UI with Material UI and React-PDF  

---

## 🛠️ Technologies Used  

| Component         | Technology            | Purpose                                     |
|-------------------|-----------------------|---------------------------------------------|
| 🧠 Backend        | Django + DRF          | API creation, storage, and comparison logic |
| 💾 Database       | SQLite                | Lightweight storage for comparisons         |
| 📄 PDF Processing | PyPDF2 (PyMuPDF)      | Extracts text content from PDFs             |
| 🖼️ Frontend       | React + Vite + MUI    | UI, table, and PDF rendering                |
| 🔗 State Mgmt     | React Hooks           | State handling for file comparison          |

---

## 🏗️ Architecture & Design Choices  

- **Decoupled Frontend & Backend**  
  - `frontend/` – React + Vite app for UI  
  - `backend/` – Django REST Framework for APIs  
- **Static File Integration** – React build served via Django  
- **Reusable APIs** – Upload, Compare, and History endpoints  
- **Simple DB** – SQLite for local storage (can be replaced with Postgres/MySQL)  

---

## 🔍 How It Works – User Journey  

1. 📄 **Upload PDFs** – User selects two PDF files  
2. 🧠 **Text Extraction** – Backend extracts text from both PDFs  
3. 🔍 **Comparison** – Differences are computed and summarized  
4. 🗃️ **History Storage** – Comparison details are saved in DB  
5. 📜 **Results Display** – Side-by-side PDF view with difference summary  

---

## ⚙️ Setup Instructions  

### 🔹 1️⃣ Backend Setup  

1. Go to backend folder
cd backend

2. Create virtual environment
- python -m venv venv
- source venv/bin/activate      # Windows: venv\Scripts\activate

3. Install dependencies
pip install -r requirements.txt

4. Create .env file (inside backend/)
- DJANGO_SECRET_KEY=your_secret_key
- DJANGO_DEBUG=True
- DJANGO_ALLOWED_HOSTS=127.0.0.1,localhost

5. Run migrations
python manage.py migrate

6. Start the backend server
python manage.py runserver

### 🔹 2️⃣ Frontend Setup  

1. Go to frontend folder
cd frontend

2. Install dependencies
npm install

3. Start development server
npm run dev

4. Build for production
npm run build

---

## 🚀 Running the App

1️⃣ Start backend:
   python manage.py runserver

2️⃣ Start frontend (dev mode):
   npm run dev

3️⃣ Access the app:
🌐 http://127.0.0.1:8000

---
  
## 🙏 Acknowledgment

Made with ❤️ using Django + React + Vite + MUI to demonstrate a full-stack PDF comparison workflow.

---
