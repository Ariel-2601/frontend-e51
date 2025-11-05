import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState(""); 
  const navigate = useNavigate();

  const manejarEnvio = async (e) => {
    e.preventDefault();


    if (usuario === "admin" && password === "1234") {
      setMensaje("Inicio de sesión exitoso ✅");
      setTipoMensaje("success");


      localStorage.setItem("usuario", usuario);

      
      setTimeout(() => {
        navigate("/categorias");
      }, 1000);
    } else {
      setMensaje("Usuario o contraseña incorrectos ❌");
      setTipoMensaje("danger");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center vh-100 bg-light"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={10} sm={8} md={6} lg={4}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4 text-primary fw-bold">
                Iniciar Sesión
              </h3>

              {mensaje && <Alert variant={tipoMensaje}>{mensaje}</Alert>}

              <Form onSubmit={manejarEnvio}>
                <Form.Group controlId="formUsuario" className="mb-3">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Ingresar
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-3">
                <a href="#" className="text-decoration-none">
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
