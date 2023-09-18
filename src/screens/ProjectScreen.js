import Ground from "../components/GroundComponent";
import Collapse from "../components/ColapseBoxComponent";
import {useParams} from "react-router-dom";
import Datas from "../param/data";

const Project=()=>{
    { /* Réccupere le parametre de l'URL  */ }
    let {ProjectId}=useParams();
    { /* trouver toutes les données liée au parametre*/ }
    const project = Datas.find(el => el.id == ProjectId);
    return <>
        <div style={Styles.container}>
            <Ground project={project}/>
        </div>
        <div style={Styles.contai}>
            { /* Collapse description elements.  */ }
            { project.details.map( (e =>{return <Collapse title={e.title}>
                <div style={Styles.contai}>
                    <p>{e.detail}</p>
                </div>
            </Collapse> }))}
        </div>
    </>
}
const Styles = {
    container: {
        padding:'1em',
        flexDirection:'column',
        overflow:'hidden',
        display: 'flex',
        alignContent: 'stretch',
        justifyContent: 'space-evenly',
        flexWrap:'wrap',
        alignItems: 'center'
    },

    contai: {
        padding:'1em',
    },

    contanteMulti: {
        display: 'grid',
        flexWrap: 'wrap',
        justifyContent:' space-between',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gridAutoRows:'min-max(80px, auto)',
        gridAutoFlow: 'dense',
        gap: '2px',
        //margin: '-5px'

    },

    Texte: {
        textDecoration:'none',
    },

    picts: {
        height: '100%',
        width: '100%',
    },
}
export default Project
