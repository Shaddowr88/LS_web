import CardAnimation from "../components/CardAnimation";
import Nav from "../components/nav";
import Datas from "../param/data";

const HomeScreen = () => {
    const array1 = [
        { nom: "Alice", age: 21, grostitre:'elcanto1'},
        { nom: "Bob", age: 20, grostitre:'elcanto2', sp:'3', col:'3'},
        { nom: "Charlie", age: 20, grostitre:'elcanto3', sp:'1' }
    ]
    const array2 = Datas;
    const array3 = [];
    const arrayNav = [1, 4, 9, 16];
    //console.log(array3)
    function differentEveryFiveIterations(array1, array2) {
        let count = 0;
        let i1 = 0;
        let index2 = 0;
        let result;
        let lastResult;

        return function() {
            if (count === 1) {
                result = array1[i1];
                i1 = (i1 + 1) % array1.length;
            }
            else {
                result = array2[index2];
                index2 = (index2 + 1) % array2.length;
            }

            if (result === lastResult) {
                result = array2[index2];
                index2 = (index2 + 1) % array2.length;
            }

            count = (count + 1) % 6;
            lastResult = result;
            return result;
        }
    }
    const getNextResult = differentEveryFiveIterations(array1, array2);
    for( let i = 0; i<array2.length + array1.length; i++){
        array3.push(getNextResult())
    }

    return <>
        <Nav items={arrayNav}/>
        <div style={Styles.container}>
            <div className="gTest">
                {array2.map((e,i)=>{ return <CardAnimation key={i} object={e} /> })}
            </div>


        </div>
        <div className="container footer">
            <div>hello</div>
            <div>me</div>
            <div>voila</div>
        </div>
    </>
}
const Styles = {
    container: {
        padding:'4em',
        backgroundColor:'rgba(255,255,255,0.15)',
        flexDirection:'column',
        overflow:'hidden',
        display: 'flex',
        alignContent: 'stretch',
        justifyContent: 'space-evenly',
        flexWrap:'wrap',
        alignItems: 'center'
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
export default HomeScreen

