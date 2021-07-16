import React, { useState, useEffect } from "react";

import axios from "axios";

interface IAction {
  setBrand: any;
  setModel: any;
  setYear: any;
}

interface IInfo {
  type: string;
  brand: string;
}

interface IResponse {
  nome: string;
  codigo: string;
}

interface BrandProps {
  action: IAction;
  info: IInfo;
}

function Brand({ action, info }: BrandProps) {
  const [data, setData] = useState<Array<IResponse>>([
    { nome: "", codigo: "" },
  ]);
  useEffect(() => {
    axios
      .get(`https://parallelum.com.br/fipe/api/v1/${info.type}/marcas`)
      .then((response) => setData(Object.values(response.data)))
      .catch((error) => console.log(error));
  }, [info]);

  return (
    <>
      <select
        value={info.brand}
        onChange={(e) => {
          action.setBrand(e.target.value);
          action.setModel("");
          action.setYear("");
        }}
      >
        <option key="defaultBrand" value="" disabled selected>
          Select a brand
        </option>
        {data.map((e) => {
          return (
            <option key={e.codigo} value={e.codigo}>
              {e.nome}
            </option>
          )
        })}
      </select>
    </>
  );
}

export default Brand;
