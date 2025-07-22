import deluxe from "../asstes/images/deluxe.jpg";
import don from "../asstes/images/don.jpg";
import giadinh from "../asstes/images/giadinh.jpg";
import hangx from "../asstes/images/hangsang.jpg";
import tieuchuan from "../asstes/images/tieuchuan.jpg";
import gacmai from "../asstes/images/gacmai.jpg";

const rooms = [
  {
    id: 1,
    name: "Phòng Deluxe",
    price: 100,
    capacity: 2,
    size: 30,
    bed: "1 giường đôi",
    location: "Tầng 5, View biển",
    description: "Phòng rộng rãi, có view biển tuyệt đẹp.",
    amenities: ["Wi-Fi", "TV màn hình phẳng", "Điều hòa", "Mini bar"],
    image: deluxe,
  },
  {
    id: 2,
    name: "Phòng Gia đình",
    price: 150,
    capacity: 4,
    size: 45,
    bed: "2 giường đôi",
    location: "Tầng 3, gần khu vực hồ bơi",
    description: "Phòng lý tưởng cho gia đình, có 2 giường đôi và không gian sinh hoạt rộng rãi.",
    amenities: ["Wi-Fi", "TV", "Điều hòa", "Bồn tắm", "Bàn làm việc"],
    image: giadinh,
  },
  {
    id: 3,
    name: "Phòng Tiêu chuẩn",
    price: 80,
    capacity: 2,
    size: 20,
    bed: "1 giường đôi nhỏ",
    location: "Tầng 2, hướng vườn",
    description: "Phòng nhỏ gọn, tiện nghi cơ bản, phù hợp nghỉ ngắn ngày.",
    amenities: ["Wi-Fi", "TV", "Điều hòa"],
    image: tieuchuan,
  },
  {
    id: 4,
    name: "Phòng Suite Hạng Sang",
    price: 220,
    capacity: 2,
    size: 60,
    bed: "1 giường King",
    location: "Tầng cao nhất, view toàn cảnh thành phố",
    description: "Phòng suite cao cấp, sang trọng, có phòng khách riêng biệt.",
    amenities: ["Wi-Fi", "TV 50 inch", "Máy pha cà phê", "Bồn tắm jacuzzi", "Ban công riêng"],
    image: hangx,
  },
  {
    id: 5,
    name: "Phòng Đơn Giá Rẻ",
    price: 60,
    capacity: 1,
    size: 18,
    bed: "1 giường đơn",
    location: "Tầng trệt, gần sảnh",
    description: "Phòng tiết kiệm, phù hợp cho khách đi công tác hoặc cá nhân.",
    amenities: ["Wi-Fi", "TV", "Quạt máy", "Tủ lạnh mini"],
    image: don,
  },
  {
    id: 6,
    name: "Phòng Gác Mái Ấm Cúng",
    price: 90,
    capacity: 2,
    size: 25,
    bed: "1 giường đôi",
    location: "Gác mái, trần dốc, phong cách vintage",
    description: "Phòng độc đáo với trần nghiêng, thiết kế ấm cúng và lãng mạn.",
    amenities: ["Wi-Fi", "Điều hòa", "Loa bluetooth", "Đèn ngủ dịu nhẹ"],
    image: gacmai,
  }
];

export default rooms;
