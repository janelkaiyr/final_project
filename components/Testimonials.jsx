import arrow_icon from "../img/icons/arrow_icon.svg"
import client_img from "../img/client_img.png"


export default function Testimonials() {
    return (
        <>
            <div className="testimonials">
                <a className="caption__italic">Testimonial</a>
                <h2 className="caption__roboto">What Our Customer Saying?</h2>
                <div className="testimonials__client">
                    <img className="client-img" src={client_img} alt="client" />
                    <div className="client-rating"></div>
                    <p className="client-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <a className="client-caption">Sara Taylor</a>
                    <a className="client-text">Consumer</a>
                </div>
                <div className="testimonials__counters">
                    <div className="counters__box">
                        <a className="box-number">100%</a>
                        <a className="box-name">Active Product</a>
                    </div>
                    <div className="counters__box">
                        <a className="box-number">285</a>
                        <a className="box-name">Active Product</a>
                    </div>

                    <div className="counters__box">
                        <a className="box-number">350+</a>
                        <a className="box-name">Organic Orchads</a>
                    </div>
                    <div className="counters__box">
                        <a className="box-number">25+</a>
                        <a className="box-name">Years of Farming</a>
                    </div>

                </div>
            </div>
        </>


    );
}

