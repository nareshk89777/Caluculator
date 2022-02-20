import React, { useDebugValue } from 'react';

export default function Sample() {
    let string = "";
    const pattern = ()=>{
        for(var i=1; i<=5;i++){
            for(var j=1; j<=i;j++){
                string += j;  
            }
            string += "\n";
        }
        console.log(string);
    }
  return <div>
      <button onClick={pattern}>Pattern</button>
  </div>;
}
