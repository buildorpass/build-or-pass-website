import React from "react";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Privacy policy</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              This Privacy Policy applies to the Build or Pass website and the
              Agentic AI course (the “Course”). It explains what personal
              information we collect, why we collect it, and how we use it.
              By using this website, joining the waitlist, or paying for a
              seat, you agree to this policy.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Who we are</h3>
            <p>
              Build or Pass operates this website and the Course. For privacy
              questions or a data request, email{" "}
              <a href="mailto:hello@buildorpass.com">hello@buildorpass.com</a>.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              Information we collect
            </h3>
            <ul className="list list-bullets">
              <li>
                Identity and contact details you submit: name, email, phone
                number, role, and stack.
              </li>
              <li>
                Waitlist and enrolment details: goals, course interest, and
                messages you send us.
              </li>
              <li>
                Payment details processed by our payment partners (Razorpay,
                PayU, or PhonePe). We do not store your full card, UPI, or
                net-banking credentials on our servers.
              </li>
              <li>
                Technical data: IP address, browser type, device, and pages
                visited, to keep the site working and secure.
              </li>
            </ul>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">How we use it</h3>
            <ul className="uk-list uk-list-decimal uk-margin-medium@m">
              <li>
                To run the waitlist, open seats, and deliver the Course
                (labs, recordings, and mentor communication).
              </li>
              <li>
                To take payment, issue invoices or receipts, process refunds,
                and prevent fraud.
              </li>
              <li>
                To reply to support, interview-prep, and billing questions.
              </li>
              <li>
                To meet Indian law, including tax, accounting, and payment
                aggregator requirements.
              </li>
            </ul>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Payments</h3>
            <p>
              When you pay for a seat, the payment is handled by Razorpay,
              PayU, and/or PhonePe. Those companies process your payment data
              under their own policies. We receive confirmation of payment
              (success or failure), amount, and a transaction reference — not
              your full payment credentials.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Sharing</h3>
            <p>
              We do not sell your personal information. We share it only with
              payment gateways, email and hosting providers we use to run the
              Course, and authorities when the law requires it.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Retention</h3>
            <p>
              Waitlist and account data is kept while you are in a cohort or
              on the waitlist, and as long as tax, accounting, or dispute
              rules require. You may ask us to delete data we are not legally
              required to keep.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Your rights</h3>
            <p>
              You may request access, correction, or deletion of your personal
              information, or withdraw waitlist consent, by emailing{" "}
              <a href="mailto:hello@buildorpass.com">hello@buildorpass.com</a>.
              We will respond within a reasonable time.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              Grievance officer
            </h3>
            <p>
              Grievance Officer, Build or Pass
              <br />
              Email:{" "}
              <a href="mailto:hello@buildorpass.com">hello@buildorpass.com</a>
              <br />
              We aim to acknowledge privacy complaints within 48 hours and
              resolve them within 30 days.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Related policies</h3>
            <p>
              See also our{" "}
              <Link href="/page-terms">Terms of service</Link>,{" "}
              <Link href="/page-refund">Cancellation and refund policy</Link>,
              and{" "}
              <Link href="/page-shipping">Delivery policy</Link>.
            </p>
          </div>
          <div className="page-footer panel">
            <p className="fs-7 opacity-60 m-0">
              Last updated: 21 September 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
