// UploadNote.jsx
export default function UploadNote() {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upload a Note</h2>

      <form className="space-y-4">
        <input type="text" placeholder="Title" className="w-full px-4 py-2 border rounded" />
        <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded" />
        <select className="w-full px-4 py-2 border rounded">
          <option>Choose Semester</option>
          <option>1st Semester</option>
          <option>2nd Semester</option>
          <option>3rd Semester</option>
        </select>
        <textarea placeholder="Description" className="w-full px-4 py-2 border rounded h-24" />
        <input type="file" className="w-full" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Upload
        </button>
      </form>
    </div>
  );
}
