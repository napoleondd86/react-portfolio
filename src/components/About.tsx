import Headshot from '../images/headshot.jpg'
const About = () => {
    return (
        <section id="about" className='border-2 border-orange-600 m-2 p-4'>
            <h2>About</h2>
            <img src={Headshot} className='Kurt' alt="Kurt" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quae voluptates hic similique quod eveniet voluptatum deleniti impedit illum? Sed nostrum soluta aspernatur minus ab consequuntur recusandae at excepturi nam!
            </p>
        </section>
    )
}

export default About