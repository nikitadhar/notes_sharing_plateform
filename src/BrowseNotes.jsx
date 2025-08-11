// BrowseNotes.jsx
export default function BrowseNotes() {
  const notes = [
    {
      title: "Data Structures Notes",
      subject: "DSA",
      semester: "3rd",
      uploadedBy: "Nikita",
      fileUrl: "#"
    },
    {
      title: "DBMS Basics",
      subject: "DBMS",
      semester: "2nd",
      uploadedBy: "Aman",
      fileUrl: "#"
    },
    {
      title: "Operating System Concepts",
      subject: "OS",
      semester: "4th",
      uploadedBy: "Ravi",
      fileUrl: "#"
    },
     {
      title: "Computer Network",
      subject: "Computer Network",
      semester: "4th",
      uploadedBy: "Shriya",
      fileUrl: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 h-full">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Browse Notes</h2>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full md:w-1/2 px-4 py-2 border rounded focus:outline-blue-400"
        />
        <select className="px-4 py-2 border rounded focus:outline-blue-400">
          <option>All Subjects</option>
          <option>DSA</option>
          <option>DBMS</option>
          <option>OS</option>
        </select>
        <select className="px-4 py-2 border rounded focus:outline-blue-400">
          <option>All Semesters</option>
          <option>1st Semester</option>
          <option>2nd Semester</option>
          <option>3rd Semester</option>
          <option>4th Semester</option>
        </select>
      </div>

      {/* Notes Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note, idx) => (
          <div key={idx} className="p-4 bg-white shadow rounded hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">{note.title}</h3>
            <p className="text-gray-600">Subject: {note.subject}</p>
            <p className="text-gray-600">Semester: {note.semester}</p>
            <p className="text-sm text-gray-500">Uploaded by: {note.uploadedBy}</p>
            <a
              href={note.fileUrl}
              className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              download
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
