const add = (a: number, b: number) => {
    alert(`${a} + ${b} = ${a + b}`); // function expects a and b
  };
  
  export default function PassingDataOnEvent() {
    return (
      <div id="wd-passing-data-on-event">
        <h2>Passing Data on Event</h2>
        <button onClick={() => add(2, 3)} // use this syntax
                // onClick={add(2, 3)} // and not this syntax.
                className="btn btn-primary" // Otherwise you risk
                // creating an infinite loop
                id="wd-pass-data-click"> 
          Pass 2 and 3 to add() 
        </button>
        <hr/>
      </div>
  );}
  