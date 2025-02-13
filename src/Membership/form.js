import { useState } from "react";

export default function RegistrationForm() {
  const [selectedPayment, setSelectedPayment] = useState("Bkash");
  const [selectedMember, setSelectedMember] = useState("Normal");
  const paymentMethods = [
    { name: "Bkash", logo: "🔴" },
    { name: "Rocket", logo: "🟣" },
    { name: "Nogod", logo: "🟠" },
    { name: "Visa", logo: "🔵" },
    { name: "Bank", logo: "🏦" },
  ];

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-center text-xl font-bold">Registration Form</h2>
      <div className="flex justify-center gap-4 my-4">
        <button
          className={`px-4 py-2 rounded ${
            selectedMember === "Normal"
              ? "bg-orange-400 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setSelectedMember("Normal")}
        >
          Normal Member
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedMember === "Premium"
              ? "bg-orange-400 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setSelectedMember("Premium")}
        >
          Premium Member
        </button>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        {paymentMethods.map((method) => (
          <button
            key={method.name}
            onClick={() => setSelectedPayment(method.name)}
            className={`px-4 py-2 rounded flex items-center gap-2 ${
              selectedPayment === method.name
                ? "bg-orange-400 text-white"
                : "bg-gray-300"
            }`}
          >
            <span>{method.logo}</span> {method.name}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold">{selectedPayment}</h3>
        <p className="text-gray-600">Details</p>
        <form className="mt-4 space-y-3">
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full border p-2 rounded"
            type="email"
            placeholder="Email address"
          />
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="w-full border p-2 rounded"
            type="number"
            placeholder="Amount"
          />
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Transaction Id"
          />
          <button className="w-full bg-orange-400 text-white py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
