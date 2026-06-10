import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-indigo-600">MyApp</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          A clean, fast, and modern web application built with Next.js and
          Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Learn About Us
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Fast",
            desc: "Built on Next.js with server-side rendering and static generation for optimal performance.",
          },
          {
            title: "Responsive",
            desc: "Fully responsive layout that looks great on any device, from mobile to desktop.",
          },
          {
            title: "Modern",
            desc: "Uses the latest React and Next.js features with TypeScript for type safety.",
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
