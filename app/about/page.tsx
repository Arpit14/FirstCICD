export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-500 text-lg mb-12">
          We are a passionate team dedicated to building great software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to create intuitive, high-performance web applications
            that make people&apos;s lives easier. We believe in clean code, great
            design, and delivering real value to our users.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a world where software is fast, accessible, and enjoyable
            to use. We strive to set the bar higher with every product we ship.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { name: "Alice Johnson", role: "Founder & CEO" },
          { name: "Bob Smith", role: "Lead Engineer" },
          { name: "Carol White", role: "Head of Design" },
        ].map(({ name, role }) => (
          <div
            key={name}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center"
          >
            <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {name[0]}
            </div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500 mt-1">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
