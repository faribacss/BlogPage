const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full py-10">
      <div className="relative">
        <div className="p-4 bg-linear-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
          <div className="bg-white rounded-full">
            <div className="w-10 h-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
