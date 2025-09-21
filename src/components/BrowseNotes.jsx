// BrowseNotes.jsx
import { useCallback, useEffect, useState } from "react";
import { baseUrl, get, post } from "../services/api-services";
import debounce from 'lodash/debounce';

export default function BrowseNotes() {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedSemesters, setSelectedSemesters] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [allSemesters,setAllSemesters]=useState([]);
  const [allSubjects,setAllSubjects]=useState([]);
  const [notes, setNotes] = useState([]);
  //   [
  //   {
  //     title: "Data Structures Notes",
  //     subject: "DSA",
  //     semester: "3rd",
  //     className: "BCA 2nd Year",
  //     uploadedBy: "Nikita",
  //     fileUrl: "#"
  //   },
  //   {
  //     title: "DBMS Basics",
  //     subject: "DBMS",
  //     semester: "2nd",
  //     className: "MCA 1st Year",
  //     uploadedBy: "Aman",
  //     fileUrl: "#"
  //   },
  //   {
  //     title: "Operating System Concepts",
  //     subject: "OS",
  //     semester: "4th",
  //     className: "B.Tech CSE 2nd Year",
  //     uploadedBy: "Ravi",
  //     fileUrl: "#"
  //   }
  // ]
  const [uploadData, setUploadData] = useState({});
  const [searchText, setSearchText] = useState("");
  const [filter,setFilter]=useState({"course":"","semester":"","subject":""});
  // Temporary form state
  const [form, setForm] = useState({
    title: "",
    courseId: "",
    semesterId: "",
    subjectId: "",
    file: null,
  });
  const handleChangeSemester = async (id) => {
    setForm({ ...form, ["semesterId"]: id });
    const res = await get(`semesters/${id}/subject`);
    console.log("subjects res", res)
    if (res?.statusCode === 200) {
      setSelectedSubjects(res?.data)
    }
    // const { name, value, files } = e.target;
    // setForm({ ...form, [name]: files ? files[0] : value });
  };
  const handleChangeCourse = async (e) => {
    const id = e.target.value;
    setForm({ ...form, ["courseId"]: id });
    const res = await get(`courses/${id}/semester`);
    console.log("subjects res", res)
    if (res?.statusCode === 200) {
      setSelectedSemesters(res?.data)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just append new note to list
    const newNote = {
      title: form.title,
      subjectId: form.subjectId,
      semesterId: form.semesterId,
      courseId: form.courseId,
      uploadedBy: "You",
      fileUrl: "#"
    };
    setNotes([...notes, newNote]);
    setForm({ title: "", courseId: "", semesterId: "", subjectId: "", file: null });
  };
  const uploadNotes = async (e) => {
    const file = e.target.files[0];
    console.log("file,,", file)
    let formData = new FormData();
    formData.append('file', file);
    const imgRes = await post(`containers/container/upload`, formData)
    if (imgRes?.statusCode === 200) {
      console.log("imgRes?.data?.result?.files?.file[0]", imgRes?.data?.result?.files?.file[0])
      let note = imgRes?.data?.result?.files?.file[0].name;
      let url = imgRes?.data?.result?.files?.file[0].name;
      const uploadDataTemp = {
        "title": form.title,
        "fileName": note,
        "subjectId": form.subjectId
      }
      setUploadData(uploadDataTemp);

    }
  }
const getAllNotes = async (searchText,filter) => {
  // Build the base filter
  // let filter = {
  //   include: [
  //     {
  //       relation: "subject",
  //       scope: {
  //         where: {
  //           name: { like: searchText, options: "i" }, // Case-insensitive search
  //         },
  //         include: [
  //           {
  //             relation: "semester",
  //             scope: {
  //               where: {
  //                 name: { like: searchText, options: "i" },
  //               },
  //               include: [
  //                 {
  //                   relation: "course",
  //                   scope: {
  //                     where: {
  //                       name: { like: searchText, options: "i" },
  //                     },
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // };

  // Make API request
  // const allNotes = await get(
  //   `notes?filter=${encodeURIComponent(JSON.stringify(filter))}`
  // );
    const allNotes = await post(`notes/getAllNotes`,{"text":searchText,"filter":filter});

  console.log("allNotes.....", allNotes);

  if (allNotes?.statusCode === 200) {
    setNotes(allNotes?.data);
  }
};


  const xfatchFilterNotes = useCallback(debounce(getAllNotes, 300), []);

  const submitNotes = async () => {
    const noteUploadedRes = await post(`notes`, uploadData);
    console.log("noteUploadedRes...", noteUploadedRes)
    xfatchFilterNotes(searchText,filter);
  }
  const getAllCourses = async (e) => {
    const res = await get("courses");
    console.log("rs......", res)
    if (res?.statusCode === 200) {
      setAllCourses(res?.data)
    }
  };
   const getAllSemester = async (e) => {
    const res = await get("semesters");
    console.log("rs......", res)
    if (res?.statusCode === 200) {
      setAllSemesters(res?.data)
    }
  };
     const getAllSubjects = async (e) => {
    const res = await get("subjects");
    console.log("rs subjex......", res)
    if (res?.statusCode === 200) {
      setAllSubjects(res?.data)
    }
  };
  useEffect(() => {
    getAllCourses();
    getAllSemester();
    getAllSubjects();
  }, [])
  useEffect(() => {
    xfatchFilterNotes(searchText,filter);
  }, [searchText,filter])
  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Browse & Upload Notes</h2>

      {/* Upload Form */}
      <div className="bg-white shadow rounded p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Upload a Note</h3>
        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, ["title"]: e.target.value })}
            className="w-full px-4 py-2 border rounded focus:outline-blue-400"
          />
          <select
            name="courses"
            value={form.courseId}
            onChange={handleChangeCourse}
            className="w-full px-4 py-2 border rounded focus:outline-blue-400"
          >
            <option value="">Select Course</option>
            {allCourses.map((course, index) => (
              <option key={index} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>

          {console.log("searchText....", searchText)}
          <select
            name="semester"
            value={form.semesterId}
            onChange={(e) => handleChangeSemester(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-blue-400"
          >
            <option value="">Select Semester</option>
            {selectedSemesters?.map((semester, index) => (
              <option key={index} value={semester.id}>
                {semester.name}
              </option>
            ))}
          </select>

          <select
            name="className"
            value={form.subjectId}
            onChange={(e) => setForm({ ...form, ["subjectId"]: e.target.value })}
            className="w-full px-4 py-2 border rounded focus:outline-blue-400"
          >
            <option value="">Select Subject</option>
            {selectedSubjects?.map((sub, index) => (
              <option key={index} value={sub.id}>
                {sub.name}
              </option>
            ))}
          </select>

          <input
            type="file"
            name="file"
            onChange={uploadNotes}
            className="w-full"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 md:col-span-2"
            onClick={submitNotes}
          >
            Upload Note
          </button>
        </form>
      </div>
      {console.log("setSearchText", searchText)}
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full md:w-1/2 px-4 py-2 border rounded focus:outline-blue-400"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select 
        onChange={(e) => setFilter({ ...filter, subject: e.target.value })}
        className="px-4 py-2 border rounded focus:outline-blue-400">
          <option>All Subjects</option>
          {allSubjects?.map((sub, index) => (
              <option key={index} value={sub.id}>
                {sub.name}
              </option>
            ))}
        </select>
        <select
        onChange={(e) => setFilter({ ...filter, semester: e.target.value })}
        className="px-4 py-2 border rounded focus:outline-blue-400">
          <option>All Semesters</option>
          {allSemesters?.map((sem, index) => (
              <option key={index} value={sem.id}>
                {sem.name}
              </option>
            ))}
        </select>
        <select
        onChange={(e) => setFilter({ ...filter, course: e.target.value })}
        className="px-4 py-2 border rounded focus:outline-blue-400">
          <option>All Courses</option>
          {allCourses.map((course, index) => (
              <option key={index} value={course.id}>
                {course.name}
              </option>
            ))}
        </select>
      </div>  

      {/* Notes Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note, idx) => (
          <div key={idx} className="p-4 bg-white shadow rounded hover:shadow-lg transition-shadow">
          {console.log("titke",note.title)}
            <h3 className="text-xl font-semibold text-gray-800">{note.title}</h3>
            <p className="text-gray-600">Subject: {note?.subject?.name}</p>
            <p className="text-gray-600">Semester: {note?.subject?.semester?.name}</p>
            <p className="text-gray-600">Course: {note?.subject?.semester?.course?.name}</p>
            {/* <p className="text-sm text-gray-500">Uploaded by: {note.uploadedBy}</p> */}
            <a
              href={`${baseUrl}containers/container/download/${note?.fileName}`}
              className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
              download={note?.fileName || true}
            >
              Download
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}
