import React from "react";
import { useState } from "react";

import Type from "./components/Type";
import Brand from "./components/Brand";
import Modelo from "./components/Modelo";
import Year from "./components/Year";
import Buttons from "./components/Buttons";
import Modal from "./components/Modal";

import "./App.css";

interface IModal {
  display: boolean;
  error: boolean;
}

interface IResult {
  Marca: string;
  Modelo: string;
  AnoModelo: string;
  Combustivel: string;
  MesReferencia: string;
  Valor: string;
}

function App() {
  const [type, setType] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [result, setResult] = useState<IResult>({
    Marca: "",
    Modelo: "",
    AnoModelo: "",
    Combustivel: "",
    MesReferencia: "",
    Valor: "",
  });
  const [modal, setModal] = useState<IModal>({
    display: false,
    error: false,
  });

  return (
    <>
      <div className="header">
        <h4>Tabela FIPE</h4>
      </div>
      <div className="container">
        <div className="content">
          <Type action={{ setType, setBrand, setModel, setYear }} info={type} />
          <Brand
            action={{ setBrand, setModel, setYear }}
            info={{ type, brand }}
          />
          <Modelo
            action={{ setModel, setYear }}
            info={{ type, brand, model }}
          />
          <Year action={setYear} info={{ type, brand, model, year }} />
          <Buttons
            action={{ setResult, setType, setBrand, setModel, setYear }}
            info={{ type, brand, model, year }}
            display={setModal}
          />
        </div>
        <Modal
          action={() => {
            setModal({
              display: !modal,
              error: false,
            });
          }}
          info={result}
          display={modal}
        />
      </div>
    </>
  );
}

export default App;
