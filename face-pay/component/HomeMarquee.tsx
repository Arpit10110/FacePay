import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
  const items = [
    "Secure 🔒",
    "Fast ⚡",
    "QR Payments 📱",
    "Face Pay 😎",
    "AI Insights 🤖",
    "Wallet 💳",
    "Cashless 💸",
    "Smart Spending 📊",
    "Privacy First 🛡️",
    "Future Ready 🚀",
  ];

  return (
    <div className="w-full py-4 bg-gray-50 mt-[4rem] ">
      <Marquee speed={40} gradient={false}>
        {items.map((item, index) => (
          <h2
            key={index}
            className="mx-8 text-[1.5rem] font-semibold font-space text-gray-800 whitespace-nowrap"
          >
            {item}
          </h2>
        ))}
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
