export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  power: number;
  fuel: string;
  transmission: string;
  type: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
  condition: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    brand: "Mercedes-Benz",
    model: "S 500 4MATIC",
    year: 2022,
    price: 89900,
    mileage: 18500,
    power: 435,
    fuel: "Benzin",
    transmission: "Automatik",
    type: "Limousine",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800",
    images: ["https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800"],
    condition: "Gebraucht",
    description: "Luxuriöse Limousine mit modernster Technologie und höchstem Komfort. Vollausstattung mit allen verfügbaren Extras.",
    features: [
      "AIRMATIC Luftfederung",
      "MULTIBEAM LED Scheinwerfer",
      "Burmester 3D-Surround-Soundsystem",
      "Distronic Plus mit Lenkassistent",
      "360° Kamera",
      "Panorama-Schiebedach",
      "Massage-Sitze vorne und hinten",
      "Ambientebeleuchtung"
    ]
  },
  {
    id: "2",
    brand: "BMW",
    model: "M5 Competition",
    year: 2023,
    price: 124900,
    mileage: 8200,
    power: 625,
    fuel: "Benzin",
    transmission: "Automatik",
    type: "Limousine",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
    images: ["https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"],
    condition: "Gebraucht",
    description: "Hochleistungs-Limousine mit atemberaubender Performance. Ein echter M-Sportler für höchste Ansprüche.",
    features: [
      "M xDrive Allradantrieb",
      "Carbon-Keramik-Bremsen",
      "M Competition Paket",
      "Harman Kardon Surround Sound",
      "Head-Up Display",
      "Volldigitales Cockpit",
      "M Sport Differenzial",
      "Laser-Licht"
    ]
  },
  {
    id: "3",
    brand: "Audi",
    model: "RS6 Avant",
    year: 2023,
    price: 139900,
    mileage: 5800,
    power: 600,
    fuel: "Benzin",
    transmission: "Automatik",
    type: "Kombi",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
    images: ["https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800"],
    condition: "Gebraucht",
    description: "Der ultimative Performance-Kombi. Kombiniert Alltagstauglichkeit mit beeindruckender Sportlichkeit.",
    features: [
      "Quattro Allradantrieb",
      "Matrix LED Scheinwerfer",
      "Bang & Olufsen 3D Sound",
      "RS Sportfahrwerk plus",
      "Keramikbremsen",
      "Panorama-Glasdach",
      "RS Sportabgasanlage",
      "Voll-LED Heckleuchten"
    ]
  },
  {
    id: "4",
    brand: "Porsche",
    model: "911 GT3",
    year: 2022,
    price: 189900,
    mileage: 3200,
    power: 510,
    fuel: "Benzin",
    transmission: "PDK",
    type: "Sportwagen",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"],
    condition: "Gebraucht",
    description: "Purer Rennsport für die Straße. Der GT3 vereint Rennstrecken-DNA mit Alltagstauglichkeit.",
    features: [
      "GT3 Touring Paket",
      "PASM Sportfahrwerk",
      "Porsche Torque Vectoring Plus",
      "Sport Chrono Paket",
      "Liftsystem Vorderachse",
      "Bose Surround Sound",
      "GT3 Sportauspuffanlage",
      "Alcantara Lenkrad"
    ]
  },
  {
    id: "5",
    brand: "Mercedes-AMG",
    model: "GT 63 S",
    year: 2023,
    price: 159900,
    mileage: 6500,
    power: 639,
    fuel: "Benzin",
    transmission: "Automatik",
    type: "Coupé",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
    images: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800"],
    condition: "Gebraucht",
    description: "Faszinierende Kombination aus Performance und Luxus. Ein Gran Turismo der Extraklasse.",
    features: [
      "AMG Performance 4MATIC+",
      "AMG Ride Control Fahrwerk",
      "Drift Mode",
      "Burmester High-End 3D-Surround",
      "AMG Track Pace",
      "Nappa Leder Exklusiv",
      "Carbon Interieur-Paket",
      "AMG Performance Abgasanlage"
    ]
  },
  {
    id: "6",
    brand: "BMW",
    model: "X5 M50d",
    year: 2022,
    price: 79900,
    mileage: 24500,
    power: 400,
    fuel: "Diesel",
    transmission: "Automatik",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800",
    images: ["https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800"],
    condition: "Gebraucht",
    description: "Kraftvoller Diesel-SUV mit M Performance. Perfekt für Familie und Dynamik.",
    features: [
      "M Sportpaket Pro",
      "Laserlicht",
      "Sky Lounge Panoramadach",
      "Bowers & Wilkins Diamond Sound",
      "Integral Aktivlenkung",
      "Driving Assistant Professional",
      "M Sportbremse",
      "Luftfederung"
    ]
  },
  {
    id: "7",
    brand: "Audi",
    model: "Q8 55 TFSI",
    year: 2023,
    price: 94900,
    mileage: 12400,
    power: 340,
    fuel: "Benzin",
    transmission: "Automatik",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800",
    images: ["https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800"],
    condition: "Gebraucht",
    description: "Eleganter Luxus-SUV mit sportlicher Note. Komfort und Technologie auf höchstem Niveau.",
    features: [
      "Quattro Allradantrieb",
      "Matrix LED Scheinwerfer",
      "Virtual Cockpit Plus",
      "Bang & Olufsen 3D Sound",
      "Luftfederung adaptiv",
      "Panorama-Glasdach",
      "360° Kamera",
      "Massage-Sitze"
    ]
  },
  {
    id: "8",
    brand: "Porsche",
    model: "Cayenne Turbo",
    year: 2022,
    price: 149900,
    mileage: 9800,
    power: 550,
    fuel: "Benzin",
    transmission: "PDK",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1606016159991-cc5c340734c7?w=800",
    images: ["https://images.unsplash.com/photo-1606016159991-cc5c340734c7?w=800"],
    condition: "Gebraucht",
    description: "Performance-SUV der Spitzenklasse. Porsche Dynamik im SUV-Format.",
    features: [
      "Porsche Active Suspension",
      "Sport Chrono Paket Plus",
      "Bose Surround Sound",
      "Panorama-Schiebedach",
      "Sportabgasanlage",
      "Matrix LED",
      "Luftfederung",
      "Night Vision"
    ]
  },
  {
    id: "9",
    brand: "Mercedes-AMG",
    model: "G 63",
    year: 2023,
    price: 189900,
    mileage: 4200,
    power: 585,
    fuel: "Benzin",
    transmission: "Automatik",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1627454820516-db70ff0e6a6f?w=800",
    images: ["https://images.unsplash.com/photo-1627454820516-db70ff0e6a6f?w=800"],
    condition: "Gebraucht",
    description: "Die Ikone unter den Luxus-SUVs. Unverwechselbare Legende mit AMG Performance.",
    features: [
      "AMG Performance 4MATIC",
      "Off-Road Engineering Paket",
      "Burmester 3D-Surround",
      "360° Kamera",
      "AMG Track Pace",
      "Nappa Leder designo",
      "Night Paket AMG",
      "Distronic Plus"
    ]
  },
  {
    id: "10",
    brand: "BMW",
    model: "M4 Competition",
    year: 2023,
    price: 99900,
    mileage: 6800,
    power: 510,
    fuel: "Benzin",
    transmission: "Automatik",
    type: "Coupé",
    image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800",
    images: ["https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800"],
    condition: "Gebraucht",
    description: "Pure M Performance im Coupé-Format. Fahrspaß und Dynamik pur.",
    features: [
      "M xDrive Allradantrieb",
      "Carbon-Dach",
      "M Competition Paket",
      "Harman Kardon Surround",
      "Head-Up Display",
      "M Sportbremse",
      "Adaptives M Fahrwerk",
      "M Carbon Interieur"
    ]
  },
  {
    id: "11",
    brand: "Audi",
    model: "e-tron GT",
    year: 2023,
    price: 119900,
    mileage: 8600,
    power: 530,
    fuel: "Elektro",
    transmission: "Automatik",
    type: "Limousine",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800",
    images: ["https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800"],
    condition: "Gebraucht",
    description: "Elektro-Gran Turismo mit beeindruckender Performance. Die Zukunft des sportlichen Fahrens.",
    features: [
      "Quattro e-Allradantrieb",
      "800V Ladetechnologie",
      "Matrix LED Digital",
      "Bang & Olufsen 3D Sound",
      "Adaptive Luftfederung",
      "Panorama-Glasdach",
      "Virtual Cockpit Plus",
      "Massage-Sitze"
    ]
  },
  {
    id: "12",
    brand: "Porsche",
    model: "Panamera Turbo S",
    year: 2022,
    price: 169900,
    mileage: 7200,
    power: 630,
    fuel: "Benzin",
    transmission: "PDK",
    type: "Limousine",
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800",
    images: ["https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800"],
    condition: "Gebraucht",
    description: "Viertürige Gran Turismo-Limousine mit Supersportwagen-Performance.",
    features: [
      "Sport Chrono Paket Plus",
      "Bose Surround Sound",
      "Porsche Dynamic Chassis Control",
      "Luftfederung adaptiv",
      "Panorama-Schiebedach",
      "Matrix LED",
      "Sportabgasanlage",
      "Massage-Sitze"
    ]
  }
];

export const brands = ["Mercedes-Benz", "BMW", "Audi", "Porsche", "Mercedes-AMG"];
export const fuelTypes = ["Benzin", "Diesel", "Hybrid", "Elektro"];
export const transmissionTypes = ["Automatik", "Manuell", "PDK"];
export const vehicleTypes = ["Limousine", "SUV", "Kombi", "Sportwagen", "Coupé"];
