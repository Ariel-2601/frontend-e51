import { Table, Spinner } from "react-bootstrap";

const TablaClientes = ({ clientes, cargando }) => {
  if (cargando) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
        <p>Cargando clientes...</p>
      </div>
    );
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr className="text-center">
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Cédula</th>
          <th>Dirección</th>
          <th>Celular</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.id_cliente}>
            <td>{cliente.id_cliente}</td>
            <td>{`${cliente.primer_nombre} ${cliente.segundo_nombre || ""}`}</td>
            <td>{`${cliente.primer_apellido} ${cliente.segundo_apellido || ""}`}</td>
            <td>{cliente.cedula}</td>
            <td>{cliente.direccion}</td>
            <td>{cliente.celular}</td>
            <td className="text-center">Acción</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaClientes;
