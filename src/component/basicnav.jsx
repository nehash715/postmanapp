import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import auth from "./AllService"
function BasicExample() {
   
    const user=auth.getUser()
    //console.log(user)
  return (
    <Navbar bg="success" variant="light">
      <Container>
        <Navbar.Brand href="/">{user && user.role} Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {!user && ( <Nav.Link href="/login">LogIn</Nav.Link>)}
          {user && user.role==="admin" && ( <Nav.Link href="/register">Register</Nav.Link>)}
          {user && user.role==="admin"&&( <NavDropdown title="Assign" id="basic-nav-dropdown">
              <NavDropdown.Item href="/studentCourse">Student to Course</NavDropdown.Item>
              <NavDropdown.Item href="/facultyCourse">
                Faculty to Course
              </NavDropdown.Item>
              
  </NavDropdown>)}
             {user  && user.role==="admin"&&( <NavDropdown title="View" id="basic-nav-dropdown">
              <NavDropdown.Item href="/viewStudents">Students</NavDropdown.Item>
              <NavDropdown.Item href="/viewFaculties">
                Faculty
              </NavDropdown.Item>
              
</NavDropdown>)}
{user && user.role==="student" && ( <Nav.Link href="/studentDetails">Student Details</Nav.Link>)}
{user && user.role==="student" && ( <Nav.Link href="/allClasses">All Classes</Nav.Link>)}
{user && user.role==="student" && ( <Nav.Link href="/allCourses">All Courses</Nav.Link>)}
{user && user.role==="faculty" && ( <Nav.Link href="/facultyCourses">Courses</Nav.Link>)}

{user  && user.role==="faculty"&&( <NavDropdown title="Classes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/scheduleClass">Schedule Class</NavDropdown.Item>
              <NavDropdown.Item href="/allScheduleClasses">
                All Schedule Classes
              </NavDropdown.Item>
              
</NavDropdown>)}
{/*user  && user.role==="customer"&&( <NavDropdown title="Details" id="basic-nav-dropdown">
              <NavDropdown.Item href="/customers">Customers</NavDropdown.Item>
              <NavDropdown.Item href="/nominee">
                Nominee
              </NavDropdown.Item>
              
</NavDropdown>)*/}
{/*user  &&  user.role==="customer" && ( <NavDropdown title="Transaction" id="basic-nav-dropdown">
              <NavDropdown.Item href="/addpayee">Add Payee</NavDropdown.Item>
              <NavDropdown.Item href="/depositcheque">
                Cheque
              </NavDropdown.Item>
              <NavDropdown.Item href="/netbanking">
              Net Banking
              </NavDropdown.Item>
              
</NavDropdown>)*/}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{user && <Navbar.Brand href="/">Welcome {user.name}</Navbar.Brand>}
             {user &&  (<Nav.Link href="/logout">LogOut</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample