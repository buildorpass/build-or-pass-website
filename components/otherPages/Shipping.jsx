import React from "react";
import Link from "next/link";

export default function Shipping() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Delivery policy</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              Build or Pass is a digital Generative AI course. We do not ship
              physical goods, kits, or printed materials.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">What is delivered</h3>
            <ul className="list list-bullets">
              <li>Access to live labs and/or session recordings</li>
              <li>Project briefs and curriculum materials</li>
              <li>Interview-prep resources for your cohort</li>
              <li>Email confirmation and login or join instructions</li>
            </ul>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">When you get access</h3>
            <p>
              After a successful payment, we email access details to the
              address used at checkout. For a live cohort, that is typically
              within 24 hours of payment, and not later than the published
              start date. If the Course is already running, access is sent
              as soon as payment is confirmed.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Delivery area</h3>
            <p>
              Delivery is online, worldwide, by email and internet access.
              You need a working email address and internet connection. No
              courier, PIN code, or shipping charge applies.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Failed delivery</h3>
            <p>
              If you do not receive the access email, check spam and email{" "}
              <a href="mailto:hello@buildorpass.com">hello@buildorpass.com</a>{" "}
              with your payment / transaction ID. We will resend access.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Related policies</h3>
            <p>
              <Link href="/page-refund">Cancellation and refund policy</Link>
              {" · "}
              <Link href="/page-terms">Terms of service</Link>
              {" · "}
              <Link href="/page-contact">Contact</Link>
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
