export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="flex w-72 flex-col border-r border-slate-200 bg-white p-5">
          <div className="mb-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h1 className="text-lg font-semibold text-slate-900">Documents</h1>
                <p className="text-sm text-slate-500">Recent files & drafts</p>
              </div>
              <div className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                Beta UI
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mb-5 inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Create a new document"
          >
            <span className="text-base leading-none">+</span>
            New Document
          </button>

          <div className="space-y-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="font-medium text-slate-900">Assignment Draft</p>
              <p className="text-sm text-slate-500">Edited 2 hours ago</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="font-medium text-slate-900">Project Notes</p>
              <p className="text-sm text-slate-500">Edited yesterday</p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <p className="font-medium text-slate-900">Meeting Summary</p>
              <p className="text-sm text-slate-500">Edited 3 days ago</p>
            </div>
          </div>
        </aside>

        {/* Main content area */}
        <section className="flex flex-1 flex-col">
          {/* App Toolbar */}
          <header className="border-b border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-[320px] flex-1">
                <div className="text-sm font-semibold text-slate-900">Editor</div>
                <label className="mt-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Document title
                </label>
                <input
                  type="text"
                  defaultValue="Untitled Document"
                  className="mt-1 w-full truncate rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-300"
                  aria-label="Document title"
                />
                <div className="mt-1 text-xs text-slate-500">Format, insert, and export (UI only)</div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Format */}
                <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2 py-1">
                  <div className="mr-1 hidden h-6 w-px bg-slate-200 sm:block" />
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    aria-label="Bold"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-slate-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 4h7a4 4 0 0 1 0 8H7z" />
                      <path d="M7 12h8a4 4 0 0 1 0 8H7z" />
                    </svg>
                    Bold
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    aria-label="Italic"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-slate-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="19" y1="4" x2="10" y2="4" />
                      <line x1="14" y1="20" x2="5" y2="20" />
                      <line x1="15" y1="4" x2="9" y2="20" />
                    </svg>
                    Italic
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    aria-label="Underline"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-slate-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
                      <line x1="4" y1="20" x2="20" y2="20" />
                    </svg>
                    Underline
                  </button>
                </div>

                {/* Color / Insert / Export */}
                <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2 py-1">
                  <div className="hidden h-6 w-px bg-slate-200 sm:block" />
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    aria-label="Text color"
                  >
                    <span
                      className="inline-block h-4 w-4 rounded-sm border border-slate-300"
                      style={{ backgroundColor: "#111827" }}
                      aria-hidden="true"
                    />
                    Text Color
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    aria-label="Insert table"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-slate-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                      <line x1="8" y1="4" x2="8" y2="20" />
                      <line x1="16" y1="4" x2="16" y2="20" />
                    </svg>
                    Insert Table
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    aria-label="Export PDF"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <path d="M9 15h6" />
                    </svg>
                    Export PDF
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Editor area */}
          <div className="flex-1 p-6">
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
              {/* Document header */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4">
                <div className="text-sm font-semibold text-slate-900">Document</div>

                <div className="flex shrink-0 items-center gap-2">
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    Draft
                  </div>
                  <div className="hidden text-xs text-slate-500 sm:block">
                    Last saved: <span className="font-medium text-slate-700">Not yet</span>
                  </div>
                </div>
              </div>

              {/* Editor canvas */}
              <div className="flex-1 p-5">
                <div className="h-full overflow-auto">
                  <div className="mx-auto w-full max-w-[820px]">
                    <div className="aspect-[8.5/11] min-h-[720px] rounded-lg border border-slate-200 bg-white px-8 py-10 shadow-sm">
                      {/* Placeholder (UI only) */}
                      <div className="max-w-2xl">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-600">
                          <p>This is where you will be able to edit text on the document.</p>
                          <p className="mt-2">Type and format your content here once editing features are enabled.</p>
                          <p className="mt-2">Use the toolbar above for formatting options and actions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between gap-4 border-t border-slate-200 bg-slate-50 px-6 py-3 text-xs text-slate-600">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-md bg-white px-2 py-1 font-semibold text-slate-700">
                    UI only
                  </span>
                  <span>Buttons are labeled to show intent; behavior will be added later.</span>
                </div>
                <div className="hidden sm:block">
                  Tip: <span className="font-medium text-slate-700">Ctrl+B</span> (planned) for Bold
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}