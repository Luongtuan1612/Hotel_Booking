import React from "react";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";

const RoomList = () => {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-4">
      {/* Giới thiệu đầu trang */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-2">
          Khám phá các loại phòng của chúng tôi
        </h2>
        <p className="text-gray-700 text-lg">
          Chúng tôi cung cấp nhiều loại phòng phù hợp với mọi nhu cầu – từ phòng đơn giá rẻ đến phòng suite hạng sang.  
          Tất cả các phòng đều được trang bị đầy đủ tiện nghi và được vệ sinh kỹ lưỡng mỗi ngày.
        </p>
      </div>

      {/* Danh sách phòng */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
