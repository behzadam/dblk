export default function DashboardPage() {
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              {/* Add stats here */}
            </div>
          </div>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Create New Link
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {/* Add list of links here */}
            <li className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="truncate text-sm font-medium text-blue-600">
                  No links yet. Create your first link to get started!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
