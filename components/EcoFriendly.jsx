import ecofriendly_img from "../img/eco_organic.jpg"

export default function EcoFriendly() {
    return (
        <>
            <div class="ecofriendly-page">
                <div class="ecofriendly-page__img">
                    <img class="img" src={ecofriendly_img} alt="eco friendly" />

                </div>
                <div class="ecofriendly-page__text">
                    <a className="caption__italic">Eco Friendly</a>
                    <h2 className="caption__roboto">Econis is a Friendly Organic Store</h2>

                    <a className="caption__roboto-small">Start with Our Company First</a>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>

                    <a className="caption__roboto-small">Learn How to Grow Yourself</a>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>

                    <a className="caption__roboto-small">Farming Strategies of Today</a>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>



                </div>
            </div >



        </>


    );
}

