"use client"

import { useState } from "react"
import Image from "next/image"
import { benefitsData } from "./data"

export function BenefitsSection() {
    const [active, setActive] = useState(0);

    const bgImages = [
        "/smartr/1.jpg",
        "/smartr/2.jpg",
        "/smartr/3.jpg",
        "/smartr/4.jpg",
    ];

    const handleClick = (index: number) => {
        if (index === active) return;
        setTimeout(() => setActive(index), 60);
    };

    return (
        <section className="py-20 md:py-32 px-6 bg-transparent overflow-hidden">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-6">
                    <span className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-2 block">
                        {benefitsData.tagline}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
                        {benefitsData.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-16">

                    <div className="flex flex-col order-2 lg:order-1">
                        {benefitsData.items.map((benefit, index) => (
                            <div
                                key={index}
                                className="border-t border-slate-200 last:border-b cursor-pointer py-6"
                                onClick={() => handleClick(index)}
                            >
                                <div className="flex items-center gap-5 select-none">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 border-[1.5px] transition-all duration-300
                      ${active === index
                                                ? "bg-[#085689] border-[#085689] text-white shadow-[0_4px_12px_rgba(8,86,137,0.3)]"
                                                : "border-slate-300 text-slate-400"}`}
                                    >
                                        {index + 1}
                                    </div>
                                    <span
                                        className={`font-semibold text-lg transition-colors duration-300
                      ${active === index ? "text-black" : "text-slate-400"}`}
                                    >
                                        {benefit.title}
                                    </span>
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${active === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <div className="pt-4 pb-1 pl-[52px] flex flex-col gap-3">
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {benefit.description}
                                        </p>
                                        {benefit.stat && (
                                            <span className="font-black text-3xl text-[#085689] leading-none">
                                                {benefit.stat}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

    <div className="lg:sticky lg:top-10 rounded-2xl overflow-hidden aspect-[4/3] relative border border-slate-200 shadow-[0_16px_40px_rgba(8,86,137,0.12)] order-1 lg:order-2">
                        {bgImages.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt=""
                                fill
                                className={`object-cover transition-opacity duration-500 ease-in-out
                  ${active === index ? "opacity-100" : "opacity-0"}`}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}