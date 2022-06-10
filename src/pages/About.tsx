import InProgress from '../components/InProgress';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div className="about">
            <Navbar currentPage="about" />
            <InProgress />
        </div>
    );
};

export default About;
