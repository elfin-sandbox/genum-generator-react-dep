const GenerationType = () => {
    return (
        <section class="menu__container container" id="generate">
            <h2 class="landing__h2">Select Generation Type</h2>
            <a href="/random-number-generator">
                <div class="gen__container">
                    <div class="img__container">
                        <img src="./public/images/menu_num.png" alt="" class="gen_img" />
                    </div>
                    <div class="gen-text__container">
                        <h3 class="gen__title clickable__title">Random Number Generator</h3>
                        <p class="gen__body">
                            Instantly generate random numbers for your needs, from simple draws to complex calculations.
                        </p>
                    </div>
                    <svg
                        class="gen__arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="26"
                        viewBox="0 0 28 26"
                        fill="none"
                    >
                        <path
                            d="M14.0629 1.09252L14.0629 1.09253C13.3124 1.87195 13.3124 3.12806 14.0629 3.90748L14.0629 3.90749L20.8928 11H2.44445C1.35295 11 0.5 11.9134 0.5 13C0.5 14.0867 1.35295 15 2.44445 15H20.8928L14.0629 22.0926C13.3124 22.8719 13.3124 24.1281 14.0629 24.9075C14.8237 25.6975 16.0653 25.6975 16.826 24.9075L26.9371 14.4075C27.6876 13.6281 27.6876 12.3719 26.9371 11.5925L16.826 1.09252C16.826 1.09252 16.826 1.09252 16.826 1.09252C16.0653 0.302492 14.8237 0.302495 14.0629 1.09252Z"
                            fill="#28A160"
                            stroke="#28A160"
                        />
                    </svg>
                </div>
            </a>

            <a href="/random-word-generator">
                <div class="gen__container">
                    <div class="img__container">
                        <img src="./public/images/menu_text.png" alt="" class="gen_img" />
                    </div>
                    <div class="gen-text__container">
                        <h3 class="gen__title clickable__title">Random Word Generator</h3>
                        <p class="gen__body">
                            Create a limitless variety of random words for brainstorming, inspiration, or fun.
                        </p>
                    </div>
                    <svg
                        class="gen__arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="26"
                        viewBox="0 0 28 26"
                        fill="none"
                    >
                        <path
                            d="M14.0629 1.09252L14.0629 1.09253C13.3124 1.87195 13.3124 3.12806 14.0629 3.90748L14.0629 3.90749L20.8928 11H2.44445C1.35295 11 0.5 11.9134 0.5 13C0.5 14.0867 1.35295 15 2.44445 15H20.8928L14.0629 22.0926C13.3124 22.8719 13.3124 24.1281 14.0629 24.9075C14.8237 25.6975 16.0653 25.6975 16.826 24.9075L26.9371 14.4075C27.6876 13.6281 27.6876 12.3719 26.9371 11.5925L16.826 1.09252C16.826 1.09252 16.826 1.09252 16.826 1.09252C16.0653 0.302492 14.8237 0.302495 14.0629 1.09252Z"
                            fill="#28A160"
                            stroke="#28A160"
                        />
                    </svg>
                </div>
            </a>
        </section>
    );
};
export default GenerationType;
