import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return(
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Sales</h1>
                    <p>
                        Convalis interdum porus adipsing de partuding 
                        posure aqua cam elified montes patruent poisure
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    ) 
};

export default Banner;
