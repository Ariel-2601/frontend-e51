import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tablaclientes from "../components/Clientes/TablaClientes";
import CuadroBusquedas from "../components/busquedas/CuadroBusquedas";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(true);

  const [clientesFiltrados, setClientesFiltrados] = useState([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");

  const obtenerClientes = async () => {
    try {
      const respuesta = await fetch("http://localhost:3000/API/cliente");
      if (!respuesta.ok) {
        throw new Error("Error al obtener los clientes");
      }

      const datos = await respuesta.json();
      setClientes(datos);
      setClientesFiltrados(datos);
      setCargando(false);
    } catch (error) {
      console.log(error.message);
      setCargando(false);
    }
  };

  const manejarCambioBusqueda = (e) => {
    const texto = e.target.value.toLowerCase();
    setTextoBusqueda(texto);

    const filtrados = clientes.filter((cliente) =>
      [
        cliente.primer_nombre,
        cliente.segundo_nombre,
        cliente.primer_apellido,
        cliente.segundo_apellido,
        cliente.direccion,
        cliente.cedula,
        cliente.celular,
      ]
        .filter(Boolean) // Evita errores si algún campo viene null o undefined
        .some((campo) => campo.toLowerCase().includes(texto))
    );

    setClientesFiltrados(filtrados);
  };

  useEffect(() => {
    obtenerClientes();
  }, []);

  return (
    <Container className="mt-4">
      <h4>Clientes</h4>

      <Row className="mb-3">
        <Col lg={5} md={8} sm={8} xs={12}>
          <CuadroBusquedas
            textoBusqueda={textoBusqueda}
            manejarCambioBusqueda={manejarCambioBusqueda}
          />
        </Col>
      </Row>

      <Tablaclientes clientes={clientesFiltrados} cargando={cargando} />
    </Container>
  );
};

export default Clientes;
