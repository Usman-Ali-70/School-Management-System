const { adminRegister, adminLogIn, getAdminDetail } = require('../../controllers/admin-controller.js');
const { sclassCreate, sclassList, deleteSclass, deleteSclasses, getSclassDetail, getSclassStudents } = require('../../controllers/class-controller.js');
const { noticeCreate, noticeList, deleteNotices, deleteNotice, updateNotice } = require('../../controllers/notice-controller.js');
const { 
  studentRegister, studentLogIn, getStudents, getStudentDetail, deleteStudents, deleteStudent, 
  updateStudent, studentAttendance, deleteStudentsByClass, updateExamResult, clearAllStudentsAttendanceBySubject,
  clearAllStudentsAttendance, removeStudentAttendanceBySubject, removeStudentAttendance 
} = require('../../controllers/student_controller.js');
const { 
  subjectCreate, classSubjects, deleteSubjectsByClass, getSubjectDetail, deleteSubject, 
  freeSubjectList, allSubjects, deleteSubjects, gradeSubmission, assignment, createAssignment 
} = require('../../controllers/subject-controller.js');
const { 
  teacherRegister, teacherLogIn, getTeachers, getTeacherDetail, deleteTeachers, deleteTeachersByClass,
  deleteTeacher, updateTeacherSubject, teacherAttendance 
} = require('../../controllers/teacher-controller.js');

module.exports = async (req, res) => {
  const { method, url } = req;

  // Admin Routes
  if (url.startsWith('/api/AdminReg') && method === 'POST') return adminRegister(req, res);
  if (url.startsWith('/api/AdminLogin') && method === 'POST') return adminLogIn(req, res);
  if (url.startsWith('/api/Admin') && method === 'GET') return getAdminDetail(req, res);

  // Student Routes
  if (url.startsWith('/api/StudentReg') && method === 'POST') return studentRegister(req, res);
  if (url.startsWith('/api/StudentLogin') && method === 'POST') return studentLogIn(req, res);
  if (url.startsWith('/api/Students') && method === 'GET') return getStudents(req, res);
  if (url.startsWith('/api/Student') && method === 'GET') return getStudentDetail(req, res);
  if (url.startsWith('/api/Students') && method === 'DELETE') return deleteStudents(req, res);
  if (url.startsWith('/api/StudentsClass') && method === 'DELETE') return deleteStudentsByClass(req, res);
  if (url.startsWith('/api/Student') && method === 'DELETE') return deleteStudent(req, res);
  if (url.startsWith('/api/Student') && method === 'PUT') return updateStudent(req, res);
  if (url.startsWith('/api/UpdateExamResult') && method === 'PUT') return updateExamResult(req, res);
  if (url.startsWith('/api/StudentAttendance') && method === 'PUT') return studentAttendance(req, res);
  if (url.startsWith('/api/RemoveAllStudentsSubAtten') && method === 'PUT') return clearAllStudentsAttendanceBySubject(req, res);
  if (url.startsWith('/api/RemoveAllStudentsAtten') && method === 'PUT') return clearAllStudentsAttendance(req, res);
  if (url.startsWith('/api/RemoveStudentSubAtten') && method === 'PUT') return removeStudentAttendanceBySubject(req, res);
  if (url.startsWith('/api/RemoveStudentAtten') && method === 'PUT') return removeStudentAttendance(req, res);

  // Teacher Routes
  if (url.startsWith('/api/TeacherReg') && method === 'POST') return teacherRegister(req, res);
  if (url.startsWith('/api/TeacherLogin') && method === 'POST') return teacherLogIn(req, res);
  if (url.startsWith('/api/Teachers') && method === 'GET') return getTeachers(req, res);
  if (url.startsWith('/api/Teacher') && method === 'GET') return getTeacherDetail(req, res);
  if (url.startsWith('/api/Teachers') && method === 'DELETE') return deleteTeachers(req, res);
  if (url.startsWith('/api/TeachersClass') && method === 'DELETE') return deleteTeachersByClass(req, res);
  if (url.startsWith('/api/Teacher') && method === 'DELETE') return deleteTeacher(req, res);
  if (url.startsWith('/api/TeacherSubject') && method === 'PUT') return updateTeacherSubject(req, res);
  if (url.startsWith('/api/TeacherAttendance') && method === 'POST') return teacherAttendance(req, res);

  // Notice Routes
  if (url.startsWith('/api/NoticeCreate') && method === 'POST') return noticeCreate(req, res);
  if (url.startsWith('/api/NoticeList') && method === 'GET') return noticeList(req, res);
  if (url.startsWith('/api/Notices') && method === 'DELETE') return deleteNotices(req, res);
  if (url.startsWith('/api/Notice') && method === 'DELETE') return deleteNotice(req, res);
  if (url.startsWith('/api/Notice') && method === 'PUT') return updateNotice(req, res);

  // Sclass Routes
  if (url.startsWith('/api/SclassCreate') && method === 'POST') return sclassCreate(req, res);
  if (url.startsWith('/api/SclassList') && method === 'GET') return sclassList(req, res);
  if (url.startsWith('/api/Sclass') && method === 'GET') return getSclassDetail(req, res);
  if (url.startsWith('/api/Sclass/Students') && method === 'GET') return getSclassStudents(req, res);
  if (url.startsWith('/api/Sclasses') && method === 'DELETE') return deleteSclasses(req, res);
  if (url.startsWith('/api/Sclass') && method === 'DELETE') return deleteSclass(req, res);

  // Subject Routes
  if (url.startsWith('/api/SubjectCreate') && method === 'POST') return subjectCreate(req, res);
  if (url.startsWith('/api/AllSubjects') && method === 'GET') return allSubjects(req, res);
  if (url.startsWith('/api/ClassSubjects') && method === 'GET') return classSubjects(req, res);
  if (url.startsWith('/api/FreeSubjectList') && method === 'GET') return freeSubjectList(req, res);
  if (url.startsWith('/api/Subject') && method === 'GET') return getSubjectDetail(req, res);
  if (url.startsWith('/api/Subject') && method === 'DELETE') return deleteSubject(req, res);
  if (url.startsWith('/api/Subjects') && method === 'DELETE') return deleteSubjects(req, res);
  if (url.startsWith('/api/SubjectsClass') && method === 'DELETE') return deleteSubjectsByClass(req, res);

  // Return 404 for unknown routes
  res.status(404).send('Not Found');
};
