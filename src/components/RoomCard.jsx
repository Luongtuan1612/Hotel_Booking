import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h3 className="text-xl font-semibold mb-1">{room.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{room.description}</p>
      <p className="font-medium text-blue-600 mb-2">${room.price}/đêm</p>
      <Link
        to={`/rooms/${room.id}`}
        className="inline-block text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
      >
        Xem chi tiết
      </Link>
    </div>
  );
};

export default RoomCard;
