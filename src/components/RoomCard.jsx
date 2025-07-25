// src/components/RoomCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
        <p className="text-gray-500 text-sm">{room.description}</p>
        <p className="text-blue-600 font-semibold">${room.price}/đêm</p>
        <Link
          to={`/rooms/${room.id}`}
          className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
