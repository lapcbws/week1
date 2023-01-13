export function Project (props: any){
    return (
    <>
         <a href={props.url} target = "_blank" ><img className="demo-image" src={props.src} alt={props.alt}/></a>
    </>

    )
}
