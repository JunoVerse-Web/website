import { getPage } from "@/lib/content/getPage";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("privacy-policy");

	return getSeo(page);
}

export default function PrivacyPolicy() {

	return (
		<main className="privacy-policy bg-linear-[45deg] from-[#fdac98] to-[#b3cff5]" data-page-type="general">
			<section className="title-section">
				<h1>Privacy Policy</h1>
			</section>

			<section>
				<div>
					<p>
						All of us at Rekalabs Sdn. Bhd. take your privacy and personal information and data seriously. As such, this privacy policy has been
						compiled to better serve those who are concerned with how their &apos;Personally identifiable information&apos; (PII) is being used
						online. Pll, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to
						identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect
						or otherwise handle your Personally Identifiable information in accordance with our website.
					</p>

					<p>
						<b>What personal information do we collect from the people that visit our website(s) or app(s)?</b>
					</p>
					<p>
						We collect your name, email address and other relevant contact details in order to send information, respond to inquiries, and/or other
						requests or questions.
					</p>

					<p>
						<b>When do we collect information?</b>
					</p>
					<p>We collect information from you when you subscribe to a newsletter or enter information on our site.</p>

					<p>
						<b>How do we use your information?</b>
					</p>
					<p>
						We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or
						marketing communication, surf the website, or use certain other site features in the following ways:
					</p>
					<ul>
						<li>
							To personalize your experience and to allow us to deliver the type of content and potential opportunities or offerings in which you
							are most interested.
						</li>
						<li>To improve our website in order to better serve you.</li>
						<li>To send periodic emails regarding your prior expressed interest for updates.</li>
					</ul>

					<p>
						<b>How do we protect your information?</b>
					</p>
					<p>
						We do not use vulnerability scanning and/or scanning to Payment Card Industry (PCI) standards. We only provide articles and information.
						We do not ask for payment details (such as credit card numbers). We do not use Malware Scanning.
					</p>

					<p>
						<b>Do we use &apos;cookies&apos;?</b>
					</p>
					<p>
						Yes. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your web browser
						(if you allow) that enables the site&apos;s or service provider&apos;s systems to recognize your browser to capture and remember certain
						information. For instance, we use cookies to help us remember pages and content you may have visited. They are also used to help us
						understand your preferences based on previous or current site activity, which enables us to provide you with improved content or
						services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site
						experiences and tools in the future.
					</p>

					<p>
						<b>We use cookies to:</b>
					</p>
					<ul>
						<li>Keep track of advertisements.</li>
						<li>
							Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future.
							We may also use trusted third-party services that track this information on our behalf.
						</li>
					</ul>

					<p>
						You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this
						through your browser settings. Since every browser is a little different, look at your browser&apos;s Help Menu to learn the correct way
						to modify your cookies.
					</p>
					<p>If you tum cookies off, some of the features that make your site experience more efficient may not function properly.</p>

					<p>
						<b>Third-party disclosure</b>
					</p>
					<p>
						We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable information unless we provide users with an
						advanced notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our
						business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information
						when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others&apos; rights, property or
						safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other
						uses.
					</p>

					<p>
						<b>
							If you would like to unsubscribe from receiving emails or updates at any time you can write to us at: hello@junoverse.io We will
							promptly remove you from all correspondence.
						</b>
					</p>
				</div>
			</section>
		</main>
	);
}
