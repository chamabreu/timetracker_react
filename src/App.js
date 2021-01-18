import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Counter from "./Counter/Counter";
import TaskTracker from "./TaskTracker/TaskTracker";
import './style.css'
import Recordings from "./Recordings/Recordings";
import GraphQLTest from "./GraphQL/GraphQLTest";


function App() {
  return (
    <>
      <Container>
        <Navbar bg="light" expand="lg" className="justify-content-center">
          <Navbar.Brand>
            <Nav>
              <Nav.Link href="/">
                <h4>Time Tracker</h4>
            </Nav.Link>
            </Nav>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/counter">Counter</Nav.Link>
            <Nav.Link href="/tasktracker">Tasktracker</Nav.Link>
            <Nav.Link href="/recordings">Recordings</Nav.Link>
            <Nav.Link href="/graphql">GraphQL</Nav.Link>
          </Nav>
        </Navbar>
      </Container>


      <Switch>
        <Route exact path="/counter">
          <Counter />
        </Route>
        <Route exact path="/tasktracker">
          <TaskTracker />
        </Route>
        <Route exact path="/recordings">
          <Recordings />
        </Route>
        <Route exact path="/graphql">
          <GraphQLTest />
        </Route>
        <Route path="/">
          <Container className="mt-3">
            <Row className="justify-content-center">
              <h2>Welcome to my TimeTracker Project.</h2>
            </Row>
            <Row className="justify-content-center">
              <p>Choose a site from the Navbar</p>
            </Row>
          </Container>
        </Route>
      </Switch>
    </>
  );
}

export default App;
