import myPicture from '../assets/my picture.jpg'

const About = () => {
  return (
    <div className='relative top-[60px] text-black bg-white h-screen p-5'>
        <img className='w-[30%] rounded-lg ' src={myPicture} alt="my picture" />
    </div>
  )
}

export default About