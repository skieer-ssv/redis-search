import { useState } from "react";

export default function SearchForm(){

    const [hits, seHits]= useState([]);
    const search = async (event)=>{
        const query = event.target.value;
        if(query.length> 2){
            const params =new URLSearchParams({query});
            const res = await fetch('/api/search?'+params,);
            const result =await res.json();
            console.log(result);
            seHits(result['cars']);
        }
    }
return(
    <div>
        <input onChange={search} type="text" />

        <ul>
            {
                hits.map((hit)=>(
                    <li key={hit.entityId}>{hit.make} {hit.model}</li>
                ))
            }
        </ul>
    </div>
);

}