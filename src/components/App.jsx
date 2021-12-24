import React from "react";
import Heading from "./Heading";

import List from "./List";



function App(){
  const heading1 = "Mobile Operating System"
  const heading2 = "Mobile Manufacturers"
  const list1 = ["Andriod","HTC","iPhone","Windows Phone"];
  const list2 = ["Samsung","HTC","Micromax","Apple"]
    return (
        <div>
          <Heading h={heading1} />
          {
            list1.map((e)=>{
              return <List item={e} />

            })
          }
          <Heading h={heading2} />
          {
            list2.map((e)=>{
              return <List item={e} />

            })
          }
          
          
        </div>
    );
    
}

export default App;