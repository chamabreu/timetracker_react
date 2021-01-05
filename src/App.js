import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Counter from "./TimeTracker/Counter";



function App() {
  return (
    <>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            JMB TT
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/timetracker">Timetracker</Nav.Link>
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
        <Route path="/timetracker">
          <Counter />
        </Route>
        <Route path="/tasktracker">
          <h1>tasktracker</h1>
        </Route>
        <Route path="/recordings">
          <h1>recordings</h1>

        </Route>
      </Switch>
    </>
  );
}

export default App;
