export default function PassingFunctions(
    { theFunction }: { theFunction: () => void }) { /*wrap funciton inside a closure to */
     return (
       <div>
         <h2>Passing Functions</h2>
         <button onClick={theFunction}
                 className="btn btn-primary">
           Invoke the Function
         </button>
         <hr/>
       </div>
     );}
   