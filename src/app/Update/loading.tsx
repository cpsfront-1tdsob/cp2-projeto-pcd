export default function Loading() {
    return (
      <div className="pt-[12vh] min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="h-10 w-3/4 mx-auto bg-gray-200 animate-pulse rounded mb-4"></div>
          <div className="h-6 w-2/4 mx-auto bg-gray-200 animate-pulse rounded mb-8"></div>
  
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <div className="h-8 bg-gray-200 animate-pulse rounded w-1/3 mb-6"></div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index}>
                  <div className="h-5 bg-gray-200 animate-pulse rounded w-1/3 mb-2"></div>
                  <div className="h-12 bg-gray-200 animate-pulse rounded w-full"></div>
                </div>
              ))}
  
              <div className="col-span-1 md:col-span-2">
                <div className="h-8 bg-gray-200 animate-pulse rounded w-1/3 mb-6 mt-4"></div>
              </div>
  
              {[...Array(4)].map((_, index) => (
                <div key={`address-${index}`}>
                  <div className="h-5 bg-gray-200 animate-pulse rounded w-1/3 mb-2"></div>
                  <div className="h-12 bg-gray-200 animate-pulse rounded w-full"></div>
                </div>
              ))}
  
              <div className="col-span-1 md:col-span-2 mt-6">
                <div className="h-12 bg-gray-200 animate-pulse rounded w-1/4 ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  