import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import TablaCategoria from "../components/Categorias/TablaCategorias"

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // 🔹 Simulamos una carga de datos (puedes cambiar esto por tu API real)
    setTimeout(() => {
      const datosEjemplo = [
        { id_categoria: 1, nombre_categoria: "Ficción", descripcion_categoria: "Libros imaginativos" },
        { id_categoria: 2, nombre_categoria: "Ciencia", descripcion_categoria: "Divulgación científica" },
        { id_categoria: 3, nombre_categoria: "Historia", descripcion_categoria: "Acontecimientos históricos" },
      ];
      setCategorias(datosEjemplo);
      setCargando(false);
    }, 1000);
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Gestión de Categorías</h2>
      <Button variant="primary" className="mb-3">Agregar Categoría</Button>

      {/* Aquí mostramos la tabla */}
      <TablaCategoria categorias={categorias} cargando={cargando} />
    </Container>
  );
};

export default Categorias;

