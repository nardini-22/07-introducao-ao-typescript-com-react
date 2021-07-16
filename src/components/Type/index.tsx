import React from "react";

import "./style.css"

interface IAction {
  setType: any;
  setBrand: any;
  setModel: any;
  setYear: any;
}

interface TypeProps {
  action: IAction;
  info: string;
}

function Type({ action, info }: TypeProps) {
  return (
    <>
      <select
        value={info}
        onChange={(e) => {
          action.setType(e.target.value);
          action.setBrand("")
          action.setModel("")
          action.setYear("")
        }}
      >
        <option key="defaultType" value="" disabled selected>
          Select a type
        </option>
        <option key="car" value="carros">
          Cars
        </option>
        <option key="motos" value="motos">
          Motorcycles
        </option>
        <option key="trucks" value="caminhoes">
          Trucks
        </option>
      </select>
    </>
  );
}

export default Type;
