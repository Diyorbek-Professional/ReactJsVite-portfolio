import Workitem from "./Workitem";

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details: 'Lorem ipsum sit amet consectetur adipisicing elit. Aspernatur omnis dolor numquam, perspiciatis illo eius recusandae eum, expedita placeat asperiores eos, debitis nobis quas a molestias quisquam. Commodi, tempora qui!'
    },
    {
        year: 2017,
        title: 'Google',
        duration: '3 Years',
        details: 'Lorem ipsum sit amet consectetur adipisicing elit. Aspernatur omnis dolor numquam, perspiciatis illo eius recusandae eum, expedita placeat asperiores eos, debitis nobis quas a molestias quisquam. Commodi, tempora qui!'
    },
    {
        year: 2015,
        title: 'Amazon',
        duration: '2 Years',
        details: 'Lorem ipsum sit amet consectetur adipisicing elit. Aspernatur omnis dolor numquam, perspiciatis illo eius recusandae eum, expedita placeat asperiores eos, debitis nobis quas a molestias quisquam. Commodi, tempora qui!'
    },
    {
        year: 2012,
        title: 'Facebook',
        duration: '3 Years',
        details: 'Lorem ipsum sit amet consectetur adipisicing elit. Aspernatur omnis dolor numquam, perspiciatis illo eius recusandae eum, expedita placeat asperiores eos, debitis nobis quas a molestias quisquam. Commodi, tempora qui!'
    }
]
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md-pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {
            data.map((item, idx)=>(
                <Workitem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))
        }
    </div>
  )
}
export default Work