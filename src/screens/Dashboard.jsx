import React, { useState } from "react";

// Single-file React + Tailwind UI mockup for a Notes Sharing app (logged-in area)
// How to use: paste this component into a React app with TailwindCSS configured.
// It's a self-contained UI mockup (no backend). Replace sample data with API calls.

export default function Dashboard() {
  const [route, setRoute] = useState("dashboard");
  const [search, setSearch] = useState("");

  const sampleNotes = [
    {
      id: 1,
      title: "DBMS - Unit 3 Notes",
      subject: "DBMS",
      semester: "2",
      uploader: "Nikita Dhar",
      downloads: 124,
      description: "Normalized forms, ER to relational mapping, SQL queries.",
    },
    {
      id: 2,
      title: "Operating Systems - Lecture 5",
      subject: "Operating Systems",
      semester: "2",
      uploader: "Aman",
      downloads: 86,
      description: "Process scheduling, context switch.",
    },
    {
      id: 3,
      title: "Data Structures - Trees",
      subject: "Data Structures",
      semester: "3",
      uploader: "Priya",
      downloads: 200,
      description: "Binary trees, AVL, B-trees overview.",
    },
  ];

  const filtered = sampleNotes.filter((n) =>
    (n.title + n.subject + n.uploader)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <div className="text-indigo-600 font-bold text-xl">NotesShare</div>
              <nav className="hidden md:flex gap-2 text-sm text-slate-600">
                <button onClick={() => setRoute("dashboard")} className={`px-3 py-2 rounded ${route==='dashboard'?'bg-indigo-50 text-indigo-700':''}`}>Dashboard</button>
                <button onClick={() => setRoute("my-notes")} className={`px-3 py-2 rounded ${route==='my-notes'?'bg-indigo-50 text-indigo-700':''}`}>My Notes</button>
                <button onClick={() => setRoute("upload")} className={`px-3 py-2 rounded ${route==='upload'?'bg-indigo-50 text-indigo-700':''}`}>Upload</button>
                <button onClick={() => setRoute("subjects")} className={`px-3 py-2 rounded ${route==='subjects'?'bg-indigo-50 text-indigo-700':''}`}>Subjects</button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search notes, subject, uploader..."
                  className="px-3 py-2 border rounded-md w-64 text-sm"
                />
              </div>
              <div className="flex items-center gap-3">
                <button className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">Upload</button>
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">N</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3 lg:col-span-2">
            <div className="sticky top-6 space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">N</div>
                  <div>
                    <div className="font-medium">Nikita Dhar</div>
                    <div className="text-xs text-slate-500">MCA, Sem 2</div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm text-slate-600">
                  <div>
                    <div className="font-semibold">12</div>
                    <div>Uploads</div>
                  </div>
                  <div>
                    <div className="font-semibold">240</div>
                    <div>Downloads</div>
                  </div>
                  <div>
                    <div className="font-semibold">35</div>
                    <div>Followers</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm font-medium mb-2">Quick Links</div>
                <ul className="space-y-1 text-sm">
                  <li>
                    <button onClick={() => setRoute("dashboard")} className="w-full text-left px-2 py-2 rounded hover:bg-slate-50">Overview</button>
                  </li>
                  <li>
                    <button onClick={() => setRoute("saved")} className="w-full text-left px-2 py-2 rounded hover:bg-slate-50">Saved Notes</button>
                  </li>
                  <li>
                    <button onClick={() => setRoute("requests")} className="w-full text-left px-2 py-2 rounded hover:bg-slate-50">Requests</button>
                  </li>
                  <li>
                    <button onClick={() => setRoute("notifications")} className="w-full text-left px-2 py-2 rounded hover:bg-slate-50">Notifications</button>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm font-medium mb-2">Semester</div>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <button key={i} className="px-2 py-1 text-xs border rounded">{i + 1}</button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <section className="col-span-12 md:col-span-9 lg:col-span-10">
            {route === "dashboard" && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">Welcome back, Nikita 👋</h2>
                      <p className="text-sm text-slate-500">Here's what's happening with your notes</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-slate-600">Sort:</div>
                      <select className="px-2 py-1 border rounded text-sm">
                        <option>Most recent</option>
                        <option>Most downloaded</option>
                        <option>Trending</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg border border-dashed text-center">
                      <div className="text-sm text-slate-500">Uploaded Notes</div>
                      <div className="mt-2 text-2xl font-semibold">12</div>
                    </div>
                    <div className="p-4 rounded-lg border border-dashed text-center">
                      <div className="text-sm text-slate-500">Downloads</div>
                      <div className="mt-2 text-2xl font-semibold">240</div>
                    </div>
                    <div className="p-4 rounded-lg border border-dashed text-center">
                      <div className="text-sm text-slate-500">Saved Notes</div>
                      <div className="mt-2 text-2xl font-semibold">18</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Recent Uploads</h3>
                    <button onClick={() => setRoute("my-notes")} className="text-sm text-indigo-600">View all</button>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filtered.map((note) => (
                      <article key={note.id} className="flex flex-col p-4 rounded-lg border hover:shadow">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-indigo-50 rounded-md flex items-center justify-center font-semibold text-indigo-700">PDF</div>
                          <div className="flex-1">
                            <h4 className="font-medium">{note.title}</h4>
                            <div className="text-xs text-slate-500 mt-1">{note.subject} • Sem {note.semester}</div>
                            <p className="text-sm text-slate-600 mt-2">{note.description}</p>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                          <div>{note.uploader}</div>
                          <div>{note.downloads} downloads</div>
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                          <button className="px-3 py-2 text-sm border rounded">Preview</button>
                          <button className="px-3 py-2 text-sm bg-indigo-600 text-white rounded">Download</button>
                          <button className="ml-auto text-sm text-slate-500">More</button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {route === "my-notes" && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">My Notes</h2>
                  <button onClick={() => setRoute("upload")} className="px-3 py-2 bg-indigo-600 text-white rounded">Upload New</button>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sampleNotes.map((note) => (
                    <div key={note.id} className="p-4 border rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-indigo-50 rounded-md flex items-center justify-center font-semibold text-indigo-700">PDF</div>
                        <div>
                          <div className="font-medium">{note.title}</div>
                          <div className="text-xs text-slate-500">{note.subject} • Sem {note.semester}</div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        <button className="px-2 py-1 text-sm border rounded">Edit</button>
                        <button className="px-2 py-1 text-sm border rounded">Delete</button>
                        <button className="ml-auto px-2 py-1 text-sm bg-indigo-600 text-white rounded">Stats</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {route === "upload" && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">Upload Notes</h2>
                <p className="text-sm text-slate-500">Add a title, choose subject and semester, and upload a PDF.</p>

                <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="Title" className="px-3 py-2 border rounded w-full" />
                    <select className="px-3 py-2 border rounded w-full">
                      <option>Subject</option>
                      <option>DBMS</option>
                      <option>Operating Systems</option>
                      <option>Data Structures</option>
                    </select>
                  </div>

                  <textarea placeholder="Short description" className="w-full px-3 py-2 border rounded h-28" />

                  <div className="border-dashed border-2 border-slate-200 rounded p-6 text-center">
                    <div className="text-sm text-slate-500">Drag & drop PDF here or click to browse</div>
                    <div className="mt-3">
                      <input type="file" accept=".pdf" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded">Upload</button>
                    <button type="button" onClick={() => setRoute("dashboard")} className="px-4 py-2 border rounded">Cancel</button>
                  </div>
                </form>
              </div>
            )}

            {route === "subjects" && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">Subjects</h2>
                <p className="text-sm text-slate-500">Browse notes by subject and semester.</p>

                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {["DBMS", "OS", "Data Structures", "DBMS Lab", "OOPS"].map((s) => (
                    <div key={s} className="p-4 border rounded-lg">
                      <div className="font-medium">{s}</div>
                      <div className="text-xs text-slate-500 mt-1">Popular notes • 24</div>
                      <div className="mt-3">
                        <button className="px-2 py-1 text-sm border rounded">View</button>
                        <button className="ml-2 px-2 py-1 text-sm border rounded">Save</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {route === "saved" && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">Saved Notes</h2>
                <p className="text-sm text-slate-500">Notes you've bookmarked for later.</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sampleNotes.slice(0, 2).map((n) => (
                    <div key={n.id} className="p-4 border rounded-lg flex items-center gap-3">
                      <div className="w-12 h-12 bg-indigo-50 rounded-md flex items-center justify-center">PDF</div>
                      <div>
                        <div className="font-medium">{n.title}</div>
                        <div className="text-xs text-slate-500">{n.subject}</div>
                      </div>
                      <div className="ml-auto text-sm text-slate-500">{n.downloads} DL</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {route === "requests" && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">Requests</h2>
                <p className="text-sm text-slate-500">Students request notes; contributors can fulfill them.</p>

                <div className="mt-4 space-y-3">
                  <div className="p-4 border rounded-lg flex items-center justify-between">
                    <div>
                      <div className="font-medium">Request: DBMS Unit 4</div>
                      <div className="text-xs text-slate-500">Requested by: Aman • 12 upvotes</div>
                    </div>
                    <div>
                      <button className="px-3 py-2 text-sm bg-indigo-600 text-white rounded">Upload for this</button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="px-3 py-2 border rounded">Create new request</button>
                </div>
              </div>
            )}

            {route === "notifications" && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li>Your note "DBMS - Unit 3 Notes" got 5 new downloads today.</li>
                  <li>Priya commented on your note.</li>
                  <li>New notes added in Data Structures.</li>
                </ul>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="bg-white border-t py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500">© {new Date().getFullYear()} NotesShare — Built with ❤️</div>
      </footer>
    </div>
  );
}
