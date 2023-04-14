import './footer.scss';

export const Footer = () => {
    return (
        <footer>

            <div className="">
                <img className="logo" src="/assets/cheaper.svg" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit amet illo error voluptatum, suscipit dolor?</p>
                <div className="social">
                    <img src="/assets/facebook-logo.svg" alt="" />
                    <img src="/assets/twitter-logo.svg" alt="" />
                    <img src="/assets/google-logo.svg" alt="" />
                    <img src="/assets/twitch-logo.svg" alt="" />
                </div>
            </div>

            <div className="">
                <p className="title">My account</p>
                <p>Authors</p>
                <p>Collection</p>
                <p>Author profile</p>
                <p>Create collection</p>
            </div>

            <div className="">
                <p className="title">Resources</p>
                <p>Help & support</p>
                <p>Live auctions</p>
                <p>Item details</p>
                <p>Activity</p>
            </div>

            <div className="">
                <p className="title">Communities</p>
                <p>About us</p>
                <p>Contact us</p>
                <p>Our blog</p>
                <p>Discover</p>
            </div>

            <div className="">
                <p className="title">Subscribe us</p>
                <div className="input-subscribe">
                    <input type="text" />
                    <button><img src="/assets/send.svg" alt="" /></button>
                </div>
            </div>

        </footer>
    )
}
