"use client";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Fasilitas() {
  const fasilitas = [
    { img: "/assets/Ruang terapi Perilaku ABA.jpeg", name: "Ruang terapi Perilaku /ABA" },
    { img: "/assets/Ruang terapi Sensori Integrasi.jpeg", name: "Ruang terapi Sensori Integrasi" },
    { img: "/assets/Ruang terapi Sensori Integrasi-2.jpeg", name: "Ruang terapi Sensori Integrasi" },
    { img: "/assets/Ruang terapi wicara.jpeg", name: "Ruang terapi wicara" },
    { img: "/assets/Ruang tunggu.jpeg", name: "Ruang tunggu" },
  ];

  return (
    <section id="Fasilitas" className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">

      <div className="max-w-7xl mx-auto pb-10 px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Fasilitas Kami
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan fasilitas yang nyaman dan ramah anak untuk mendukung proses terapi dan konsultasi.
          </p>
        </div>

        {/* Grid Fasilitas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fasilitas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-purple-100 overflow-hidden transform hover:-translate-y-2 transition"
            >
              <div className="relative w-full aspect-[2/3]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* Nama Fasilitas */}
              <div className="p-5 text-center border-t bg-white">
                <h3 className="text-lg font-semibold text-purple-600">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Lingkungan Nyaman & Aman
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Semua ruangan kami dirancang agar anak-anak merasa tenang dan bahagia selama proses terapi. 
            Kami juga memastikan kebersihan dan keamanan menjadi prioritas utama.
          </p>
        </div>

      </div>

    </section>
  );
}
