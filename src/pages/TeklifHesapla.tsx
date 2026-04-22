import PriceCalculator from "@/components/PriceCalculator";

export default function TeklifHesapla() {
  return (
    <section className="toz-section bg-toz-cream">
        <div className="toz-container">
          <div className="text-center mb-12">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              Online Fiyat Hesaplama
            </span>
            <h2 className="toz-heading mt-3">
              Hızlı Teklif <span className="text-gradient-purple">Hesaplayıcı</span>
            </h2>
            <p className="toz-subheading mx-auto mt-4">
              Ürün tipini, ölçüleri ve tercihlerinizi seçin. Size tahmini fiyat aralığı sunalım.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <PriceCalculator />
          </div>
        </div>
      </section>
  );
}
