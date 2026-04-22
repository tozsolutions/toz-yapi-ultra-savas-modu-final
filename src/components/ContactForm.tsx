import { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = lazy(() => import("@/components/ContactForm"));

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-gray-600">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Suspense fallback={<div className="text-sm text-center py-8">Form yükleniyor...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}