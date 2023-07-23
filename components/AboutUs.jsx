import arrow_icon from "../img/icons/arrow_icon.svg"
import aboutus_img from "../img/fruits.png"
import mailbox_icon from "../img/icons/mailbox_icon.svg"
import vegan_icon from "../img/icons/vegan_icon.svg"

export default function AbootUs() {
    return (
        <>
            <div className="aboutus-page" id="aboutus-page">

                <img className="aboutus__img" src={aboutus_img} alt="about us" />

                <div className="aboutus-page__block">
                    <a className="caption__italic">About Us</a>
                    <h2 className="caption__roboto">We Believe in Working Accredited Farmers</h2>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <div>
                        <div className="block">
                            <div className="img_block">
                                <img className="" src={vegan_icon} alt="vegan" />
                            </div>
                            <div className="">
                                <h2 className="">Organic Foods Only</h2>
                                <p className="">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className="block">
                            <div className="img_block">
                                <img className="" src={mailbox_icon} alt="mailbox" />
                            </div>
                            <div className="">
                                <h2 className="">Organic Foods Only</h2>
                                <p className="">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>
                        <button className="aboutus-page__btn">Shop Now <img className='btn-img' src={arrow_icon} alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </>


    );
}

