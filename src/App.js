import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import pic from "./img/realtorProfilePic.png";
import "./App.css";

function App() {
  return (
    <div className="App">


      <header>
        <div className="d-flex flex-wrap">
          <div
            className=" d-flex justify-content-center align-items-center left-header-box"
            style={{ backgroundColor: "#2b6777" }}
          >
            <div className="header-box mt-5">
              <h1 className="h1">Daniel Bustemante</h1>
              <h5>about me</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
              </p>
              <Button
                className="ps-4 pe-4 pt-2 pb-2 mb-5"
                style={{
                  border: "none",
                  backgroundColor: "#c8d8e4",
                  color: "black",
                  fontSize: "18px",
                }}
              >
                {" "}
                Get In Touch{" "}
              </Button>
            </div>
          </div>

          <div className="realtor-img" style={{ backgroundColor: "#c8d8e4" }}>
            <img
            alt="reltor"
              className=""
              style={{ width: "100%", height: "100%" }}
              src={pic}
            ></img>
          </div>
        </div>
      </header>

      <div style={{ backgroundColor: "#FBFBFB" }}>
        <Container className=" pt-5 pb-5">
          <h1>Let's Work Together</h1>

          <div className="d-flex flex-wrap justify-content-evenly mt-3 mb-5">
            <div className="container-img">
              <div className="overlay"></div>
              <button>I'm Looking To Buy</button>
              <img
              alt="interior house"
                src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                style={{ width: "300px", height: "400px" }}
              ></img>
            </div>

            <div className="container-img">
              <div className="overlay"></div>
              <button>I'm Looking To Sale</button>
              <img
              alt="interior house"
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                style={{ width: "300px", height: "400px" }}
              ></img>
            </div>

            <div className="container-img">
              <div className="overlay"></div>
              <button>Forclosure</button>
              <img
              alt="interior house"
                src="https://images.unsplash.com/photo-1496180727794-817822f65950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                style={{ width: "300px", height: "400px" }}
              ></img>
            </div>
          </div>

          <h4>Choose what suits you the most!</h4>
        </Container>
      </div>

      <Container className="mb-5">
        <div className="d-flex flex-wrap contact shadow  mb-5 mt-5">
          <div className="d-flex  flex-column p-5 left-contact">
            <div className="mb-5">
              <h2>lets get in touch</h2>
            </div>
            <div className="mb-5">
              <ul>
                <li>lorem@gmail.com</li>
                <li>Haine City, FL</li>
                <li>+14072394562</li>
              </ul>
            </div>
            <div>icon icon</div>
          </div>
          <div className="right-contact d-flex justify-content-center align-items-center">
            <Form className="w-75">
              <Form.Group className="mt-3" controlId="Firstname">
                <Form.Control type="text" placeholder="Firstname" />
              </Form.Group>

              <Form.Group className="" controlId="Email">
                <Form.Control type="text" placeholder="Email" />
              </Form.Group>

              <Form.Group className="" controlId="phoneNumber">
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group className="" controlId="Message">
                <Form.Control
                  type="textarea"
                  placeholder="Message"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              <button className="w-100 mt-4 mb-1">Send</button>
            </Form>
          </div>
        </div>
      </Container>

      <footer
        style={{ backgroundColor: "#252525", height: "170px", color: "white"}}
      >
        <Container
          className="d-flex justify-content-md-between align-items-center flex-wrap justify-content-center"
          style={{ height: "100%" }}
        >
          <div>
            <h1 style={{ fontSize: "18px" }}>© 2023 Daniel Bustemante</h1>
            <p>Icon by www.wishforge.games on freeicons.io</p>
            <a
              style={{ color: "white" }}
              href="https://www.instagram.com/yardi_kitchen/"
            >
              <i
                className="fa-brands fa-instagram"
                style={{ fontSize: "30px" }}
              ></i>
            </a>
          </div>

          <div>
            <h1 style={{ fontSize: "18px" }}>
              WEB DESIGN BY LAURISSEAU JOSEPH
            </h1>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;

/*


      <Navbar
        className="me-5 pt-3"
        style={{ position: "absolute", right: "0" }}
        expand="lg"
      >
        <Container>
          <Nav className="d-flex ">
            <Nav.Link href="">icon</Nav.Link>
            <Nav.Link href="">icon</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


*/
