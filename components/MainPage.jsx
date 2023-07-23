import arrow_icon from "../img/icons/arrow_icon.svg"

export default function MainPage() {
    return (
        <>
            <div className="main-page" id="main-page">
                <h5 className="main-page__caption1">100% Natural Food</h5>
                <h2 className="main-page__caption2">Choose the best healthier way of life</h2>
                <button class="main-page__btn">Explore Now <img className='btn-img' src={arrow_icon} alt="arrow" />
                </button>
            </div>
            <div className="second-page">
                <div className="block-1" >
                    <h5 className="caption__italic">Natural!!</h5>
                    <h2 className="caption__roboto">Get Garden Fresh Fruits</h2>
                </div>
                <div className="block-2">
                    <h5 className="caption__italic">Offer!!</h5>
                    <h2 className="caption__roboto">Get 10% off on Vegetables</h2>
                </div>
            </div>



        </>


    );
}

