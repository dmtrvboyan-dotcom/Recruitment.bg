import { securityData } from "./data"


export function SecuritySection() {
  return (
    <section className="py-16 px-6 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-2 block">
            {securityData.tagline}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black text-balance">
            {securityData.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityData.items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-black text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}