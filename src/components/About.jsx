import "../style/about.css"

function About(props)
{
    return (
        <>
            <div className="about-card">
                {props.children}
            </div>
        </>
    )
}

export default About;