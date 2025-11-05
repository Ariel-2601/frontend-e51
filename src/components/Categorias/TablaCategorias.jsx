import { Table, Spinner, Button } from "react-bootstrap";

const TablaCategoria = ({ categorias, cargando }) => {

  if (cargando) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
        <p>Cargando categorías...</p>
      </div>
    );
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr className="text-center">
          <th>ID</th>
          <th>Nombre Categoría</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria) => (
          <tr key={categoria.id_categoria}>
            <td>{categoria.id_categoria}</td>
            <td>{categoria.nombre_categoria}</td>
            <td>{categoria.descripcion_categoria}</td>
            <td className="text-center">
              <Button variant="warning" size="sm" className="me-2">Editar</Button>
              <Button variant="danger" size="sm">Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaCategoria;