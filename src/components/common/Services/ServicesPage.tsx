import { ServicesPageProps } from "@/types/services.interface";

import ServicesBreadcrumb from "@/components/elements/BreadCrumb/ServicesBreadCrumb";
import FormatSwitcher from "@/components/features/FormatSwitcher";
import { useTranslations } from "next-intl";

import ServicesList from "./ServicesList";
import ServicesNotFound from "./ServicesNotFound";

export default function ServicesPage({
  services,
  locale,
  category,
  format,
}: ServicesPageProps) {
  const t = useTranslations(category);
  return (
    <section className="pt-[68px] pb-section">
      <div className="my-container">
        <h1 className="font-exo2 text-md text-center mb-5">{t("title")}</h1>
        <ServicesBreadcrumb category={category} />
        {format && <FormatSwitcher />}

        {services.data.length > 0 ? (
          <ServicesList
            format={format}
            services={services}
            locale={locale}
            category={category}
          />
        ) : (
          <ServicesNotFound />
        )}
      </div>
    </section>
  );
}
