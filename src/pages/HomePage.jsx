const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Chào mừng đến với Nature Hotel
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Nature Hotel là điểm đến lý tưởng cho những ai đang tìm kiếm sự thư giãn giữa thiên nhiên và tiện nghi hiện đại.
        Tọa lạc tại vị trí đắc địa, chúng tôi cung cấp đa dạng các loại phòng phù hợp với mọi nhu cầu: từ kỳ nghỉ lãng mạn, 
        du lịch gia đình, đến các chuyến công tác chuyên nghiệp.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Với đội ngũ nhân viên thân thiện, dịch vụ đẳng cấp và không gian yên bình, 
        Nature Hotel cam kết mang lại cho bạn trải nghiệm khó quên. Hãy bắt đầu kỳ nghỉ tuyệt vời của bạn ngay hôm nay!
      </p>

      <div className="text-center mt-6">
        <img
          src="https://source.unsplash.com/800x400/?resort,hotel,nature"
          alt="Nature Hotel"
          className="rounded-lg shadow-md mx-auto"
        />
      </div>
    </div>
  );
};

export default HomePage;
