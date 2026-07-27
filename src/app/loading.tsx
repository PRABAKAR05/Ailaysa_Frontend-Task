export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex w-full">
      {/* Skeleton Sidebar */}
      <div className="hidden md:flex flex-col w-[260px] shrink-0 bg-[#FDF9EE] self-start rounded-br-[30px] p-6 h-screen">
        <div className="h-8 w-32 bg-gray-200 rounded-lg animate-pulse mb-12 mt-4" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="h-10 w-full bg-gray-200/60 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>

      {/* Skeleton Main Content */}
      <div className="flex-1 px-6 sm:px-10 lg:px-14 py-10">
        <div className="flex justify-between items-center mb-8">
          <div className="h-6 w-48 bg-gray-100 rounded animate-pulse" />
          <div className="flex gap-4">
            <div className="h-10 w-24 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-10 w-24 bg-gray-100 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="h-64 w-full bg-gray-100 rounded-2xl animate-pulse mb-12" />

        <div className="h-8 w-48 bg-gray-100 rounded animate-pulse mb-6" />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col space-y-3">
              <div className="w-full aspect-[2/3] bg-gray-100 rounded-lg animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
              <div className="h-3 w-1/2 bg-gray-100 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
