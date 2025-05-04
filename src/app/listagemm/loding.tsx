export default function Loading() {
    return (
      <div className="pt-[12vh] min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="h-10 w-3/4 mx-auto bg-gray-200 animate-pulse rounded mb-4"></div>
          <div className="h-6 w-2/4 mx-auto bg-gray-200 animate-pulse rounded mb-8"></div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  