import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
const name="rk university from rajkot"
const array=[
  {name:`arjun`,spi:9.0,age:19},
  {name:`masiyay`,spi:10.0,age:19},
  {name:`nenis`,spi:9.5,age:19}
];

const fromartedstudents= array.map((s)=>{
  return <div>
    <h1>{s.name}</h1>
    <h2>{s.spi}</h2>
    <h3>{s.age}</h3>
    </div>
});

root.render(
<div>
<h1>hello</h1>
<h2>learing react by darshan university to {name}</h2>
<h1>{fromartedstudents}</h1>
</div>
);

