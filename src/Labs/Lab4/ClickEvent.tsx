const hello = () => {
    alert("Hello World!");
  }; // declare a function to handle the event

  const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
  };

  export default function ClickEvent() {
    return (
      <div id="wd-click-event">
        <h2>Click Event</h2>
        <button onClick={hello} id="wd-hello-world-click"> 
          Hello World!</button>
        <button onClick={() => lifeIs("Good!")} // wrap in function if you need to pass parameters
                id="wd-life-is-good-click">
          Life is Good!</button>
        <button onClick={() => { // wrap in {} if you need more than one line of code
                  hello(); // calling hello()
                  lifeIs("Great!"); // calling lifeIs()
                }} id="wd-life-is-great-click">
          Life is Great!
        </button>
        <hr/>
      </div>
  );}
    