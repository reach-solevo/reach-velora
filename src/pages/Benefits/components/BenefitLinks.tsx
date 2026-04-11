import { Link } from "react-router-dom";

export const benefitPoints = [
  "Better speed to market with sustainable development",
  "Stronger collaboration across teams and partners",
  "Reduced dependency on physical samples",
  "Improved clarity in communication and approvals",
  "Enhanced design exploration and creativity",
  "Faster concept-to-prototype progression",
  
];

const BenefitLinks = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Benefits of using <span className="text-peach-400">REACH Velora</span>
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Best In Class 3D Software for Footwear Design
        </p>


      <div className="space-y-6 max-w-5xl mx-auto">
         {benefitPoints.map((point, index) => (
      <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
         >
      <div className="flex items-center gap-4">
        <p className="text-gray-800 font-semibold text-lg md:text-xl">
          {point}
        </p>
      </div>

          <Link
             to={`/benefits/detail/${index + 1}`}
             className="text-primary font-medium hover:underline whitespace-nowrap">
                Read more →
          </Link>
         </div>
        ))}
      </div>
      
      </div>
    </section>
  );
};

export default BenefitLinks;
