import { useState, useEffect } from "react";
import "./App.css";
import Box from "./Box";

const App = () => {
  const arr = [];
  for (let i = 0; i < 9; i++) {
    let box1;
    if (i === 4 || i === 5) {
      box1 = { isVisible: false, isClicked: false };
      arr.push(box1);
    } else {
      box1 = { isVisible: true, isClicked: false };
      arr.push(box1);
    }
  }
  const [boxes, setBoxes] = useState(arr);
  const [order, setOrder] = useState([]);

  const unColor = () => {
    const timer = setInterval(() => {
      setOrder((order) => {
        const newOrder = order.slice();
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
        }

        return newOrder;
      });
    }, 300);
  };
  const handleColorClick = (index) => {
    let orderNew = [...order];
    orderNew.push(index);
    setOrder(orderNew);
    let newArr = [...boxes];
    newArr[index].isClicked = true;
    setBoxes(newArr);
    console.log(orderNew);
    if (orderNew.length === 7) {
      unColor();
    }
  };

  return (
    <div className="App">
      <div className="parent__div">
        {boxes.map((b, i) => {
          return (
            <Box
              box={b}
              index={i}
              handleClick={handleColorClick}
              key={i}
              order={order}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
