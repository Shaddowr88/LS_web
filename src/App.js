
import './App.css';
import InfosComponent from "./components/InfosComponent";
import Nav from "./components/nav";
import Request from "./Request/Request";
import {useEffect, useState} from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import CardAnimation from "./components/CardAnimation";


function App() {

    const [user, setUser] = useState([]);
    const req= new Request(setUser);
    useEffect(()=>{req.FetchData(1);}, [])

    return <div className="App">
        <div style={Styles.container}>
            <CardAnimation/>
        </div>
        <CardAnimation/>
        <Nav  nom={user.nom} prénom={user.prénom} path={user.url}/>
        <InfosComponent/>
        <ToggleSwitch/>
    </div>
  ;
}
const Styles = {
    container: {
        height:'80em',
        marginBottom:'2em',
        backgroundColor:'rgba(246,246,247,1)',
        flexDirection:'column',
        overflow:'hidden',
        boxShadow: '15px 14px 17px 0px rgba(0,0,0,0.26)',
    },

    contante: {
        height:'30%',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center'
    },

    Texte: {
        textDecoration:'none',
    },


    picts: {
        height: '60%',
    },
}

export default App;
