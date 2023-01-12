export function Project (props){
    return (
    <>
         <a href={props.url} target = "_blank" ><img className="demo-image" src={props.src} alt={props.alt}/></a>
    </>

    )
}

const imaginary_world = [{src: "/foolbox.png",
alt: "official narrrative particles forced into Point children"},
{ src:"/thoughtvoice.png",
alt:"protagonist meets blue ghost in an imaginary space"},
{src: "/withyou.png", alt: "asynchronous contact of protagonist and their older self"},
{ src: "/storysharing.png",
alt:"protagonist venting story-objects to their older self"}];

const tsl_graphics = [{ src:"/dread.png",
alt:"existential dread looming over young person in a panic"},
{src:"/shame.png",
alt:"shame is a time bomb that grows coiling in your mind"},
{src:"/shade.png",
alt:"Illustration to article about heatwave. Light-green blob is melting in a background fizzling into red and yellow. It has a thought bubble on top of it depicting a forest.",
url:"https://tsl.news/opinion-the-5cs-need-to-be-more-shady/"},
{src:"/hybrid-learning.png",
alt:"illustration to article about hybrid learning. ",
url:"https://tsl.news/opinion-the-5cs-should-make-their-courses-hybrid-flexible-this-semester/"}
]