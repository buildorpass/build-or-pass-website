import React from "react";
import Link from "next/link";

export default function Refund() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">
                Cancellation and refund policy
              </h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              This policy applies to paid seats for the Build or Pass Agentic
              AI course. Waitlist signup is free and can be cancelled by
              emailing us; no payment is taken for the waitlist itself.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">How to cancel</h3>
            <p>
              Email{" "}
              <a href="mailto:hello@buildorpass.com">hello@buildorpass.com</a>{" "}
              from the address you used at checkout. Include your full name,
              registered email, and payment / transaction ID.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Refund window</h3>
            <ul className="list list-bullets">
              <li>
                Full refund if you cancel within 7 days of payment and you
                have not been given Course access (live lab, recording, or
                project materials).
              </li>
              <li>
                No refund after Course access has been granted, after you
                have attended a live session, or after you have downloaded
                or streamed recordings.
              </li>
              <li>
                If we cancel a cohort and cannot offer a later seat you
                accept, we refund the fee you paid for that cohort.
              </li>
            </ul>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">How refunds are paid</h3>
            <p>
              Approved refunds are sent through the same payment partner used
              at checkout (Razorpay, PayU, or PhonePe), to the original
              payment method. Bank or gateway processing can take 5–10
              business days after we approve the refund.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Failed payments</h3>
            <p>
              If a payment fails, is incomplete, or is later reversed by the
              bank or UPI app, the seat is not confirmed. Duplicate
              successful charges for the same seat are refunded after we
              verify the transactions.
            </p>
            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">Contact</h3>
            <p>
              Billing and refunds:{" "}
              <a href="mailto:hello@buildorpass.com">hello@buildorpass.com</a>
              . See also our{" "}
              <Link href="/page-terms">Terms of service</Link> and{" "}
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
