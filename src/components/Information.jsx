import "../styles/information.scss"
import housekeeper from "../images/housekeeper_ismael_services.jpg"
import cement from "../images/cement_placement_ismael.jpg"

export default function Information() {
    return (
        <>
    <div id="information-responsive" className="mb">
    <div id="information-container">
        <div id="information">
            <div id='information-p-container'>
            <p>Why Choose Us?</p>
            <p>With years of experience in the industry, we have honed our skills and expertise to deliver top-notch services.</p>
            <p>Our clients are at the heart of our business. We work closely with you to understand your unique requirements and provide tailored solutions.</p>
            </div>
        </div>
        <div id='image-container-information' className="image-info"><img src={housekeeper.src}/></div>
    </div>

</div>
<div id="information-responsive-reverse" className="mb">
    <div id="information-container-reverse">
        <div id="information">
            <div id='information-p-container'>
            <p>How To Get Started?</p>
            <p>Simply, send us an email and let us know the service you are interested in!</p>
            <p>We believe in clear communication and transparent pricing, so you know what to expect every step of the way.</p>
            </div>
        </div>
        <div id='image-container-information' className="image-info"><img src={cement.src}/></div>
    </div>
</div>
<div id="divider-responsive" class="mb">
				<div id="divider-container">
					<div id="divider">
					</div>
				</div>
			</div>
            <div id='responsive-container' className="mb">
                <div id='orange-container'>
                    <div id='orange'>
                        <div id='orange-p-container'>
                            <p>We are proud to serve the Denver community, understanding the unique needs of the Mile-High City.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="divider-responsive">
				<div id="divider-container">
					<div id="divider">
					</div>
				</div>
			</div>
            <div id="homepage-quick-contact">
			<div id="introduction-container">

			<div id='banner-responsive-contact'>
		<div id="introduction-container-contact">
			<p id="introduction-p-contact">How to Reach Us</p>
		</div>
	</div>
            
        <div id='google-maps-container' className="mb">
                <div id='maps-container'>
                    <div id='google-maps'>
                        <div id='map'>
                        <iframe width="520" height="388" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=388&amp;hl=en&amp;q=15179%20E%20Colfax%20Ave%20Unit%20G%20Aurora+(Office)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>
                        </div>
                    </div>
                </div>
            </div>

		</div>
        </div>
        <div id="contact-information">
			<div id="contact-container">
                <div id="grid-container-contact">
			<p id="contact-p" className="mb">15179 E Colfax Ave<br/>Unit G<br/>Aurora, CO 80011</p>
            <div id='grid-contact'>
                <div id='names-contact'>
                    <p>Office:</p>
                    <p>Cell:</p>
                    <p>Email:</p>
                </div>
                <div id='placeholder'></div>
                <div id='numbers'>
                    <p>+1 (720) 510-8161</p>
                    <p>+1 (720) 584-4036</p>
                    <p>ismaelchavezservices@hotmail.com</p>
                </div>
            </div>
            </div>
		</div>
        </div>


</>
    )
}