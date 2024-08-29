function Loading() {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4 py-6 bg-gray-100">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          <p className="text-center mt-4 text-xl md:text-2xl font-semibold text-blue-600">Carregando...</p>
        </div>
      </div>
    );
  }
  
  export default Loading;
  