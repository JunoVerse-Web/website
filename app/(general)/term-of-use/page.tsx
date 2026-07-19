import { getPage } from "@/lib/content/getPage";
import { getSeo } from "@/lib/seo/getSeo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const page = await getPage("term-of-use");

	return getSeo(page);
}

export default function TermOfUsePage() {
	return (
		<main
			className="term-of-use bg-linear-[45deg] from-[#fdac98] to-[#b3cff5]"
			data-page-type="general"
		>
			<section className="title-section">
				<h1>Term of Use</h1>
			</section>

			<section>
				<div>
					<p>Introduction</p>
					<p>
						Welcome to Junoverse.jo a service owned and operated and managed by Rekalabs Sdn Bhd (&quot;JUNO&quot;), a company incorporated in
						Malaysia, with Business Registration Number 202001042890 (1399211-A). By accessing or using our platform, you agree to be bound by these
						Terms of Use. By accessing or using the Site in any manner, you agree to be bound by these Terms. If you do not accept all of the terms
						and conditions of this agreement, please do not use this Site.
					</p>
					<p>Site Content</p>
					<p>
						All content on the Site, including but not limited to text, graphics, images, videos, logos, button icons, and software compilations, is
						the property of JUNO or its content suppliers and is protected by copyright and trademark laws.
					</p>
					<ol>
						<li>
							<p>Privacy Policy</p>
							<p>
								We value your privacy. Please refer to our Privacy Policy for details on how we collect, use, and protect your personal
								information. By using this platform, you consent to the collection and use of your information as described in our Privacy
								Policy.
							</p>

							<div>
								<p>
									<strong>Key Highlights:</strong>
								</p>
								<ul>
									<li>We collect only the necessary personal information to provide our services.</li>
									<li>We use encryption and other security measures to protect your data.</li>
									<li>You have the right to access, update, or delete your information by contacting us at <a href="mailto:hello@junoverse.io">hello@junoverse.io</a>.</li>
								</ul>
							</div>
						</li>

						<li>
							<p>Liability Disclaimer</p>
							<p>2.1 Limitation of Liability</p>
							<p>
								While JUNO attempts to include accurate information in this Site, occasional errors or omissions in content may occur. JUNO will
								make reasonable efforts to correct these errors or omissions but can make no representation regarding the accuracy of
								information provided. JUNO does not verify the accuracy or completeness of any security disclosure or assessment provided on the
								Site and such disclosures or assessments are provided &quot;as is.&quot; To the maximum extent permitted by law, JUNO disclaims
								and excludes all warranties, conditions, representations or other terms relating to the Site, express or implied, statutory or
								otherwise, including, but not limited to, any warranties or other terms of accuracy, completeness, performance, currency, or
								fitness for a particular purpose of the Site or the information it contains. JUNO does not warrant that the Site will be
								error-free. JUNO disclaims all responsibility for any loss, injury, claim, liability, or damage of any kind arising out of or
								any way related to
							</p>

							<ol className="latin">
								<li>
									any errors in or omissions from this Site and its content, including but not limited to technical inaccuracies and
									typographical errors,
								</li>
								<li>
									any third party sites or content therein directly or indirectly accessed through links in this Site, including but not
									limited to any errors in or omissions therefrom,
								</li>
								<li>the unavailability of this Site or any portion thereof, or</li>
								<li>
									your use of this Site. However, we do not exclude or limit in any way our liability to you where it would be unlawful to do
									so in our jurisdiction. Different limitations and exclusions of liability will apply to liability arising as a result of the
									supply of any products to you, as a client of JUNO and especially, as set out in our Client Agreement.
								</li>
							</ol>

							<div>
								<p>
									We exclude all implied conditions, warranties, representations or other terms that may apply to our Site or any content on
									it. We will not be liable to you for any loss or damage, whether in contract, tort (including negligence), negligence,
									breach of statutory duty, or otherwise, even if foreseeable arising under or in connection with
								</p>
								<ol className="roman">
									<li>use or inability to use our Site; or</li>
									<li>use or reliance on any content displayed on our Site.</li>
								</ol>
							</div>

							<div>
								<p>
									You are responsible for your compliance with any and all applicable laws and regulations. The Site and any content provided
									by JUNO are not intended, and should not be taken, as legal or other advice; it is provided for general information only.
									Please obtain professional or specialist advice before taking or refraining from any action on the basis of the content on
									our Site. JUNO, its officers, directors, employees, successors, and assigns (each a &quot;JUNO party&quot;) shall not be
									liable for any damage caused in any part by your use of the Site, your reliance on the information contained in the Site or
									for any:
								</p>
								<ol className="roman">
									<li>special, indirect, incidental or consequential damages;</li>
									<li>loss of revenues;</li>
									<li>loss of profits; or</li>
									<li>
										loss or inaccuracy of data, in any way due to, resulting from, or arising in connection with this Site, including its
										content, regardless of any negligence of any JUNO party.
									</li>
								</ol>
							</div>

							<div>
								<p>2.2 Binding Arbitration Clause</p>
								<p>
									Any dispute, controversy or claim arising out of or relating to this Agreement or the breach, termination, or invalidity
									thereof, shall be settled by conciliation or mediation in accordance with the Rules for Conciliation/Mediation of the Asian
									International Arbitration Centre (formerly known as the Kuala Lumpur Regional Centre for Arbitration).
								</p>

								<ul>
									<li>Exceptions: Small claims that qualify under applicable small claims laws may be brought in small claims court.</li>
									<li>
										Waiver of Class Action: You waive the right to participate in any class-action lawsuit or class-wide arbitration against
										JUNO.
									</li>
								</ul>
							</div>
						</li>

						<li>
							<p>Governing Laws and Regulations</p>
							<p>
								These Terms are governed and construed in accordance with applicable laws. Any dispute arising from these Terms or your use Site
								shall be exclusively subject to the jurisdiction of the competent courts.
							</p>
						</li>
						<li>
							<p>Updates and Modifications</p>
							<p>
								JUNO reserves the right to update or modify these Terms of Use at any time. Changes will be effective immediately upon posting.
								Continued use of the platform constitutes your acceptance of the revised terms.
							</p>
						</li>
					</ol>

					<div>
						<p>Contact Information</p>
						<p>If you have any questions about these Terms of Use, please contact us at: <a href="mailto:hello@junoverse.io">hello@junoverse.io</a>.</p>
					</div>
				</div>
			</section>
		</main>
	);
}
