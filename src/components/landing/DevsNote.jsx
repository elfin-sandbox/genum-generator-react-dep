const DevsNote = () => {
    return (
        <section class="dev__container container">
            <div class="graphic__container">
                <img src="./public/images/el_circle.png" alt="" class="el__circle" />
                <img src="./public/images/el_square.png" alt="" class="el__square" />
            </div>
            <div class="dev-main__container">
                <h2 class="dev__h2">Dev’s Note</h2>
                <div class="dev-quote__container">
                    <div class="dev-image__holder">
                        <img src="./public/images/dev.jpg" alt="" class="dev__image" />
                    </div>
                    <p class="dev__quote">
                        This generator was crafted with performance and simplicity in mind. The design focuses on user
                        experience, making it easy to utilize the tools without distractions. Future updates may continue to
                        refine website functionality.
                        <br />
                        <br />— elfinix
                    </p>
                </div>
                <div class="dev__rect"></div>
            </div>

            <div class="graphic__container">
                <img src="./public/images/el_circle.png" alt="" class="el__circle el--reversed" />
                <img src="./public/images/el_square.png" alt="" class="el__square el--reversed" />
            </div>
        </section>
    );
};
export default DevsNote;
