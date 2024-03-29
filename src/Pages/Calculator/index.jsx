import Layout from "@/Components/Layout";
import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.name;
    setResult(result.concat(value));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const toggleSign = () => {
    setResult((prevResult) => {
      const num = parseFloat(prevResult);
      if (isNaN(num)) {
        return prevResult;
      }
      return String(num * -1);
    });
  };

  const buttonStyle = "bg-gray-500 text-white text-lg p-4 rounded-xl";
  const buttonTopStyle =
    "bg-light-shade-gray text-black font-bold text-2xl rounded-xl h-16";
  const buttonLeftStyle = "bg-dark-orange font-extrabold rounded-xl text-white";
  return (
    <>
      <Layout>
        <div className="relative mb-12 flex items-center justify-center">
          <h1 className="text-xl font-medium text-black sm:text-2xl md:text-3xl">
            Calculator
          </h1>
        </div>
        <form className="flex w-full justify-center p-5">
          <input
            type="text"
            value={result}
            readOnly
            className="w-1/2 rounded-lg bg-black/40 p-2 text-right text-4xl font-bold text-white md:w-5/12 lg:w-3/12"
          />
        </form>

        <div className="grid grid-cols-4 gap-2 rounded-xl border bg-black p-6 shadow-md shadow-gray-400 lg:w-3/12">
          <button
            name="clear"
            onClick={clear}
            className={(buttonStyle, buttonTopStyle)}
          >
            AC
          </button>
          <button
            name="toggleSign"
            onClick={toggleSign}
            className={(buttonStyle, buttonTopStyle)}
          >
            +/-
          </button>
          <button
            name="%"
            onClick={handleClick}
            className={(buttonStyle, buttonTopStyle)}
          >
            %
          </button>
          <button
            name="/"
            onClick={handleClick}
            className={(buttonStyle, buttonLeftStyle)}
          >
            /
          </button>
          <button name="7" onClick={handleClick} className={buttonStyle}>
            7
          </button>
          <button name="8" onClick={handleClick} className={buttonStyle}>
            8
          </button>
          <button name="9" onClick={handleClick} className={buttonStyle}>
            9
          </button>
          <button
            name="*"
            onClick={handleClick}
            className={(buttonStyle, buttonLeftStyle)}
          >
            ×
          </button>
          <button name="4" onClick={handleClick} className={buttonStyle}>
            4
          </button>
          <button name="5" onClick={handleClick} className={buttonStyle}>
            5
          </button>
          <button name="6" onClick={handleClick} className={buttonStyle}>
            6
          </button>
          <button
            name="-"
            onClick={handleClick}
            className={(buttonStyle, buttonLeftStyle)}
          >
            -
          </button>
          <button name="1" onClick={handleClick} className={buttonStyle}>
            1
          </button>
          <button name="2" onClick={handleClick} className={buttonStyle}>
            2
          </button>
          <button name="3" onClick={handleClick} className={buttonStyle}>
            3
          </button>
          <button
            name="+"
            onClick={handleClick}
            className={(buttonStyle, buttonLeftStyle)}
          >
            +
          </button>
          <button name="0" onClick={handleClick} className={buttonStyle}>
            0
          </button>
          <button name="." onClick={handleClick} className={buttonStyle}>
            .
          </button>

          <button
            id="result"
            onClick={calculate}
            className={`${buttonStyle} col-span-2 bg-dark-orange font-extrabold`}
          >
            =
          </button>
        </div>
      </Layout>
    </>
  );
}

export default Calculator;
