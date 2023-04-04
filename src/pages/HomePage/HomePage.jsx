import "./HomePage.css";
export default function HomePage() {
    return (
        <>
            <div className="HomePage-top-container">
                <h1>WELCOME</h1>
                <div className="HomePage-description">
                    <p>At Studio Hsu, we don't just take photographs. We envision what the property can become, the stories it can tell, and the dreams it can build. Our goal is to represent your determination and passion in real estate through media.

                    </p>
                    <p>
                        Through meticulous thought and diligent effort, we will help sell your homes through our lens.</p>
                </div>
            </div>

            <div>
                <h1>Featured Listing</h1>
                <div className="featured-listing-images">
                    <img src="https://i.imgur.com/ThMsgm4.jpeg" alt="fetured1" />
                    <img src="https://i.imgur.com/ofNhoRQ.jpg" alt="fetured2" />
                    <img src="https://i.imgur.com/CDJNccs.jpg" alt="fetured3" />
                    <img src="https://i.imgur.com/9ezaDz9.jpg" alt="fetured4" />
                    <img src="https://i.imgur.com/sO44BYX.jpg" alt="fetured5" />
                    <img src="https://i.imgur.com/Z9Gvdvy.jpg" alt="fetured6" />
                </div>

            </div>
        </>
    )
}
