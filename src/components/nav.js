import RoutesList from "../param/RoutesList";
import Collapse from "./ColapseBoxComponent";
const Nav = (props)=> {

    console.log(props)

    return <div>
        <div style={Styles.container}>

            <div style={Styles.contante}>
                <img style={Styles.picts} src={props.path}/>
                {RoutesList.map((e,i)=>{return <a key={i} href={e.path} style={Styles.Texte}>{e.name}</a> })}
            </div>
            <Collapse title='titre'>
                <div style={Styles.contai}>
                    <p>re</p>
                </div>
            </Collapse>
        </div>
    </div>
};

const Styles = {

    contai: {
      height:'100vh'
    },

    container: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding:'1em',
        //border:'solid',
        // borderRadius: '2em',
        minWidth: '20em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'top',
        overflow: 'hidden',
    },

    contante: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '70%',
    },

    Texte: {
        textDecoration: 'none',
    },

    picts: {
        height: '2em',
        width: '2em',
        borderRadius: '50%'
    },
}

export default Nav
