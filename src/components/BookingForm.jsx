import React, { useState } from "react";

const BookingForm = ({ roomName }) => {
  // Ngày hôm nay & ngày mai
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const formatDate = (date) => date.toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: formatDate(today),
    checkOut: formatDate(tomorrow),
    guests: 1,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên.";

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      newErrors.email = "Email không hợp lệ.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại.";
    } else if (!/^[0-9]{9,11}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ (9-11 chữ số).";
    }

    if (!formData.checkIn) newErrors.checkIn = "Chọn ngày nhận phòng.";
    if (!formData.checkOut) newErrors.checkOut = "Chọn ngày trả phòng.";

    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const diffDays = Math.ceil(
        (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
      );

      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = "Ngày trả phòng phải sau ngày nhận phòng.";
      } else if (diffDays > 30) {
        newErrors.checkOut = "Không thể đặt phòng quá 30 đêm.";
      }
    }

    if (formData.guests < 1) {
      newErrors.guests = "Số người phải lớn hơn 0.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      const currentData = {
        ...formData,
        room: roomName,
        createdAt: new Date().toISOString(),
      };

      const existing = JSON.parse(localStorage.getItem("bookingList")) || [];
      const updated = [...existing, currentData];
      localStorage.setItem("bookingList", JSON.stringify(updated));

      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      }, 800); // giả lập delay để UX giống thực tế
    }
  };

  if (submitted) {
    return (
      <div className="p-4 bg-green-100 text-green-700 rounded mt-6">
        ✅ Đặt phòng thành công cho <strong>{formData.name}</strong>!<br />
        SĐT: <strong>{formData.phone}</strong>
        <br />
        Phòng: <strong>{roomName}</strong> từ{" "}
        <strong>{formData.checkIn}</strong> đến{" "}
        <strong>{formData.checkOut}</strong>.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Họ tên</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Số điện thoại</label>
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.phone && (
          <p className="text-red-600 text-sm">{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Ngày nhận phòng</label>
        <input
          name="checkIn"
          type="date"
          value={formData.checkIn}
          onChange={handleChange}
          min={formatDate(today)}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.checkIn && (
          <p className="text-red-600 text-sm">{errors.checkIn}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Ngày trả phòng</label>
        <input
          name="checkOut"
          type="date"
          value={formData.checkOut}
          onChange={handleChange}
          min={formatDate(today)}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.checkOut && (
          <p className="text-red-600 text-sm">{errors.checkOut}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Số người</label>
        <input
          name="guests"
          type="number"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.guests && (
          <p className="text-red-600 text-sm">{errors.guests}</p>
        )}
      </div>

      <div className="flex justify-center">
  <button
    type="submit"
    disabled={isSubmitting}
    className={`bg-blue-600 text-white px-5 py-2 text-sm rounded-md font-medium shadow-sm transition duration-200 ${
      isSubmitting
        ? "opacity-50 cursor-not-allowed"
        : "hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
    }`}
  >
    {isSubmitting ? "Đang xử lý..." : "Xác nhận đặt phòng"}
  </button>
</div>

    </form>
  );
};

export default BookingForm;
