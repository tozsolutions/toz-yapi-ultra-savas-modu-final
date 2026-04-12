import { useState } from "react";
import {
  Calculator,
  Phone,
  MapPin,
  CheckSquare,
  ChevronRight,
  ChevronLeft,
  Ruler,
  Sparkles,
  MessageCircle,
} from "lucide-react";

type ProductType =
  | "Panjur"
  | "Kepenk"
  | "Pergola"
  | "Otomatik Kapı"
  | "Giyotin Cam"
  | "Zip Perde";

type LocationType = "ankara_merkez" | "ankara_ilce" | "diger_sehir";

interface ProductPricing {
  minPerSqm: number;
  maxPerSqm: number;
  isFixed: boolean;
}

const PRODUCT_PRICES: Record<ProductType, ProductPricing> = {
  Panjur: { minPerSqm: 800, maxPerSqm: 1500, isFixed: false },
  Kepenk: { minPerSqm: 1200, maxPerSqm: 2500, isFixed: false },
  Pergola: { minPerSqm: 2500, maxPerSqm: 4500, isFixed: false },
  "Otomatik Kapı": { minPerSqm: 15000, maxPerSqm: 35000, isFixed: true },
  "Giyotin Cam": { minPerSqm: 1800, maxPerSqm: 3500, isFixed: false },
  "Zip Perde": { minPerSqm: 600, maxPerSqm: 1200, isFixed: false },
};

const PRODUCT_OPTIONS: ProductType[] = [
  "Panjur",
  "Kepenk",
  "Pergola",
  "Otomatik Kapı",
  "Giyotin Cam",
  "Zip Perde",
];

const FEATURES = [
  { key: "motorlu", label: "Motorlu" },
  { key: "uzaktan_kumanda", label: "Uzandan Kumanda" },
  { key: "akilli_ev", label: "Akıllı Ev Uyumu" },
  { key: "ozel_renk", label: "Özel Renk" },
] as const;

const LOCATION_OPTIONS: { value: LocationType; label: string }[] = [
  { value: "ankara_merkez", label: "Ankara Merkez" },
  { value: "ankara_ilce", label: "Ankara İlçe" },
  { value: "diger_sehir", label: "Diğer Şehir" },
];

const STEPS = [
  { number: 1, label: "Ürün Seçimi" },
  { number: 2, label: "Ölçüler" },
  { number: 3, label: "Özellikler" },
  { number: 4, label: "Lokasyon" },
];

function formatPrice(value: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export default function PriceCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [productType, setProductType] = useState<ProductType | "">("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [features, setFeatures] = useState<Record<string, boolean>>({
    motorlu: false,
    uzaktan_kumanda: false,
    akilli_ev: false,
    ozel_renk: false,
  });
  const [location, setLocation] = useState<LocationType | "">("");

  const toggleFeature = (key: string) => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculatePrice = (): { min: number; max: number } | null => {
    if (!productType) return null;
    const pricing = PRODUCT_PRICES[productType as ProductType];

    let minPrice: number;
    let maxPrice: number;

    if (pricing.isFixed) {
      minPrice = pricing.minPerSqm;
      maxPrice = pricing.maxPerSqm;
    } else {
      const area = parseFloat(width) * parseFloat(height);
      if (isNaN(area) || area <= 0) return null;
      minPrice = pricing.minPerSqm * area;
      maxPrice = pricing.maxPerSqm * area;
    }

    // Motorlu: +30%
    if (features.motorlu) {
      minPrice *= 1.3;
      maxPrice *= 1.3;
    }

    // Ozel Renk: +15%
    if (features.ozel_renk) {
      minPrice *= 1.15;
      maxPrice *= 1.15;
    }

    // Ankara disi: +20%
    if (location === "diger_sehir") {
      minPrice *= 1.2;
      maxPrice *= 1.2;
    }

    return { min: minPrice, max: maxPrice };
  };

  const priceResult = calculatePrice();

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return productType !== "";
      case 2:
        return (
          productType === "Otomatik Kapı" ||
          (parseFloat(width) > 0 && parseFloat(height) > 0)
        );
      case 3:
        return true;
      case 4:
        return location !== "";
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (canProceed() && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setProductType("");
    setWidth("");
    setHeight("");
    setFeatures({
      motorlu: false,
      uzaktan_kumanda: false,
      akilli_ev: false,
      ozel_renk: false,
    });
    setLocation("");
  };

  const getWhatsAppMessage = () => {
    const lines = ["Merhaba, fiyat hesaplayıcı üzerinden teklif almak istiyorum:", ""];
    lines.push(`- Ürün: ${productType}`);

    if (productType !== "Otomatik Kapı" && width && height) {
      lines.push(`- Ölçüler: ${width}m x ${height}m (${(parseFloat(width) * parseFloat(height)).toFixed(1)} m²)`);
    }

    const activeFeatures = Object.entries(features)
      .filter(([, v]) => v)
      .map(([k]) => {
        const found = FEATURES.find((f) => f.key === k);
        return found?.label;
      })
      .filter(Boolean);

    if (activeFeatures.length > 0) {
      lines.push(`- Özellikler: ${activeFeatures.join(", ")}`);
    }

    const locationLabel = LOCATION_OPTIONS.find((l) => l.value === location)?.label;
    if (locationLabel) {
      lines.push(`- Lokasyon: ${locationLabel}`);
    }

    if (priceResult) {
      lines.push(
        `- Tahmini Fiyat: ${formatPrice(priceResult.min)} - ${formatPrice(priceResult.max)} TL`
      );
    }

    return encodeURIComponent(lines.join("\n"));
  };

  const whatsappNumber = "905441553151";

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-foreground mb-3">
              Ürün Tipi Seçiniz
            </label>
            <div className="grid grid-cols-2 gap-3">
              {PRODUCT_OPTIONS.map((product) => (
                <button
                  key={product}
                  type="button"
                  onClick={() => setProductType(product)}
                  className={`
                    px-4 py-3 rounded-xl text-sm font-medium transition-all border
                    ${
                      productType === product
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-accent/5"
                    }
                  `}
                >
                  {product}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        if (productType === "Otomatik Kapı") {
          return (
            <div className="space-y-4 py-4 text-center">
              <Ruler className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-foreground font-medium">
                Otomatik Kapı için ölçü girişi gerekmez.
              </p>
              <p className="text-muted-foreground text-sm">
                Fiyat, sabit aralık üzerinden hesaplanmaktadır.
              </p>
            </div>
          );
        }
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-foreground mb-1">
              Ölçüleri Giriniz (metre)
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-muted-foreground mb-1">
                  Genişlik (m)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Örn: 3.5"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">
                  Yükseklik (m)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Örn: 2.5"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>
            {width && height && parseFloat(width) > 0 && parseFloat(height) > 0 && (
              <p className="text-sm text-primary font-medium text-center">
                Toplam Alan: {(parseFloat(width) * parseFloat(height)).toFixed(2)} m²
              </p>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-foreground mb-3">
              Ek Özellikler (İsteğe Bağlı)
            </label>
            {FEATURES.map((feature) => (
              <label
                key={feature.key}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all
                  ${
                    features[feature.key]
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/30"
                  }
                `}
              >
                <CheckSquare
                  className={`w-5 h-5 flex-shrink-0 transition-colors ${
                    features[feature.key] ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <span className="text-foreground text-sm">{feature.label}</span>
              </label>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-foreground mb-3">
              <MapPin className="w-4 h-4 inline mr-2" />
              Proje Lokasyonu
            </label>
            <div className="space-y-2">
              {LOCATION_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setLocation(opt.value)}
                  className={`
                    w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all border flex items-center gap-3
                    ${
                      location === opt.value
                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                        : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-accent/5"
                    }
                  `}
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="fiyat-hesapla" className="py-20 bg-toz-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Fiyat Hesaplayıcı
          </span>
          <h2 className="toz-heading text-foreground mt-3">
            Tahmini <span className="text-gradient-purple">Fiyat</span> Öğrenin
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Ürün tipinizi seçin, ölçülerinizi girin ve anında tahmini fiyat aralığını öğrenin.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-toz-anthracite px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                {STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="flex flex-col items-center gap-1"
                  >
                    <div
                      className={`
                        w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all
                        ${
                          step.number <= currentStep
                            ? "bg-primary text-white"
                            : "bg-toz-anthracite-light text-muted-foreground border border-toz-anthracite-light"
                        }
                      `}
                    >
                      {step.number}
                    </div>
                    <span className="text-xs text-muted-foreground hidden sm:block">
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-toz-anthracite-light rounded-full h-1.5">
                <div
                  className="bg-primary h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Body */}
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-primary mb-1">
                  {currentStep === 1 && <Calculator className="w-5 h-5" />}
                  {currentStep === 2 && <Ruler className="w-5 h-5" />}
                  {currentStep === 3 && <Sparkles className="w-5 h-5" />}
                  {currentStep === 4 && <MapPin className="w-5 h-5" />}
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Adım {currentStep} / 4
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  {STEPS[currentStep - 1]?.label}
                </h3>
              </div>

              {renderStepContent()}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all
                    ${
                      currentStep === 1
                        ? "invisible"
                        : "text-foreground border border-border hover:bg-accent/5 hover:border-primary/30"
                    }
                  `}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Geri
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className={`
                      flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all
                      ${
                        canProceed()
                          ? "bg-primary text-white hover:bg-primary/90 shadow-md"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      }
                    `}
                  >
                    İleri
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-foreground border border-border hover:bg-accent/5 transition-all"
                  >
                    Sıfırla
                  </button>
                )}
              </div>
            </div>

            {/* Price Result */}
            {priceResult && currentStep === 4 && (
              <div className="mx-6 sm:mx-8 mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 text-center">
                  <Calculator className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm mb-1">
                    Tahmini Fiyat Aralığı
                  </p>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-gradient-purple mb-2">
                    {formatPrice(priceResult.min)} TL - {formatPrice(priceResult.max)} TL
                  </p>
                  <p className="text-xs text-muted-foreground">
                    * Bu fiyatlar tahmini olup, kesin fiyat için keşif ve detaylı analiz gerekmektedir.
                  </p>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            {priceResult && currentStep === 4 && (
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp ile Teklif Al
                  </a>
                  <a
                    href="tel:+905441553151"
                    className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Ücretsiz Keşif Talep Et
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
