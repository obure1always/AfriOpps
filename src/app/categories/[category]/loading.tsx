export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="h-12 w-64 mx-auto bg-gray-200 rounded-lg animate-pulse" />
          <div className="mt-4 h-6 w-96 mx-auto bg-gray-200 rounded-lg animate-pulse" />
        </div>

        <div className="mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse" />
            </div>
            <div className="h-5 w-40 bg-gray-200 rounded-md animate-pulse" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 animate-pulse"
              >
                <div className="h-6 w-3/4 bg-gray-200 rounded-md" />
                <div className="mt-2 h-4 w-1/2 bg-gray-200 rounded-md" />
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded-md" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded-md" />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="h-4 w-1/3 bg-gray-200 rounded-md" />
                  <div className="h-8 w-24 bg-gray-200 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 