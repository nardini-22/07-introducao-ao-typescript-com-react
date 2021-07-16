import React from "react";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Icon = <FontAwesomeIcon className="iconExit" icon={faChevronLeft} />;

interface IInfo {
  Marca: string;
  Modelo: string;
  AnoModelo: string;
  Combustivel: string;
  MesReferencia: string;
  Valor: string;
}

interface IDisplay {
  display: boolean;
  error: boolean;
}

interface ModalProps {
  action: any;
  info: IInfo;
  display: IDisplay;
}

function Modal({ action, info, display }: ModalProps) {
  if (display.display && display.error === false) {
    return (
      <div className="overlay">
        <div className="modalContainer animateBottom">
          <div className="modalHeader">
            <button className="exit" onClick={action}>
              {Icon}
            </button>
          </div>
          <table className="fipe">
            <tr>
              <th>Brand:</th> <td>{info.Marca}</td>
            </tr>
            <tr>
              <th>Model:</th> <td>{info.Modelo}</td>
            </tr>
            <tr>
              <th>Year:</th> <td>{info.AnoModelo}</td>
            </tr>
            <tr>
              <th>Fuel:</th> <td>{info.Combustivel}</td>
            </tr>
            <tr>
              <th>Reference year:</th> <td>{info.MesReferencia}</td>
            </tr>
            <tr>
              <th>Price:</th> <td>{info.Valor}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
  if (display.display && display.error === true) {
    return (
      <div className="overlay">
        <div className="modalContainer error bounce">
          <div className="headerError">
            <button className="exit" onClick={action}>
              {Icon}
            </button>
            <h1>ERROR</h1>
          </div>
          <p>Fill out all the fields!</p>
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;
