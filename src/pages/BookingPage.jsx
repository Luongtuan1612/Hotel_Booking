// src/pages/BookingPage.jsx
import { useParams } from "react-router-dom";
import rooms from "../data/rooms";
import BookingForm from "../components/BookingForm";

const BookingPage = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === parseInt(id));

  if (!room) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-500">Không tìm thấy phòng</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Đặt phòng: {room.name}</h2>

      <BookingForm roomName={room.name} />
    </div>
  );
};

export default BookingPage;
