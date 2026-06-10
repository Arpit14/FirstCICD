export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-500 text-lg mb-12">
          Have a question or want to work together? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="jane@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us how we can help..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-lg py-2.5 font-medium hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="flex flex-col gap-8">
          {[
            {
              heading: "Email",
              detail: "hello@myapp.com",
              note: "We reply within 24 hours.",
            },
            {
              heading: "Phone",
              detail: "+1 (555) 000-1234",
              note: "Mon–Fri, 9 am – 5 pm EST",
            },
            {
              heading: "Office",
              detail: "123 Main Street, Suite 4",
              note: "New York, NY 10001",
            },
          ].map(({ heading, detail, note }) => (
            <div key={heading}>
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-1">
                {heading}
              </p>
              <p className="text-gray-900 font-medium">{detail}</p>
              <p className="text-gray-500 text-sm">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
