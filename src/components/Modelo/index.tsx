import axios from "axios";
import React, { useState, useEffect } from "react";

interface IAction {
  setModel: any;
  setYear: any;
}

interface IInfo {
  type: string;
  brand: string;
  model: string;
}

interface IResponse {
  nome: string;
  codigo: string;
}

interface ModeloProps {
  action: IAction;
  info: IInfo;
}

function Modelo({ action, info }: ModeloProps) {
  const [data, setData] = useState<Array<IResponse>>([
    { nome: "", codigo: "" },
  ]);
  useEffect(() => {
    axios
      .get(
        `https://parallelum.com.br/fipe/api/v1/${info.type}/marcas/${info.brand}/modelos`
      )
      .then((response) => setData(response.data.modelos))
      .catch((error) => console.log(error));
  }, [info]);
  return (
    <>
      <select
        value={info.model}
        onChange={(e) => {
          action.setModel(e.target.value);
          action.setYear("");
        }}
      >
        <option key="defaultModel" value="" disabled selected>
          Select a model
        </option>
        {data.map((e) => {
          return (
            <option key={e.codigo} value={e.codigo}>
              {e.nome}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Modelo;
