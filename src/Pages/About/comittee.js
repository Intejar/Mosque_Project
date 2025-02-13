const MoshjidCommittee = () => {
  const members = [
    { name: "Name", role: "Founder" },
    { name: "Name", role: "Founder" },
    { name: "Name", role: "Founder" },
    { name: "Name", role: "Founder" }, // Added one more for better grid layout
  ];

  return (
    <div className="text-center my-10">
      <h2 className="text-2xl font-bold mb-6">Moshjid Committee</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <div className="w-16 h-16 bg-blue-300 rounded-full"></div>
            <div>
              <p className="font-semibold">{member.name}</p>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoshjidCommittee;
