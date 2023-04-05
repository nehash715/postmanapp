import React,{Component} from "react";
import {Route,Switch,Redirect,Router} from "react-router-dom"
import AddClass from "./addClass";
import AddFaculty from "./addFAculty";
import AddStudent from "./addStudent";
import Admin from "./Admin";
import BasicExample from "./basicnav";
import CourseFac from "./courseFac";
import facClasses from "./facClass";
import Faculties from "./Faculties";
import Faculty from "./Faculty";
import FacultyCourse from "./facultyCourse";
import Logout from "./Logout";
import Register from "./register";
import StudClasses from "./StudClasses";
import StudCourse from "./StudCourse";
import student from "./student";
import StudentCourse from "./studentCourse";
import StudentDetail from "./StudentDetail";
import StudentLogin  from "./StudentLogin";
import ViewStudents from "./viewStudent";
class StudentMain extends Component{
    render(){
        return <div className="container">
            <BasicExample/>
            <Switch>
            <Route path="/faculty/edit/:courseId" component={AddFaculty}/>
            <Route path="/login" component={StudentLogin}/>
        <Route path="/student" component={student}/>
        <Route path="/viewStudents" component={ViewStudents}/>
        <Route path="/viewFaculties" component={Faculties}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/faculty" component={Faculty}/>
        <Route path="/register" component={Register}/>
        <Route path="/studentCourse" component={StudentCourse}/>
        <Route path="/facultyCourse" component={FacultyCourse}/>
        <Route path="/course/edit/:courseId" component={AddStudent}/>
        <Route path="/studentDetails" component={StudentDetail}/>
        <Route path="/allCourses" component={StudCourse}/>
        <Route path="/allClasses" component={StudClasses}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/facultyCourses" component={CourseFac}/>
        <Route path="/allScheduleClasses" component={facClasses}/>
        <Route path="/scheduleClass" component={AddClass}/>
        </Switch>
        </div>
       
    }
}
export default StudentMain