export default function Home() {
  return (
    <main className="h-screen bg-gray-100">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-300 bg-white p-4">
          <h2 className="mb-4 text-xl font-semibold">Documents</h2>
          <div className="rounded border border-dashed border-gray-300 p-3 text-sm text-gray-500">
            Sidebar placeholder
          </div>
        </aside>

        {/* Main content area */}
        <section className="flex flex-1 flex-col">
          {/* Toolbar */}
          <header className="border-b border-gray-300 bg-white p-4">
            <h1 className="text-lg font-semibold">Toolbar</h1>
          </header>

          {/* Editor area */}
          <div className="flex-1 p-6">
            <div className="h-full rounded border border-gray-300 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Editor Area</h2>
              <p className="text-gray-600">
                This will be the editor area.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}