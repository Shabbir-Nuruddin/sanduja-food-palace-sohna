import "@fontsource/baloo-2/600.css";
import "@fontsource/baloo-2/800.css";
import type { Site } from "./lib";

export const SITE: Site = {
  name: "Sanduja Food Palace",
  sub: { en: "Pure vegetarian · Gurgaon–Sohna main road, Sohna", hi: "शुद्ध शाकाहारी · गुड़गांव–सोहना मेन रोड, सोहना" },
  banner: { en: "Party hall and catering: call to plan your function", hi: "पार्टी हॉल और कैटरिंग: अपने फ़ंक्शन के लिए कॉल करें" },
  phone: "919896296629",
  phoneDisplay: "+91 98962 96629",
  lat: 28.2494427,
  lon: 77.0709046,
  hours: [[8, 23], [8, 23], [8, 23], [8, 23], [8, 23], [8, 23], [8, 23]],
  theme: {
    dark: true,
    bg: "#0b1410",
    bg2: "#112019",
    panel: "#16271f",
    ink: "#f3efe4",
    ink2: "#c4c6b8",
    ink3: "#86917f",
    line: "#24392d",
    accent: "#f39c2b",
    onAccent: "#2b1600",
    display: "Baloo 2",
    weight: 800,
    upper: false,
  },
  scene: "tandoor",
  align: "left",
  hero: {
    title: [
      { en: "Straight from the tandoor,", hi: "सीधे तंदूर से," },
      { en: "pure veg since breakfast.", hi: "सुबह से शुद्ध शाकाहारी।" },
    ],
    proof: {
      en: "4.1 on Google from 565 reviews. Butter dal, soya chaap, tawa rotis and a party hall on the Sohna main road, open from 8am.",
      hi: "गूगल पर 565 रिव्यू से 4.1। बटर दाल, सोया चाप, तवा रोटी और पार्टी हॉल, सोहना मेन रोड पर, सुबह 8 बजे से।",
    },
    fallback: "/img/p1.jpg",
  },
  marquee: ["Butter Dal", "Soya Chaap", "Tandoori Mushroom", "Paneer Butter Masala", "Aloo Paratha", "Tawa Butter Roti", "Pudina Chutney", "Garlic Naan"],
  dishes: {
    title: { en: "What regulars order", hi: "रेगुलर ग्राहक क्या मंगाते हैं" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "list",
    items: [
      { name: { en: "Butter Dal", hi: "बटर दाल" }, quote: "Their Butter dal is out of this world with Roti and Garlic naan.", img: "/img/p2.jpg" },
      { name: { en: "Soya Chaap", hi: "सोया चाप" }, quote: "The finest soya chaap in the world!!! A vegetarian’s delight!" },
      { name: { en: "Tandoori Mushroom", hi: "तंदूरी मशरूम" }, quote: "Tandoori vegetarian items are too good. I tested tandoori mushrooms truly awesome." },
      { name: { en: "Paneer Butter Masala", hi: "पनीर बटर मसाला" }, quote: "had tasted its PANEER BUTTER MASALA and become a fan of it" },
      { name: { en: "Aloo Paratha", hi: "आलू पराठा" }, quote: "Their aaloo Paratha is also nice to have." },
      { name: { en: "Tawa Roti & Pudina Chutney", hi: "तवा रोटी और पुदीना चटनी" }, quote: "U must enjoy tawa butter roti nd prathey.. n one thing is also intresting .. pudina ki chatni .. m loving it", img: "/img/p2.jpg" },
    ],
  },
  gallery: {
    title: { en: "Inside Sanduja", hi: "संदूजा के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p1.jpg", alt: "Dining hall at Sanduja Food Palace", wide: true },
      { src: "/img/p2.jpg", alt: "Dal with rotis" },
      { src: "/img/p3.jpg", alt: "Dining room seating" },
      { src: "/img/p4.jpg", alt: "Sanduja storefront with party hall and caterers sign", wide: true },
    ],
  },
  feature: {
    kind: "occasions",
    title: { en: "A party hall that feeds the whole family", hi: "पार्टी हॉल, पूरे परिवार के खाने के साथ" },
    body: { en: "Renovated hall, family seating and a menu built around your function.", hi: "नया बना हॉल, फ़ैमिली सीटिंग और आपके फ़ंक्शन के हिसाब से मेन्यू।" },
    img: "/img/p1.jpg",
    items: [
      { label: { en: "Family parties", hi: "फ़ैमिली पार्टी" }, quote: "The newly renovated place is ideal for parties with family and friends." },
      { label: { en: "Small functions", hi: "छोटे फ़ंक्शन" }, quote: "sitting arrangements specially for families and small functions are excellent" },
      { label: { en: "Catering", hi: "कैटरिंग" }, quote: "The bespoke menu was crafted to our precise specifications and delivered with impeccable timing." },
      { label: { en: "Weekend outings", hi: "वीकेंड आउटिंग" }, quote: "Nice place for family food n fun" },
    ],
  },
  reviews: {
    title: { en: "Clean, simple, worth the stop", hi: "साफ़, सादा, रुकने लायक" },
    rating: 4.1,
    dist: [277, 148, 80, 21, 39],
    quotes: [
      { quote: "In my trip to Delhi, this is my Only food stop!! Food is clean and simple unlike others which serve highly fatty heavy food!!", stars: 5 },
      { quote: "A nice restaurant. Purely vegetarian. Preparation of food is very hygienic. Rates are reasonable.", stars: 5 },
      { quote: "Had dal fry mix veg and tawa roti, brilliant taste. And completely hygienic.", stars: 5 },
    ],
  },
  visit: {
    title: { en: "On the Sohna main road", hi: "सोहना मेन रोड पर" },
    img: "/img/p4.jpg",
    alt: "Sanduja Food Palace storefront",
    address: { en: "Gurgaon–Sohna main road (Delhi–Alwar Rd), near the bus stand, Sohna", hi: "गुड़गांव–सोहना मेन रोड (दिल्ली–अलवर रोड), बस स्टैंड के पास, सोहना" },
    note: { en: "Open from 8am, so breakfast parathas are on.", hi: "सुबह 8 बजे से खुला, नाश्ते में पराठे मिलते हैं।" },
  },
  waHello: {
    en: "Hi Sanduja Food Palace, I'd like to ask about the party hall / catering. Date: , people: ",
    hi: "नमस्ते संदूजा फ़ूड पैलेस, मुझे पार्टी हॉल / कैटरिंग के बारे में पूछना है। तारीख़: , लोग: ",
  },
  order: ["dishes", "feature", "reviews", "gallery", "visit"],
};
