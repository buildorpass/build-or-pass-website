import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Breadcumb from "@/components/otherPages/Breadcumb";
import Shipping from "@/components/otherPages/Shipping";
export const metadata = {
  title: "Delivery policy || Build or Pass",
  description:
    "Digital delivery policy for the Build or Pass Agentic AI course. No physical shipping.",
};
export default function ShippingPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Breadcumb page="Delivery policy" />
          <Shipping />
        </div>
        <Footer2 />
      </div>
    </>
  );
}
