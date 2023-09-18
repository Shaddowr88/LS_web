
const CardAnimation = (props) => {

    let ob= props.object

    console.log(ob)

    return <div className="contai" style={{ gridRowEnd: `span ${ob.sp}`, gridColumnEnd: `span ${ob.col}` }} >
        {props.grosTitre? "" : <img src={ob.chemin} />}
        {ob.grostitre? <p>{ob.grostitre}</p>:
            <a href={"/project/"+ob.id} className="FontAnim" >
                <div className="content" >
                    {/* <DynamicTracingElement nom={ob.nom} description={ob.description}/>*/}
                   <h1>{ob.nom}</h1>
                <p>{ob.description.slice(0, 150)+" ..."}</p>
                </div>
            </a>
          }
    </div>
}
const Styles = {



}
export default CardAnimation;
