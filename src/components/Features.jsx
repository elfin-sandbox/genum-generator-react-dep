import { useEffect } from "react";

const Features = () => {
    return (
        <section className="features__container container">
            <h2 className="features__title">How It Works</h2>
            <div className="feature-cards__container">
                <div className="feature__card">
                    <img src="" alt="" className="card__icon" />
                    <h5 className="card__title"></h5>
                    <p className="card__description"></p>
                </div>

                <div className="feature__card">
                    <img src="" alt="" className="card__icon" />
                    <h5 className="card__title"></h5>
                    <p className="card__description"></p>
                </div>

                <div className="feature__card">
                    <img src="" alt="" className="card__icon" />
                    <h5 className="card__title"></h5>
                    <p className="card__description"></p>
                </div>
            </div>
            <div className="output__container">
                <img src="" alt="" className="clipboard__label" />
            </div>
        </section>
    );
};

export default Features;
