import React from 'react';

type tstProps={
 name:string;
 age:number;
 cpf?:number;
}
//cpf é opcional

function tst({name,age,cpf}:tstProps) {
    return (
        <div>
           <h2>{name} {age}</h2> 
        </div>
    );
}

export default tst;