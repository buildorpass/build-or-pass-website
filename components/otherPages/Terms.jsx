import React from "react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Terms of service</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              These Terms of Service (“Terms”) govern use of the Build or Pass
              website and the Generative AI course (the “Course”). By joining the
              waitlist, creating an account, or paying for a seat, you accept
              these Terms.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">The Course</h3>
            <p>
              Build or Pass is an online Generative AI course. It covers skills,
              portfolio projects, and interview prep. Curriculum, dates, and
              format (live labs and/or recordings) are described on this
              website and in emails we send when seats open. We may update
              the syllabus to keep it current.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Waitlist</h3>
            <p>
              Joining the waitlist is free and does not guarantee a seat.
              When a cohort opens we email you. A seat is confirmed only
              after successful payment of the published fee, unless we say
              otherwise in writing.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Fees and payment</h3>
            <p>
              Course fees are shown in Indian Rupees (INR) unless stated
              otherwise. GST or other taxes may apply and will be shown at
              checkout when required. Payments are collected through
              Razorpay, PayU, and/or PhonePe. A completed payment is a
              binding purchase of the selected Course seat or plan.
            </p>
            <p>
              If a payment fails, is reversed, or is flagged as fraud, we
              may withhold or cancel access until the payment is settled.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              Cancellation and refunds
            </h3>
            <p>
              Cancellations and refunds are governed by our{" "}
              <Link href="/page-refund">Cancellation and refund policy</Link>.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Delivery</h3>
            <p>
              The Course is digital. There is no physical shipment. Access
              is delivered as described in our{" "}
              <Link href="/page-shipping">Delivery policy</Link>.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Your obligations</h3>
            <p>
              You must provide accurate details at checkout and keep login
              details private. Course materials, recordings, and project
              briefs are licensed to you for personal learning only. You
              may not share, resell, or publicly republish them without our
              written permission.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">No job guarantee</h3>
            <p>
              We teach skills, projects, and interview prep. We do not
              guarantee a job, interview, or salary outcome. Results depend
              on your work, experience, and hiring processes outside our
              control.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
              Limitation of liability
            </h3>
            <p>
              To the extent allowed by Indian law, Build or Pass is not
              liable for indirect or consequential loss. Our total liability
              for a paid seat is limited to the fee you actually paid for
              that seat.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Governing law</h3>
            <p>
              These Terms are governed by the laws of India. Courts in India
              have jurisdiction, subject to any mandatory consumer-protection
              rights that apply to you.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Contact</h3>
            <p>
              Questions about these Terms:{" "}
              <a href="mailto:hello@buildorpass.com">hello@buildorpass.com</a>
              . Also see our{" "}
              <Link href="/page-privacy">Privacy policy</Link> and{" "}
              <Link href="/page-contact">Contact</Link> page.
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
