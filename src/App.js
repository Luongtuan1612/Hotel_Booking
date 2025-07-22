// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RoomList from "./pages/RoomList";
import RoomDetail from "./pages/RoomDetail";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<RoomList />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          {/* Sau này có thể thêm các trang như /contact, /booking */}
          <Route path="/booking/:id" element={<BookingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
