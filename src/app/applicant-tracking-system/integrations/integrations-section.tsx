import { integrationsData } from "./data"


export function IntegrationsSection() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center lg:text-center">
          <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4 block">
            {integrationsData.tagline}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            {integrationsData.title}
          </h2>

          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto ">
            {integrationsData.subtitle}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {integrationsData.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#085689]/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#085689]" />
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}