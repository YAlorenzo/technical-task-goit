import { event1, event2, partner1, partner10, partner11, partner12, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, reason1Icon, reason2Icon, reason3Icom, reason4Icon, reason5Icon, service1Img, service2Img, service3Img, step1Icon, step2Icon, step3Icon } from "../assets";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Catalog",
    path: "/catalog",
  },
  {
    name: "Favorites",
    path: "/favorites",
  },
];
export const partnersDesktop = [
  {
    name: "group1",
    partners: [
      {
        name: "partner1",
        logo: partner1,
      },
      {
        name: "partner2",
        logo: partner2,
      },
      {
        name: "partner3",
        logo: partner3,
      },
      {
        name: "partner4",
        logo: partner4,
      },
    ],
  },
  {
    name: "group2",
    partners: [
      {
        name: "partner5",
        logo: partner5,
      },
      {
        name: "partner6",
        logo: partner6,
      },
      {
        name: "partner7",
        logo: partner7,
      },
      {
        name: "partner8",
        logo: partner8,
      },
    ],
  },
  {
    name: "group3",
    partners: [
      {
        name: "partner9",
        logo: partner9,
      },
      {
        name: "partner10",
        logo: partner10,
      },
      {
        name: "partner11",
        logo: partner11,
      },
      {
        name: "partner12",
        logo: partner12,
      },
    ],
  },
];

export const partnersMobile = [
  {
    name: "partner1",
    logo: partner1,
  },
  {
    name: "partner2",
    logo: partner2,
  },
  {
    name: "partner3",
    logo: partner3,
  },
  {
    name: "partner4",
    logo: partner4,
  },
  {
    name: "partner5",
    logo: partner5,
  },
  {
    name: "partner6",
    logo: partner6,
  },
  {
    name: "partner7",
    logo: partner7,
  },
  {
    name: "partner8",
    logo: partner8,
  },
  {
    name: "partner9",
    logo: partner9,
  },
  {
    name: "partner10",
    logo: partner10,
  },
  {
    name: "partner11",
    logo: partner11,
  },
  {
    name: "partner12",
    logo: partner12,
  },
];

export const eventCards = [
  {
    name: "wedding",
    title: "Car rental for a wedding",
    text: "We provide premium car rental for weddings with a driver",
    photo: event2
  },
  {
    name: "photoshoots",
    title: "Car rental for photo shoots",
    text: "We provide rental of premium cars for photo shoots or video shooting",
    photo: event1
  },
];
export const stepsCards = [
  {
    name: "step1",
    title: "Apply now",
    text: "You fill out an application on the website, contact by phone or messenger and reserve a car",
    icon: step1Icon,
  },
  {
    name: "step2",
    title: "Agreement",
    text: "Sign a car rental agreement, make a payment and a security deposit",
    icon: step2Icon,
  },
  {
    name: "step3",
    title: "Receipt",
    text: "Pick up the car in our showroom or we can deliver it anywhere in Ukraine",
    icon: step3Icon,
  },
];
export const servicesCards = [
  {
    name: "service1",
    title: "We deliver cars anywhere in Ukraine",
    img: service1Img,
  },
  {
    name: "service2",
    title: "Car rental with personal driver",
    img: service2Img,
  },
  {
    name: "service3",
    title: "Replacement driver",
    img: service3Img,
  },
];

export const reasonsCards = [
  {
    name: "reasons1",
    group: [
      {
        name: "reason1",
        title: "Insurance",
        text: "All our cars are insured under OSAGO AND CASCO",
        icon: reason1Icon,
      },
      {
        name: "reason2",
        title: "Price policy",
        text: "Always affordable prices and nice bonuses for regular customers",
        icon: reason2Icon,
      },
      {
        name: "reason3",
        title: "Car park",
        text: "The entire fleet is in excellent condition and is always replenished with new models",
        icon: reason3Icom,
      },
    ],
  },
  {
    name: "reasons2",
    group: [
      {
        name: "reason4",
        title: "Price policy",
        text: "Always affordable prices and nice bonuses for regular customers",
        icon: reason2Icon,
      },
      {
        name: "reason5",
        title: "Payment",
        text: "Any form of payment convenient for you (cash/non-cash, bank transfer)",
        icon: reason4Icon,
      },
      {
        name: "reason6",
        title: "Speed",
        text: "Rent any car in no more than 15 minutes",
        icon: reason5Icon,
      },
    ],
  },
]; 

export const brandsCars = [
  { make: "All brands", value: " " },
  { make: "Volvo", value: "volvo" },
  { make: "Buick", value: "buick" },
  { make: "Hummer", value: "hummer" },
  { make: "Subaru", value: "subaru" },
  { make: "Mitsubishi", value: "mitsubishi" },
  { make: "Nissan", value: "nissan" },
  { make: "Lincoln", value: "lincoln" },
  { make: "GMC", value: "gmc" },
  { make: "Hyundai", value: "hyundai" },
  { make: "MINI", value: "mini" },
  { make: "Bentley", value: "bentley" },
  { make: "Mercedes-Benz", value: "mercedes-Benz" },
  { make: "Aston Martin", value: "aston Martin" },
  { make: "Pontiac", value: "pontiac" },
  { make: "Lamborghini", value: "lamborghini" },
  { make: "Audi", value: "audi" },
  { make: "BMW", value: "bmw" },
  { make: "Chevrolet", value: "chevrolet" },
  { make: "Toyota", value: "toyota" },
  { make: "Honda", value: "honda" },
  { make: "Ford", value: "ford" },
  { make: "Volkswagen", value: "volkswagen" },
  { make: "Lexus", value: "lexus" },
  { make: "Tesla", value: "tesla" },
  { make: "Jeep", value: "jeep" },
  { make: "Kia", value: "kia" },
  { make: "Mazda", value: "mazda" },
];

export const pricesCars = [
  { price: 20 },
  { price: 30 },
  { price: 40 },
  { price: 50 },
  { price: 60 },
  { price: 70 },
  { price: 80 },
  { price: 90 },
  { price: 100 },
  { price: 110 },
  { price: 120 },
  { price: 130 },
  { price: 140 },
  { price: 150 },
  { price: 160 },
  { price: 170 },
  { price: 180 },
  { price: 190 },
  { price: 200 },
  { price: 210 },
  { price: 220 },
  { price: 230 },
  { price: 240 },
  { price: 250 },
  { price: 260 },
  { price: 270 },
  { price: 280 },
  { price: 290 },
  { price: 300 },
  { price: 310 },
  { price: 320 },
  { price: 330 },
  { price: 340 },
  { price: 350 },
  { price: 360 },
  { price: 370 },
  { price: 380 },
  { price: 390 },
  { price: 400 },
  { price: 410 },
  { price: 420 },
  { price: 430 },
  { price: 440 },
  { price: 450 },
  { price: 460 },
  { price: 470 },
  { price: 480 },
  { price: 490 },
  { price: 500 },
];