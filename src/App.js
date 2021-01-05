import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Counter from "./Counter/Counter";
import TaskTracker from "./TaskTracker/TaskTracker";
import './style.css'


function App() {
  return (
    <>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            JMB TT
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/counter">Counter</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/tasktracker">Tasktracker</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/recordings">Recordings</Nav.Link>
          </Nav>
        </Navbar>

      </Container>

      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/tasktracker">
          <TaskTracker />
        </Route>
        <Route path="/recordings">
          <h1>recordings</h1>

        </Route>
      </Switch>
    </>
  );
}

export default App;
