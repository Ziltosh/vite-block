import {useBlockProps} from "@wordpress/block-editor";
import eFullLogo from "./img/e-full-logo.svg";
import lIn from "./img/social-icons/in.svg";
import instagram from "./img/social-icons/instagram.svg";
import xTwitter from "./img/social-icons/x.svg";
import tiktok from "./img/social-icons/tiktok.svg";
import youtube from "./img/social-icons/youtube.svg";
import {liens} from "./liens";

export default function Save({attributes}) {
    const blockProps = useBlockProps.save();

    return (
        <footer {...blockProps} key={"render"} id="footer">
            <div className="highlight highlight-red"></div>
            <div className="header">
                <div className="section-title">
          <span>
            Réserve ton appel
            <br/> d&apos;audit avec
          </span>

                    <span>un membre de l&apos;équipe</span>
                </div>
                <div className="text-wrapper">
                    <p>
                        Pour ceux prêts à agir, des membres d&apos;Entrepreneurs.com offrent
                        un appel d&apos;audit gratuit pour évaluer votre business et
                        objectifs, et discuter des solutions.
                    </p>
                    {/*<DoubleBut text="Réserver un Appel" disableAnimation={true}/>*/}
                </div>
            </div>
            <div className="footer">
                {/*<BGGRid images={grids}/>*/}
                <div className="upper-section">
                    <div className="logos">
                        <img src={eFullLogo} alt=""/>
                        <div className="social-icons">
                            <a href="" className="s-icon">
                                <img src={lIn} alt="aedIn"/>
                            </a>
                            <a href="" className="s-icon">
                                <img src={instagram} alt="Instagram"/>
                            </a>
                            <a href="" className="s-icon">
                                <img src={youtube} alt="Youtube"/>
                            </a>
                            <a href="" className="s-icon">
                                <img src={tiktok} alt="Tiktok"/>
                            </a>
                            <a href="" className="s-icon">
                                <img src={xTwitter} alt="X(Twitter)"/>
                            </a>
                        </div>
                    </div>
                    <div className="lists">
                        {liens.map((list) => (
                            <ul key={list.title} className="list">
                                <h4>{list.title}</h4>
                                {list.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="copyright">


                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1281"
                        height="2"
                        viewBox="0 0 1281 2"
                        fill="none"
                    >
                        <path
                            d="M0.556152 0.916992H1920.56"
                            stroke="url(#paint0_linear_1801_1581)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_1801_1581"
                                x1="0.556152"
                                y1="0.916992"
                                x2="1920.56"
                                y2="0.916992"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop
                                    offset="0.532909"
                                    stop-color="white"
                                    stop-opacity="0.4"
                                />
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <p>
                        ARIES Consulting FZCO, Dubai Silicon Oasis, DDP Building A2
                        <br/>
                        Dubai, Emirats Arabes Unis
                    </p>
                    <p>Copyright © {new Date().getFullYear()} Entrepreneurs.com</p>
                </div>
            </div>
        </footer>
    );
}