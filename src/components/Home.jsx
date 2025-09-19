// HomePage.jsx
export default function Home() {
  return (
    <div className="h-full bg-gray-50">
     

      <div className="flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Share & Access Study Notes Easily</h2>
        <p className="mt-4 text-gray-600">Upload your class notes or browse notes shared by others.</p>
        <a
          href="/notes"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Browse Notes
        </a>
      </div>
    </div>
  );
}
