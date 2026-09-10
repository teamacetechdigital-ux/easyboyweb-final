// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

const services = [
  "Landing Pages",
  "Business Websites",
  "Portfolio Websites",
  "SEO Friendly Pages",
  "Responsive Design",
  "Website Maintenance",
];

export default function ServicesPage() {
  return (
    <>
      {/* <Header /> */}
      <main className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Services</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Our website services.</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{service}</h3>
              <p className="mt-3 text-slate-600">Built with clear structure, fast speed, and a clean look.</p>
            </div>
          ))}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
