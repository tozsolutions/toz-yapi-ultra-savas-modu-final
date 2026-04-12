import { useState, useRef, type ChangeEvent } from "react";
import {
  Phone,
  Wrench,
  Settings,
  DoorOpen,
  Home,
  Eye,
  AlertTriangle,
  Clock,
  Shield,
  MapPin,
  Send,
  Upload,
  X,
  Image,
  CheckCircle,
  MessageCircle,
  FileText,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Wrench, title: "Panjur Arızaları", desc: "Motor, palet, kumanda arızaları ve genel bakım", phone: "+905367731404" },
  { icon: Settings, title: "Kepenk Motor Arızası", desc: "Tüp motor, redüktör, kart arızası onarımı", phone: "+905367731404" },
  { icon: DoorOpen, title: "Otomatik Kapı Sorunları", desc: "Fotosel, motor, sensör tamiri", phone: "+905367731404" },
  { icon: Home, title: "Pergola Bakım", desc: "Mekanizma, motor, yağmur sensörü bakımı", phone: "+905367731404" },
  { icon: Eye, title: "Fotoselli Kapı Tamiri", desc: "Sensör kalibrasyonu, motor değişimi", phone: "+905367731404" },
  { icon: AlertTriangle, title: "Acil Müdahale", desc: "7/24 acil teknik servis hizmeti", phone: "+905367731404" },
];

const faultTypes = [
  { value: "mekanik", label: "Mekanik Arıza" },
  { value: "elektrik", label: "Elektrik Arızası" },
  { value: "motor", label: "Motor Arızası" },
  { value: "diger", label: "Diğer" },
];

const productTypes = [
  { value: "panjur", label: "Panjur" },
  { value: "kepenk", label: "Kepenk" },
  { value: "pergola", label: "Pergola" },
  { value: "otomatik_kapi", label: "Otomatik Kapı" },
  { value: "giyotin_cam", label: "Giyotin Cam" },
  { value: "zip_perde", label: "Zip Perde" },
  { value: "fotoselli_kapi", label: "Fotoselli Kapı" },
];

const urgencyLevels = [
  { value: "normal", label: "Normal", color: "text-green-600", bg: "bg-green-50 border-green-200", desc: "1-3 iş günü içinde müdahale" },
  { value: "oncelikli", label: "Öncelikli", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", desc: "Aynı gün müdahale" },
  { value: "acil", label: "Acil", color: "text-red-600", bg: "bg-red-50 border-red-200", desc: "Hemen müdahale" },
];

const whatsappNumber = "905367731404";

interface ServiceFormData {
  faultType: string;
  productType: string;
  urgency: string;
  description: string;
  kvkkAccepted: boolean;
  name: string;
  phone: string;
  address: string;
}

export default function TeknikDestek() {
  const [formData, setFormData] = useState<ServiceFormData>({
    faultType: "",
    productType: "",
    urgency: "normal",
    description: "",
    kvkkAccepted: false,
    name: "",
    phone: "",
    address: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newFiles = files.slice(0, 3 - uploadedFiles.length);
    setUploadedFiles((prev) => [...prev, ...newFiles]);

    newFiles.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreviews((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreviews((prev) => [...prev, ""]);
      }
    });
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    setFilePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.faultType) errors.faultType = "Arıza türü seçiniz";
    if (!formData.productType) errors.productType = "Ürün tipi seçiniz";
    if (!formData.name.trim()) errors.name = "Ad Soyad zorunludur";
    if (!formData.phone.trim()) errors.phone = "Telefon numarası zorunludur";
    if (!formData.kvkkAccepted) errors.kvkkAccepted = "KVKK aydınlatma metnini onaylamanız gerekmektedir";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const faultLabel = faultTypes.find((f) => f.value === formData.faultType)?.label || "";
    const productLabel = productTypes.find((p) => p.value === formData.productType)?.label || "";
    const urgencyLabel = urgencyLevels.find((u) => u.value === formData.urgency)?.label || "";

    const lines = [
      "Merhaba, teknik servis talebi oluşturmak istiyorum:",
      "",
      `--- Arıza Bilgileri ---`,
      `- Arıza Türü: ${faultLabel}`,
      `- Ürün Tipi: ${productLabel}`,
      `- Aciliyet: ${urgencyLabel}`,
      "",
      `--- Açıklama ---`,
      formData.description || "Açıklama girilmedi.",
      "",
      `--- İletişim Bilgileri ---`,
      `- Ad Soyad: ${formData.name}`,
      `- Telefon: ${formData.phone}`,
      `- Adres: ${formData.address || "Belirtilmedi"}`,
      "",
      `📎 ${uploadedFiles.length} fotoğraf eklendi.`,
    ];

    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <>
        <div className="bg-red-600 text-white py-4">
          <div className="toz-container flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
            <span className="text-lg font-bold">Acil Durum? Hemen Arayın:</span>
            <a href="tel:+905367731404" className="text-xl font-black underline">
              +90 536 773 14 04
            </a>
          </div>
        </div>

        <section className="toz-section">
          <div className="toz-container max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg text-center">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-5" />
              <h3 className="text-2xl font-bold text-gradient-gold mb-3">Servis Talebiniz Alındı!</h3>
              <p className="text-muted-foreground mb-2">
                WhatsApp üzerinden detaylar gönderildi.
              </p>
              <p className="text-muted-foreground mb-6">
                Uzman teknisyenimiz sizi arayarak randevu tarihi belirleyecektir.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ile Devam Et
                </a>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      faultType: "",
                      productType: "",
                      urgency: "normal",
                      description: "",
                      kvkkAccepted: false,
                      name: "",
                      phone: "",
                      address: "",
                    });
                    setUploadedFiles([]);
                    setFilePreviews([]);
                    setFormErrors({});
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border text-foreground hover:bg-accent/5 transition-all"
                >
                  Yeni Talep Oluştur
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="toz-container flex flex-col md:flex-row items-center justify-center gap-3 text-center">
          <AlertTriangle className="w-6 h-6 animate-pulse" />
          <span className="text-lg font-bold">Acil Durum? Hemen Arayın:</span>
          <a href="tel:+905367731404" className="text-xl font-black underline">
            +90 536 773 14 04
          </a>
        </div>
      </div>

      <section className="toz-section">
        <div className="toz-container">
          <div className="text-center mb-12">
            <span className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">
              Teknik Servis
            </span>
            <h2 className="toz-heading mt-3">
              7/24 Teknik <span className="text-gradient-purple">Destek</span>
            </h2>
            <p className="toz-subheading mx-auto mt-4">
              Ankara genelinde ortalama 2 saat içinde yerinde müdahale. Tüm tamir ve bakım işlemlerimiz 1 yıl garantilidir.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Service Request Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  Servis Talep Formu
                </h3>
                <p className="text-sm text-muted-foreground mb-6">Arıza bilgilerinizi girin, en kısa sürede dönüş yapalım.</p>

                <div className="space-y-5">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Ad Soyad <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                        className={`w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border outline-none transition-all ${
                          formErrors.name ? "border-red-400" : "border-border focus:ring-2 focus:ring-primary/30"
                        }`}
                        placeholder="Adınız Soyadınız"
                      />
                      {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Telefon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                        className={`w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border outline-none transition-all ${
                          formErrors.phone ? "border-red-400" : "border-border focus:ring-2 focus:ring-primary/30"
                        }`}
                        placeholder="05XX XXX XX XX"
                      />
                      {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Adres <span className="text-muted-foreground text-xs">(opsiyonel)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData((p) => ({ ...p, address: e.target.value }))}
                      className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="Mahalle, sokak, bina no..."
                    />
                  </div>

                  {/* Fault Type & Product Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Arıza Türü <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.faultType}
                        onChange={(e) => setFormData((p) => ({ ...p, faultType: e.target.value }))}
                        className={`w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border outline-none transition-all ${
                          formErrors.faultType ? "border-red-400" : "border-border focus:ring-2 focus:ring-primary/30"
                        }`}
                      >
                        <option value="">Seçiniz</option>
                        {faultTypes.map((ft) => (
                          <option key={ft.value} value={ft.value}>{ft.label}</option>
                        ))}
                      </select>
                      {formErrors.faultType && <p className="text-red-500 text-xs mt-1">{formErrors.faultType}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Ürün Tipi <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.productType}
                        onChange={(e) => setFormData((p) => ({ ...p, productType: e.target.value }))}
                        className={`w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border outline-none transition-all ${
                          formErrors.productType ? "border-red-400" : "border-border focus:ring-2 focus:ring-primary/30"
                        }`}
                      >
                        <option value="">Seçiniz</option>
                        {productTypes.map((pt) => (
                          <option key={pt.value} value={pt.value}>{pt.label}</option>
                        ))}
                      </select>
                      {formErrors.productType && <p className="text-red-500 text-xs mt-1">{formErrors.productType}</p>}
                    </div>
                  </div>

                  {/* Urgency Level */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Zap className="w-4 h-4 inline mr-1" />
                      Aciliyet Seviyesi
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {urgencyLevels.map((level) => (
                        <button
                          key={level.value}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, urgency: level.value }))}
                          className={`px-3 py-3 rounded-xl text-xs font-medium border transition-all text-center ${
                            formData.urgency === level.value
                              ? `${level.bg} ${level.color} border-current shadow-md`
                              : "bg-card border-border text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          <div className="font-bold">{level.label}</div>
                          <div className="text-xs mt-1 opacity-75 hidden sm:block">{level.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Image className="w-4 h-4 inline mr-1" />
                      Fotoğraf Ekle <span className="text-muted-foreground text-xs">(max 3 adet, opsiyonel)</span>
                    </label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-primary/50 transition-all bg-muted/30"
                    >
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Fotoğrafları sürükleyin veya <span className="text-primary font-medium">tıklayarak seçin</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP - Max 5MB</p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {/* File Previews */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="relative group rounded-lg overflow-hidden border border-border bg-muted">
                            {filePreviews[index] ? (
                              <img
                                src={filePreviews[index]}
                                alt={file.name}
                                className="w-full h-24 object-cover"
                              />
                            ) : (
                              <div className="w-full h-24 flex items-center justify-center">
                                <FileText className="w-8 h-8 text-muted-foreground" />
                              </div>
                            )}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(index);
                              }}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                            <p className="text-xs text-muted-foreground px-2 py-1 truncate">{file.name}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      <FileText className="w-4 h-4 inline mr-1" />
                      Açıklama
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))}
                      className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground border border-border outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                      rows={4}
                      placeholder="Arızayı detaylı olarak açıklayınız..."
                    />
                  </div>

                  {/* KVKK Consent */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.kvkkAccepted}
                        onChange={(e) => setFormData((p) => ({ ...p, kvkkAccepted: e.target.checked }))}
                        className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/30"
                      />
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        <a href="/kvkk" target="_blank" className="text-primary underline hover:text-primary/80">KVKK aydınlatma metnini</a> okudum,
                        kişisel verilerimin işlenmesini kabul ediyorum. <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {formErrors.kvkkAccepted && <p className="text-red-500 text-xs mt-1">{formErrors.kvkkAccepted}</p>}
                  </div>

                  {/* Submit */}
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp ile Servis Talebi Oluştur
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar: Services + SLA */}
            <div className="lg:col-span-2 space-y-6">
              {/* SLA Block */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-lg">
                <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Hizmet Seviyesi (SLA)
                </h3>
                <div className="space-y-3">
                  {urgencyLevels.map((level) => (
                    <div key={level.value} className={`flex items-center gap-3 p-3 rounded-lg border ${level.bg}`}>
                      <div className={`w-3 h-3 rounded-full ${level.color.replace("text-", "bg-")}`} />
                      <div className="flex-1">
                        <p className={`text-sm font-bold ${level.color}`}>{level.label}</p>
                        <p className="text-xs text-muted-foreground">{level.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-lg">
                <h3 className="font-bold text-foreground text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Hizmet Bölgemiz
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Ankara genelinde ve çevre ilçelerde hizmet vermekteyiz.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Altındağ", "Gölbaşı"].map((ilce) => (
                    <span key={ilce} className="text-xs bg-muted text-foreground px-2 py-1 rounded-full">
                      {ilce}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  * Diğer ilçeler ve şehirler için WhatsApp üzerinden bilgi alabilirsiniz.
                </p>
              </div>

              {/* Trust Signals */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">2 Saat Müdahale</p>
                    <p className="text-xs text-muted-foreground">Ankara genelinde ortalama varış süresi</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">1 Yıl Garanti</p>
                    <p className="text-xs text-muted-foreground">Tüm tamir ve bakım işlemleri garantili</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Yerinde Servis</p>
                    <p className="text-xs text-muted-foreground">Adresinize gelerek müdahale ediyoruz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground text-center mb-8">Hizmet Kalemlerimiz</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                  <s.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <a
                    href={`tel:${s.phone}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    Hemen Ara
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
