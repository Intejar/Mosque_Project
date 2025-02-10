const IslamicOccasions = () => {
  const occasions = [
    {
      date: "27th Jan 2025",
      title: "Shab-e-Miraj",
      description:
        "This event is on January 27, 2025, which is the 27th day of Rajab in the Islamic calendar. It commemorates the Prophet Muhammad's spiritual journey to God.",
    },
    {
      date: "27th Jan 2025",
      title: "Shab-e-Miraj",
      description:
        "This event is on January 27, 2025, which is the 27th day of Rajab in the Islamic calendar. It commemorates the Prophet Muhammad's spiritual journey to God.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 ">
      <h2 className="text-3xl font-bold mb-6">Islamic Occasions</h2>
      <div className="w-full max-w-3xl p-4 bg-orange-200 rounded-xl">
        {occasions.map((event, index) => (
          <div
            key={index}
            className="bg-blue-200 p-4 rounded-lg mb-4 last:mb-0 flex flex-col sm:flex-row items-start sm:items-center"
          >
            <div className="font-bold text-lg text-gray-800 sm:w-1/4">
              {event.date}
            </div>
            <div className="border-l-2 border-gray-600 pl-4 sm:w-3/4">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IslamicOccasions;
