import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import HelloRedux from "./ReduxExamples/HelloRedux";
import CounterRedux from "./ReduxExamples/CounterRedux";
import AddRedux from "./ReduxExamples/AddRedux";

export default function Lab4() {
    function sayHello() { // implement callback function
        alert("Hello");
      }    
    return (
      <div id="wd-lab4">
        <h3>Lab 4</h3>
        <ClickEvent/>
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello} />
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>
        <ReduxExamples/>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        
      </div>
  );
}