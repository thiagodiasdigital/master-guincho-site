import type { HomeDataTemplate } from "@/data/home.data";
import { SocialIcon } from "./SocialIcon";

type SocialProfile = {
  label: string;
  href: string;
  icon: string;
  text: string;
};

type FinalCTASectionProps = {
  section: HomeDataTemplate["sections"]["finalCta"];
  socialProfiles: SocialProfile[];
  siteName: string;
  whatsappHref: string;
  secondaryHref: string;
};

export function FinalCTASection({
  section,
  socialProfiles,
  siteName,
  whatsappHref,
  secondaryHref
}: FinalCTASectionProps) {
  return (
    <section id="contato" className="bg-brand-gold px-4 py-20 text-brand-deep md:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-black md:text-5xl">{section.title}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-8">{section.description}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            className="rounded-md bg-brand-deep px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-deep/25"
          >
            {section.primaryLabel}
          </a>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-brand-deep px-7 py-4 text-sm font-black uppercase text-brand-deep transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-brand-deep/20"
          >
            {section.secondaryLabel}
          </a>
        </div>
        <div className="mt-12 text-left">
          <p className="text-sm font-black uppercase tracking-[0.18em]">Perfis oficiais</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {socialProfiles.filter((profile) => Boolean(profile.href)).map((profile) => (
              <a
                key={profile.label}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-brand-deep/25 bg-white/70 p-5 text-brand-deep transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-brand-deep/20"
                aria-label={`${profile.label} da ${siteName}`}
              >
                <span className="flex items-center gap-3 text-base font-black">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-deep text-brand-gold transition group-hover:bg-brand-blue">
                    <SocialIcon name={profile.icon} />
                  </span>
                  {profile.label}
                </span>
                <span className="mt-3 block text-sm font-semibold leading-6 text-brand-deep/80">
                  {profile.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
