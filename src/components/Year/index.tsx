import React, {useEffect, useState } from 'react';

import axios from 'axios';

interface IInfo {

}

interface IInfo {
  type: string;
  brand: string;
  model: string;
  year: string;
}

interface IResponse {
  nome: string;
  codigo: string;
}

interface YearProps {
  action: any;
  info: IInfo;
}

function Year({ action, info }: YearProps) {
  const [data, setData] = useState<Array<IResponse>>([{nome: "", codigo: ""}])
  useEffect(() => {
    axios
    .get(`https://parallelum.com.br/fipe/api/v1/${info.type}/marcas/${info.brand}/modelos/${info.model}/anos`)
    .then((response) => setData(response.data))
    .catch((error) => console.log(error))
  }, [info])
  return (
    <>
      <select value={info.year}
      onChange={(e) => 
      action(e.target.value)
      }
      >
        <option key="defaultYear" value="" disabled selected>
          Select a year
        </option>
        {data.map((e) => {
          return(
            <option key={e.codigo} value={e.codigo}>
              {e.nome}
            </option>
          )
        })}
      </select>
    </>
  );
}

export default Year;
