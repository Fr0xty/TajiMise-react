import Navbar from '../components/Navbar';
import TajiMiseDescription from '../components/TajiMiseDescription';

const About = () => {
    return (
        <div className="about">
            <Navbar currentPage="about" />
            <TajiMiseDescription />
        </div>
    );
};

export default About;
