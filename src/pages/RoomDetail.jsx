import { useParams, useNavigate } from "react-router-dom";
import rooms from "../data/rooms";

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = rooms.find((r) => r.id === parseInt(id));

  if (!room) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-500">Không tìm thấy phòng</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Quay về danh sách phòng
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 my-10 flex flex-col md:flex-row gap-6">
      {/* Hình ảnh */}
      <div className="md:w-1/2">
        <img
          src={room.image}
          alt={room.name}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      {/* Thông tin chi tiết */}
      <div className="md:w-1/2 relative">
        {/* Nút đặt phòng */}
        <button
          onClick={() => navigate(`/booking/${room.id}`)}
          className="absolute top-0 right-0 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Đặt phòng
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">{room.name}</h2>

        <p className="text-gray-700 mb-2">{room.description}</p>

        <ul className="text-gray-700 space-y-1 mb-4">
          <li><strong>Giá:</strong> ${room.price} / đêm</li>
          <li><strong>Sức chứa:</strong> {room.capacity} người</li>
          <li><strong>Diện tích:</strong> {room.size} m²</li>
          <li><strong>Loại giường:</strong> {room.bed}</li>
          <li><strong>Vị trí:</strong> {room.location}</li>
        </ul>

        <div>
          <h3 className="font-semibold text-gray-800 mb-1">Tiện nghi:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {room.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
