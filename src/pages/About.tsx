import '../styles/About.scss';
import Navbar from '../components/Navbar';
import InProgress from '../components/InProgress';

const About = () => {
    return (
        <div className="about">
            <Navbar currentPage="about" />
            <InProgress />
        </div>
    );
};

export default About;
