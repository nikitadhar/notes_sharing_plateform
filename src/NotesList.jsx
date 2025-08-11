// NotesList.jsx
export default function NotesList() {
  const notes = [
    {
      title: "Data Structures Notes",
      subject: "DSA",
      semester: "3rd",
      uploadedBy: "Nikita",
    },
    {
      title: "DBMS Basics",
      subject: "DBMS",
      semester: "2nd",
      uploadedBy: "Aman",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Available Notes</h2>

      <div className="grid gap-6">
        {notes.map((note, idx) => (
          <div key={idx} className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <p className="text-gray-600">Subject: {note.subject}</p>
            <p className="text-gray-600">Semester: {note.semester}</p>
            <p className="text-sm text-gray-500">Uploaded by: {note.uploadedBy}</p>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
