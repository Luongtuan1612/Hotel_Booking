import React from "react";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";

const RoomList = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Danh sách phòng</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
