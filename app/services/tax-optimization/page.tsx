import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tax Optimization Services - Example Company",
  description: "Optimize your tax strategy with our expert tax optimization services.",
}

const TaxOptimizationPage = () => {
  return (
    <main className="container mx-auto py-10">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Tax Optimization Services</h1>
        <p className="text-gray-700">
          We offer comprehensive tax optimization services to help you minimize your tax liabilities and maximize your
          financial well-being. Our team of experienced tax professionals will work with you to develop a personalized
          tax strategy that aligns with your specific needs and goals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Tax Planning and Strategy</li>
          <li>Tax Compliance and Reporting</li>
          <li>Tax Credits and Incentives</li>
          <li>Estate and Gift Tax Planning</li>
          <li>International Tax Planning</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
        <p className="text-gray-700">
          Contact us today to schedule a consultation and learn how our tax optimization services can benefit you.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Contact Us
        </button>
      </section>
    </main>
  )
}

export default TaxOptimizationPage
