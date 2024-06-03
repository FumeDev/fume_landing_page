"use client";
import { useState } from "react";
import styles from "../app/css/pricing.module.css";

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

export const frequencies: PricingTierFrequency[] = [
  { id: "1", value: "1", label: "Monthly", priceSuffix: "/mo" },
];

export const tiers: PricingTier[] = [
  {
    name: "Individual",
    id: "0",
    href: "/signup",
    price: { "1": "$20" },
    discountPrice: { "1": "" },
    description: `It's just you and Fume building. Your colleagues will lose it when they see how fast you are merging PRs`,
    features: [
      `Unlimited tasks`,
      `Unlimited codebases`,
      `Unmatched codebase understanding`,
      `Automated PRs`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Sign up`,
  },
  {
    name: "Team",
    id: "1",
    href: "https://calendly.com/fumedev/30min",
    price: { "1": "$250" },
    discountPrice: { "1": "" },
    description: `Crush the competition by building 10x faster. Fume turbocharges your engineering team`,
    features: [
      `10 seats`,
      `Shared codebases`,
      `Ask @Fume on Slack`,
      `Jira and Linear Integration`,
    ],
    featured: false,
    highlighted: true,
    soldOut: false,
    cta: `Contact Sales`,
  },
  {
    name: "Enterprise",
    id: "2",
    href: "https://calendly.com/fumedev/30min",
    price: { "1": "Custom" },
    discountPrice: { "1": "" },
    description: `When you grow, need more power and flexibility.`,
    features: [
      `On premise deployment`,
      `100% data isolation option`,
      `24hr support`,
    ],
    featured: false,
    highlighted: true,
    soldOut: false,
    cta: `Contact Sales`,
  },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const cn = (...args: Array<string | boolean | undefined | null>) =>
  args.filter(Boolean).join(" ");

export default function PricingPage() {
    const [frequency, setFrequency] = useState(frequencies[0]);
  
    const bannerText = '';
  
    return (
      <div
        className={cn('flex flex-col w-full items-center dark bg-black', styles.fancyOverlay)}
      >
        <div className="w-full flex flex-col items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
            {bannerText ? (
              <div className="w-full lg:w-auto flex justify-center my-4">
                <p className="w-full px-4 py-3 text-xs bg-teal-500 text-white rounded-xl">
                  {bannerText}
                </p>
              </div>
            ) : null}
  
            {frequencies.length > 1 ? (
              <div className="mt-16 flex justify-center">
                <div
                  role="radiogroup"
                  className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-black ring-1 ring-inset ring-teal-700"
                  style={{
                    gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                  }}
                >
                  <p className="sr-only">Payment frequency</p>
                  {frequencies.map((option) => (
                    <label
                      className={cn(
                        frequency.value === option.value
                          ? 'bg-teal-600 text-white'
                          : 'bg-transparent text-teal-200 hover:bg-teal-600',
                        'cursor-pointer rounded-full px-2.5 py-2 transition-all',
                      )}
                      key={option.value}
                      htmlFor={option.value}
                    >
                      {option.label}
  
                      <button
                        value={option.value}
                        id={option.value}
                        className="hidden"
                        role="radio"
                        aria-checked={frequency.value === option.value}
                        onClick={() => {
                          setFrequency(
                            frequencies.find(
                              (f) => f.value === option.value,
                            ) as PricingTierFrequency,
                          );
                        }}
                      >
                        {option.label}
                      </button>
                    </label>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-12" aria-hidden="true"></div>
            )}
  
            <div
              className={cn(
                'isolate mx-auto mt-4 mb-28 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none select-none',
                tiers.length === 2 ? 'lg:grid-cols-2' : '',
                tiers.length === 3 ? 'lg:grid-cols-3' : '',
              )}
            >
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={cn(
                    'bg-black ring-1 ring-teal-500 rounded-3xl p-8 xl:p-10',
                    tier.highlighted ? styles.fancyGlassContrast : '',
                  )}
                >
                  <h3
                    id={tier.id}
                    className='text-2xl font-bold tracking-tight text-teal-300'
                  >
                    {tier.name}
                  </h3>
                  <p
                    className='mt-4 text-sm leading-6 text-white'
                  >
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1 text-teal-100">
                    <span className='text-4xl font-bold tracking-tight'>
                      {typeof tier.price === 'string'
                        ? tier.price
                        : tier.price[frequency.value]}
                    </span>
                    <span className='text-sm font-semibold leading-6'>
                      {typeof tier.price !== 'string' ? frequency.priceSuffix : ''}
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={cn(
                      'flex mt-6 shadow-sm',
                      tier.soldOut ? 'pointer-events-none' : '',
                    )}
                  >
                    <button
                      disabled={tier.soldOut}
                      className={cn(
                        'w-full inline-flex items-center justify-center font-medium ring-offset-background hover:opacity-80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black dark:text-white h-12 rounded-md px-6 sm:px-10 text-md',
                        tier.featured || tier.soldOut ? 'grayscale' : '',
                        !tier.highlighted && !tier.featured
                          ? 'bg-gray-800 border border-solid border-gray-700'
                          : 'bg-teal-600 text-white hover:bg-teal-700',
                        tier.featured ? 'bg-black' : '',
                      )}
                    >
                      {tier.soldOut ? 'Sold out' : tier.cta}
                    </button>
                  </a>
  
                  <ul
                    className={cn(
                      'mt-8 space-y-3 text-sm leading-6 text-white xl:mt-10',
                    )}
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className={cn(
                            tier.featured ? 'text-teal-300' : '',
                            tier.highlighted
                              ? 'text-teal-500'
                              : 'text-teal-300',
                            'h-6 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }  