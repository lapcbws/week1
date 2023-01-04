export default function ImaginaryWorld(props){
    return (
    <>
         <img className= "demo-image" src = {props.src} alt ={props.alt}/>
    </>

    )
}

/*for TSL graphics. src = filepath, url = article url */
/*1/3/2023 wht is a href not working????*/
export function TSL(props){
    return (
    <>
        <a href = {props.url}><img className= "demo-image" src = {props.src} alt ={props.alt}/></a>
    </>
    )
}