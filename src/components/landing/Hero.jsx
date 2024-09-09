const Hero = () => {
    return (
        <section class="hero__container container">
            <div class="hero__left">
                <div class="hero__left__feat">
                    <h1 class="hero__h1">Discover Random Possibilities</h1>
                    <p class="hero__caption">Numbers and Words at Your Fingertips</p>
                    <a href="#generate">
                        <button class="hero__button">Let's Generate!</button>
                    </a>
                </div>
                <p class="hero__note">This website is a project developed by @elfinix for his web development journey.</p>
            </div>
            <div class="hero__right">
                <img src="./public/images/hero-img.png" alt="" class="hero__img" />
            </div>
        </section>
    );
};
export default Hero;
