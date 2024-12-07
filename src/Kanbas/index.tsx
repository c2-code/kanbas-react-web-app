import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";

import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

import "./styles.css";

export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [courses, setCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  // Fetch courses the user is enrolled in
  const findCoursesForUser = async () => {
    try {
      const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(enrolledCourses);
    } catch (error) {
      console.error("Error fetching user courses:", error);
    }
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  }; 

  // Fetch all courses and mark enrollment status
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);

      const updatedCourses = allCourses.map((course: any) => ({
        ...course,
        enrolled: enrolledCourses.some((c: any) => c._id === course._id),
      }));
      setCourses(updatedCourses);
    } catch (error) {
      console.error("Error fetching all courses:", error);
    }
  };

  // Update state based on enrollment status
  useEffect(() => {
    if (currentUser) {
      enrolling ? fetchCourses() : findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  // Update a course
  const updateCourse = async () => {
    try {
      await courseClient.updateCourse(course);
      setCourses(
        courses.map((c) => (c._id === course._id ? course : c))
      );
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  // Add a new course
  const addNewCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Error adding new course:", error);
    }
  };

  // Delete a course
  const deleteCourse = async (courseId: string) => {
    try {
      await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
