import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập nội dung.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
      const newFeedback = {
        ...formData,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem("feedbacks", JSON.stringify([...feedbacks, newFeedback]));
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Liên hệ với chúng tôi</h2>

      <div className="mb-6 space-y-2 text-sm text-gray-700">
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2 text-orange-500" />
          62 Khúc Thừa Dụ, Dịch Vọng, Cầu Giấy, Hà Nội, Việt Nam
        </p>
        <p className="flex items-center">
          <FaPhoneAlt className="mr-2 text-orange-500" />
          (+84) 0243 223 2223
        </p>
        <p className="flex items-center">
          <FaEnvelope className="mr-2 text-orange-500" />
          datphong@naturehotel.vn
        </p>
      </div>

      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded">
          ✅ Phản hồi của bạn đã được gửi. Cảm ơn bạn đã liên hệ với chúng tôi!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Họ tên</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Nội dung</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Gửi phản hồi
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
