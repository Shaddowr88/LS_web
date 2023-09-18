 const BlockComponant = (props) => {
    return (
    <div>
        <div style={Styles.container}>
            <img style={Styles.picts} src={props.path}/>
            <div style={Styles.contante}>
                <a style={Styles.Texte}>{props.nom}</a>
                <a style={Styles.Texte}>{props.prénom}</a>
            </div>
        </div>
    </div>
    );
};

const Styles = {
    container: {
        backgroundColor:'rgba(246,246,247,1)',
        //border:'solid',
        height:'30em',
        borderRadius:'2em',
        minWidth:'20em',
        display:'flex',
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
export default BlockComponant
