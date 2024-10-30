import Hero from "../../components/Hero/Hero";
import wave from '../../assets/wave.svg'

const HomePage = () => {
  return (
    <div className='relative'>
      <Hero/>
      <img src={wave} alt="wave" className="absolute bottom-0 w-full"/>
    </div>
  );
};

export default HomePage;
