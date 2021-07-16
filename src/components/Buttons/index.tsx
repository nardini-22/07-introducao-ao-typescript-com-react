import React, {useState} from 'react';

import axios from 'axios';

import "./style.css"

interface IAction {
  setResult: any;
  setType: any;
  setBrand: any;
  setModel: any;
  setYear: any;
}

interface IInfo {
  type: string;
  brand: string;
  model: string;
  year: string;
}

interface ButtonsProps {
  action: IAction;
  info: IInfo;
  display: any;
}

function Buttons({ action, info, display }: ButtonsProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    if(info.year !== ""){
      setLoading(true);
      const data = await axios
      .get(`https://parallelum.com.br/fipe/api/v1/${info.type}/marcas/${info.brand}/modelos/${info.model}/anos/${info.year}`)
      setLoading(false);
      action.setResult(data.data);
      display({
        error: false,
        display: true
      })
    } else {
      display({
        error: true,
        display: true
      });
    }
  };

  const handleClear = () => {
    action.setType("");
    action.setBrand("");
    action.setModel("");
    action.setYear("");
    action.setResult("");
    console.log(info.type)
  }
  return (
    <>
      <div className="buttonContainer">
        <button
        className="search"
        onClick={() => {
          handleSubmit();
        }}
        >
          SEARCH
        </button>
        <button
        className="clear"
        onClick={() => {
          handleClear()
        }}
        >
          CLEAR
        </button>
      </div>
      <div className={`loader ${loading ? "" : "hidden"}`}></div>
    </>
  );
}

export default Buttons;
