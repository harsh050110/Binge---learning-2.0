const pricingPlans = [
  {
    name: "Mech Plus",
    billing: "Billed Monthly",
    price: "$19",
    period: "/Month",
    features: [
      "Access to All 40+ Courses",
      "Certificate of Completion",
      "Auto-renewal",
      "Technical Support",
    ],
    highlight: false,
    cta: "Get Monthly Access",
  },
  {
    name: "Mech Pro",
    billing: "Billed Annually (Save 50%)",
    price: "$99",
    period: "/Year",
    features: [
      "Access to All 40+ Courses",
      "Certificate of Completion",
      "No Auto-renewal",
      "Include Learning Tools (eBooks & AI)",
      "Technical Support",
    ],
    highlight: false,
    cta: "Get 1-Year Access",
  },
  {
    name: "Mech Premium",
    billing: "Billed One-Time Only",
    price: "$199",
    period: "/Lifetime",
    features: [
      "Lifetime Access to All 40+ Courses",
      "Ebooks & 250+ Short PDFs",
      "Free Future Course Updates",
      "Certificate of Completion",
      "No Recurring Payments",
      "Include Learning Tools (eBooks & AI)",
      "Technical Support",
    ],
    highlight: true,
    badge: "Best Value",
    cta: "Get Lifetime Access",
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-white text-black" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#2a073f]">
            Trusted by 17K+ Students
          </h2>
          <p className="text-xl text-yellow-500 font-bold mb-2">4.5/5 ★ (587 Reviews)</p>
          <p className="text-gray-600 text-lg">
            Industry-standard courses at student-friendly pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 flex flex-col border transition-all duration-300 ${
                plan.highlight 
                  ? "border-[#3b82f6] shadow-xl md:-mt-8 shadow-[#3b82f6]/20 ring-2 ring-[#3b82f6]" 
                  : "border-gray-200 hover:shadow-lg hover:border-gray-300"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3b82f6] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              
              <div className="text-center mb-8">
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-2">{plan.billing}</p>
                <h3 className="text-2xl font-bold text-[#2a073f] mb-4">{plan.name}</h3>
                <div className="flex justify-center items-end gap-1">
                  <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 mb-1">{plan.period}</span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <span className="text-[#3b82f6] mt-1 shrink-0">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-bold text-lg transition ${
                  plan.highlight
                    ? "bg-[#3b82f6] text-white hover:bg-blue-600 shadow-md shadow-blue-500/20"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
