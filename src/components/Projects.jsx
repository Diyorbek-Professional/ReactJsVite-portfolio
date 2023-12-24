import Projectitem from "./Projectitem";
import propertyImg from '../assets/65LPJ7SJIFG2LEJVEWXPYLVEJ4.jpg'
import cryptoImg from '../assets/681e434e221440e38dc932ed77ce616b-e1692992604262.webp';
import netflixImg from '../assets/Netflix-gids-Home.webp';
import twitchImg from '../assets/000002238-01u01.png'
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellat corporis minima blanditiis ducimus, quisquam voluptas. Harum totam reiciendis dignissimos cumque ipsum ut eius atque rerum tempore, assumenda molestiae accusantium!
        </p>
        <div className="grid sm:grid-cols-2 gap-12 ">
            <Projectitem img={cryptoImg} title='Crypto App' />
            <Projectitem img={propertyImg} title='Propery App' />
            <Projectitem img={netflixImg} title='Netflix App' />
            <Projectitem img={twitchImg} title='Twitch App' />
        </div>
    </div>
  )
}
export default Projects