import Header from "./Header";
import Footer from "./Footer";
import oceanBg from "../asstes/images/ocean.jpg";

const Layout = ({ children }) => {
  return (
    <div
      className="relative flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${oceanBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔲 Overlay đen mờ phủ background */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Header (luôn ở trên overlay) */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* Nội dung chính có lớp nền mờ trắng */}
      <div className="relative z-10 flex flex-col flex-grow min-h-screen bg-white bg-opacity-80">
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
