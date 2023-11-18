import "../styles/footer.scss"

export default function Footer() {
    return (
        <div id='footer'>
            <div id='footer-elements'>
                <div id='footer-grid-elements'>
                    <a href="/">Home</a>
                    <a href="about-us">About Us</a>
                    <a>Sitemap</a>
                    <a href="/services">Services</a>
                    <a>Contact</a>
                    <a href="privacy-policy">Privacy Policy</a>
                </div>
                <div id='copyright' className="mb1">
                <p>©Ismael Chavez Services, Inc. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}