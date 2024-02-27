import React, { useState } from "react";
import "./ExpensesCard.css";
import { Button } from "../Ui/Button";
import { Input } from "../Ui/Input";

export function ExpensesCard({ onClick }) {
  const [inputValue, setInputValue] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputDate, setInputDate] = useState(null);
  const [product, setProduct] = useState([]);

  function getInputValue(e) {
    setInputValue(e.target.value);
  }

  function getInputImage(e) {
    setInputImage(e.target.value);
  }

  function getInputDate(e) {
    setInputDate(e.target.value);
  }

  function submitHandle() {
    if (inputValue === "" || inputImage === "" || inputDate === null) {
      alert("Please fill in all fields");
    } else {
      const newProduct = {
        title: inputValue,
        image: inputImage,
        date: inputDate,
      };
      setProduct((prevProducts) => [...prevProducts, newProduct]);
      setInputValue("");
      setInputImage("");
      setInputDate(null);
    }
  }
  return (
    <div>
      <div className="inputContainer">
        <Input
          type="text"
          placeholder="text"
          value={inputValue}
          onChange={getInputValue}
        />
        <Input
          type="date"
          placeholder="Date"
          value={inputDate}
          onChange={getInputDate}
        />
        <Input
          type="text"
          placeholder="Image"
          onChange={(e) => getInputImage(e)}
          value={inputImage}
        />
      </div>
      <div className="ContainerExpensesCArd">
        <Button onClick={onClick}>Отмена</Button>
        <Button onClick={submitHandle}>Далее</Button>
      </div>
      <ul className="ul">
        {product.map((el) => {
          return (
            <div>
              <img
                style={{ width: "350px", height: "450px", borderRadius: "9px" }}
                src={el.image}
              />
              <div className="Licontainer">
                <li>{el.title}</li>
                <li>{el.date}</li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
