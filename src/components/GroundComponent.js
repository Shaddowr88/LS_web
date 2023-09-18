import Carousel from "./Caroussel.tsx";
import {useState} from "react";



const Ground=(props)=>{
    const [stylesh, setStylesh]= useState( '100%' )

    const el = props.project;
    const array1 = el.stacks;

    return <div>
        <h1> {el.nom} </h1>
        <hr/>
        <div className="groundCore ">
            <div className="ground2">
                <Carousel/>
            </div>
            <div className="groundintra">
                <div className="ground">


                    <div style={{width: stylesh}}>
                        <h2>Logo</h2>
                        <div className="ground">
                            <h2> autre </h2>
                        </div>
                    </div>
                    {el.stacks ?  <div className="groundintra" style={{width: stylesh}}>
                        {el.stacks.map(e => <p key={e * 2}>{e}</p> )}
                    </div>
                        :
                        <div></div>
                    }
                </div>
                <div className="ground2">
                    <div>
                        <p> {el.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Ground
