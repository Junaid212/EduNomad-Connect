import { publicUrlFor } from "../../globals/constants";
import { NavLink } from "react-router-dom";

function InnerPageBanner({_data}) {
    return (
        <>
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `linear-gradient(
      90deg,
      rgba(255, 174, 131, 0.4) 0%,
      rgba(188, 149, 43, 0.72) 100%
    ),url(${publicUrlFor("images/banner/banners.jpg")})
    ` }}>
                <div className="overlay-main site-bg-white opacity-01" />  
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">{_data.title}</h2>
                            </div>
                        </div>
                        {/* BREADCRUMB ROW */}
                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><NavLink to="/index3">Home</NavLink></li>
                                <li>{_data.crumb}</li>
                            </ul>
                        </div>
                        {/* BREADCRUMB ROW END */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InnerPageBanner;