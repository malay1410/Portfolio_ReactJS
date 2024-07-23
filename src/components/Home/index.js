import LogoTitle from '../../assets/images/M.png'
import './index.scss';

const Home = () => {
    
    return (
         <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm 
                <img src={LogoTitle} alt="developer" />
                alay Bhatt 
                <br/>
                web developer
                </h1>
                <h2>Fullstack Developer / Frontend Developer / Backend Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
         </div>
    )
}
export default Home