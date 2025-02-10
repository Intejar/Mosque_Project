// Gallery.js
const Vlog = () => {
  return (
    <div className="text-center my-10">
      <h2 className="text-2xl font-bold mb-6">Our Vlog</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div className="h-24 bg-gray-300 rounded"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
        <div className="h-24 bg-gray-300 rounded col-span-2 md:col-span-2"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
        <div className="h-24 bg-gray-300 rounded col-span-2"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
        <div className="h-24 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default Vlog;
