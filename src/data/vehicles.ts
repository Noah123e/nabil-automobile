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
    fuel: "Gasoline",
    transmission: "Automatic",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800",
    images: ["https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800"],
    condition: "Used",
    description: "Luxurious sedan with state-of-the-art technology and supreme comfort. Fully equipped with all available extras.",
    features: [
      "AIRMATIC Air Suspension",
      "MULTIBEAM LED Headlights",
      "Burmester 3D Surround Sound System",
      "Distronic Plus with Steering Assist",
      "360° Camera",
      "Panoramic Sunroof",
      "Front and Rear Massage Seats",
      "Ambient Lighting"
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
    fuel: "Gasoline",
    transmission: "Automatic",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
    images: ["https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"],
    condition: "Used",
    description: "High-performance sedan with breathtaking performance. A true M athlete for the highest demands.",
    features: [
      "M xDrive All-Wheel Drive",
      "Carbon Ceramic Brakes",
      "M Competition Package",
      "Harman Kardon Surround Sound",
      "Head-Up Display",
      "Fully Digital Cockpit",
      "M Sport Differential",
      "Laser Light"
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
    fuel: "Gasoline",
    transmission: "Automatic",
    type: "Wagon",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
    images: ["https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800"],
    condition: "Used",
    description: "The ultimate performance wagon. Combines everyday practicality with impressive sportiness.",
    features: [
      "Quattro All-Wheel Drive",
      "Matrix LED Headlights",
      "Bang & Olufsen 3D Sound",
      "RS Sport Suspension Plus",
      "Ceramic Brakes",
      "Panoramic Glass Roof",
      "RS Sport Exhaust",
      "Full LED Taillights"
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
    fuel: "Gasoline",
    transmission: "PDK",
    type: "Sports Car",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"],
    condition: "Used",
    description: "Pure motorsport for the street. The GT3 combines racetrack DNA with everyday usability.",
    features: [
      "GT3 Touring Package",
      "PASM Sport Suspension",
      "Porsche Torque Vectoring Plus",
      "Sport Chrono Package",
      "Front Axle Lift System",
      "Bose Surround Sound",
      "GT3 Sport Exhaust",
      "Alcantara Steering Wheel"
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
    fuel: "Gasoline",
    transmission: "Automatic",
    type: "Coupe",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
    images: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800"],
    condition: "Used",
    description: "Fascinating combination of performance and luxury. A grand tourer of the extra class.",
    features: [
      "AMG Performance 4MATIC+",
      "AMG Ride Control Suspension",
      "Drift Mode",
      "Burmester High-End 3D Surround",
      "AMG Track Pace",
      "Nappa Leather Exclusive",
      "Carbon Interior Package",
      "AMG Performance Exhaust"
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
    transmission: "Automatic",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800",
    images: ["https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800"],
    condition: "Used",
    description: "Powerful diesel SUV with M Performance. Perfect for family and dynamics.",
    features: [
      "M Sport Package Pro",
      "Laser Light",
      "Sky Lounge Panoramic Roof",
      "Bowers & Wilkins Diamond Sound",
      "Integral Active Steering",
      "Driving Assistant Professional",
      "M Sport Brakes",
      "Air Suspension"
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
    fuel: "Gasoline",
    transmission: "Automatic",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800",
    images: ["https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800"],
    condition: "Used",
    description: "Elegant luxury SUV with sporty character. Comfort and technology at the highest level.",
    features: [
      "Quattro All-Wheel Drive",
      "Matrix LED Headlights",
      "Virtual Cockpit Plus",
      "Bang & Olufsen 3D Sound",
      "Adaptive Air Suspension",
      "Panoramic Glass Roof",
      "360° Camera",
      "Massage Seats"
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
    fuel: "Gasoline",
    transmission: "PDK",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1606016159991-cc5c340734c7?w=800",
    images: ["https://images.unsplash.com/photo-1606016159991-cc5c340734c7?w=800"],
    condition: "Used",
    description: "Top-tier performance SUV. Porsche dynamics in SUV format.",
    features: [
      "Porsche Active Suspension",
      "Sport Chrono Package Plus",
      "Bose Surround Sound",
      "Panoramic Sunroof",
      "Sport Exhaust",
      "Matrix LED",
      "Air Suspension",
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
    fuel: "Gasoline",
    transmission: "Automatic",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1627454820516-db70ff0e6a6f?w=800",
    images: ["https://images.unsplash.com/photo-1627454820516-db70ff0e6a6f?w=800"],
    condition: "Used",
    description: "The icon among luxury SUVs. Unmistakable legend with AMG performance.",
    features: [
      "AMG Performance 4MATIC",
      "Off-Road Engineering Package",
      "Burmester 3D Surround",
      "360° Camera",
      "AMG Track Pace",
      "Nappa Leather designo",
      "Night Package AMG",
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
    fuel: "Gasoline",
    transmission: "Automatic",
    type: "Coupe",
    image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800",
    images: ["https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=800"],
    condition: "Used",
    description: "Pure M Performance in coupe format. Driving fun and dynamics at their finest.",
    features: [
      "M xDrive All-Wheel Drive",
      "Carbon Roof",
      "M Competition Package",
      "Harman Kardon Surround",
      "Head-Up Display",
      "M Sport Brakes",
      "Adaptive M Suspension",
      "M Carbon Interior"
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
    fuel: "Electric",
    transmission: "Automatic",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800",
    images: ["https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800"],
    condition: "Used",
    description: "Electric grand tourer with impressive performance. The future of sporty driving.",
    features: [
      "Quattro e-All-Wheel Drive",
      "800V Charging Technology",
      "Matrix LED Digital",
      "Bang & Olufsen 3D Sound",
      "Adaptive Air Suspension",
      "Panoramic Glass Roof",
      "Virtual Cockpit Plus",
      "Massage Seats"
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
    fuel: "Gasoline",
    transmission: "PDK",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800",
    images: ["https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800"],
    condition: "Used",
    description: "Four-door grand tourer sedan with supercar performance.",
    features: [
      "Sport Chrono Package Plus",
      "Bose Surround Sound",
      "Porsche Dynamic Chassis Control",
      "Adaptive Air Suspension",
      "Panoramic Sunroof",
      "Matrix LED",
      "Sport Exhaust",
      "Massage Seats"
    ]
  }
];

export const brands = ["Mercedes-Benz", "BMW", "Audi", "Porsche", "Mercedes-AMG"];
export const fuelTypes = ["Gasoline", "Diesel", "Hybrid", "Electric"];
export const transmissionTypes = ["Automatic", "Manual", "PDK"];
export const vehicleTypes = ["Sedan", "SUV", "Wagon", "Sports Car", "Coupe"];