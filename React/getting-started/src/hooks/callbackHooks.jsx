import { useState, useMemo, useCallback } from "react";

const App = () => {
  const [total, setTotal] = useState(1899000000);
  const [count, setCount] = useState(0);
  var data = useMemo(() => calculateSum(total), [total]);
  
  const increment = useCallback(() => {
        setCount((c) => c + 1);
  }, []);
  
  const incrementTotal = () => {
    setCount((c) => c + 1);
    setTotal((c) => c + 1);
  };
    

  return (
    <>
      <div><h1>Data {data} {total}</h1>
        Count: {count} <button onClick={increment}>+</button><br/><br/>
        <button onClick={incrementTotal}>Add Total</button>
        </div>
    </>
  );
};

function calculateSum(total) {
  var sum = 0;
  for(var i = 0; i< total; i++) {

      sum = sum + i
  }
  return sum
};

export default App;