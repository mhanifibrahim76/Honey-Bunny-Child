import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="kontak"
      className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-purple-100">Kami siap membantu Anda</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
            <div className="space-y-6">

              {/* Alamat */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Alamat</p>
                  <p className="text-purple-100">
                    Jl Jaha RT 003/010 No 57 Kalisari , Pasar Rebo , Jakarta Timur
                  </p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">WhatsApp / Telepon</p>
                  <a
                    href="tel:081287521936"
                    className="text-purple-100 hover:text-white transition"
                  >
                    0812 8752 1936
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href="mailto:honeybunny@gmail.com"
                    className="text-purple-100 hover:text-white transition"
                  >
                    honeybunny@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/honeybunny.therapy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-white transition"
                  >
                    @honeybunny.therapy
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start space-x-4">
                <Facebook className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Facebook</p>
                  <a
                    href="https://facebook.com/honneybunny.therapy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-100 hover:text-white transition"
                  >
                    honneybunny.therapy
                  </a>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Jam Operasional</p>
                  <p className="text-purple-100">08.00-16.00 WIB</p>
                </div>
              </div>

            </div>
          </div>

          {/* MAP / FOTO */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Lokasi Kami
            </h3>

            <div className="relative rounded-xl overflow-hidden h-100 group shadow-md">
              <Image
                src="/assets/lokasi.jpeg"
                alt="Honey Bunny Child Development Center"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <a
                href="https://maps.app.goo.gl/NzzicZVQZS8HWrdB8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-purple-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white text-center"
              >
                <MapPin className="w-16 h-16 mb-3" />
                <p className="font-semibold text-lg mb-1">
                  Lihat di Google Maps
                </p>
                <p className="text-sm opacity-90">Klik untuk membuka peta</p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
