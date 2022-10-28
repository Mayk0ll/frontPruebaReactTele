import React, { useState } from "react";
import { DashBoard } from "../dashBoard/DashBoard";
import { Ingreso } from "../ingreso/Ingreso";

export const Home = () => {
  const [autenticado, setAutenticado] = useState({ estado: "", info: {} });

  return (
    <div>
      {autenticado.estado ? (
        <DashBoard autenticado={autenticado} cambiarEstado={setAutenticado} />
      ) : (
        <Ingreso autenticado={autenticado} cambiarEstado={setAutenticado} />
      )}
    </div>
  );
};
