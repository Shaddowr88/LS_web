
import {useEffect, useState} from "react";

import BlockComponant from "./BlockComponant";
import Request from "../Request/Request";


export default  function InfosComponent() {

    const [user, setUser] = useState([]);
    const req= new Request(setUser);
    useEffect(()=>{req.FetchAllDatas();}, [])


  /*  const  FetchInfo = async ()=>{
        await axios.get('http://127.0.0.1:8001/api/info').then(({data})=>{
            setUser(data);
        })
    }*/

    return <div className="container">
        {user.map((u)=> <BlockComponant key={u.id} nom={u.nom} prénom={u.prénom} path={u.url}/>)}
        
    </div>
        ;
}

