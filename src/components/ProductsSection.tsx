import React from 'react';
import { Link } from 'react-router-dom';

import Product from './Product';
import { IProduct } from '../@types/custom';

const ProductsSection: React.FC = () => {
  const [products, setProducts] = React.useState<IProduct[]>([
    {
      _id: 1,
      brandId: 2,
      createdAt: 1678981045,
      images: ['/1/1.webp', '/1/2.webp', '/1/3.webp'],
      price: 790.9,
      rating: 4.8,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      title: 'Celine hoodie in cotton fleece black / white',
      description:
        '100% COTTON\nCELINE PRINT HOOD\nLOOSE FIT\nCREW NECK WITH HOOD WITH ADJUSTABLE DRAWSTRING AND CELINE-ENGRAVED METAL AGLETS\nRIBBED TRIM ON THE WAISTBAND AND CUFFS\n1 KANGAROO POUCH VENT\nZIPPERED CLOSURE\nMADE IN ITALY\nREFERENCE : 2Y497670Q.38AW',
    },
    {
      _id: 2,
      brandId: 8,
      createdAt: 1681133912,
      images: ['/2/1.webp', '/2/2.webp', '/2/3.jpg', '/2/4.webp', '/2/5.jpg'],
      price: 790.9,
      rating: 4.2,
      sizes: ['S', 'M', 'L', 'XL'],
      title: 'Vetements Black hoodie with logo',
    },
    {
      _id: 3,
      brandId: 8,
      createdAt: 1681093210,
      images: ['/3/1.jpg', '/3/2.jpg', '/3/3.jpg', '/3/4.jpg', '/3/5.jpg'],
      price: 790.9,
      rating: 4.5,
      sizes: ['S', 'M', 'L', 'XL'],
      title: 'VETEMENTS WHITE T-SHIRT WITH LOGO PRINT',
    },
    {
      _id: 4,
      brandId: 7,
      createdAt: 1681046907,
      images: ['/4/1.jpg', '/4/2.jpg', '/4/3.jpg', '/4/4.jpg'],
      price: 790.9,
      rating: 4.6,
      sizes: ['40', '41', '42', '43', '44'],
      title: 'DR. MARTENS X RICK OWENS FW22 STROBE 1460',
      description:
        'DR. MARTENS X RICK OWENS FW22 STROBE 1460 DR MARTENS BLACK BOOT IN MATTE GRAINY COW LEATHER. \n\nTHESE DR. MARTENS ICONIC 1460 BOOTS ARE REIMAGINED BY RICK OWENS AND HAVE JUMBO PEARL LACES AND PALLADIUM FINISH HARDWARE INCLUDING EXAGGERATED EYELETS AND SIDE ZIPPER. THE BOOT FEATURES AN EXTENDED GEOMETRIC TONGUE AND HAS A WOVEN DR MARTENS AIRWARE HEEL LOOP IN BLACK AND PEARL. THEY HAVE A 4CM HIGH DR MARTENS QUAD SOLE WITH THE DR MARTENS YELLOW WELT STITCH.\n\n* COLOR: BLACK\n\n* MATERIAL: UPPER 100% COW LEATHER\n\n* LINING: 100% COW LEATHER\n\n* INSOLE: 100% COW LEATHER\n\n* SOLE: 100% POLIVINILCLORURO\n\nPLEASE NOTE THE SHOE SIZE LISTED ON THE PRODUCT DESCRIPTION PAGE CORRESPONDS TO UK SHOE SIZE.\n\nWE STRONGLY RECOMMEND OUR CLIENTS TO CHECK THE SIZE CHART BEFORE PLACING AN ORDER TO AVOID ANY POTENTIAL INCONVENIENCE.\n\nFEEL FREE TO CONTACT CUSTOMERCARE@RICKOWENS.EU FOR ANY ASSISTANCE.\n\nONVENIENCE. FEEL FREE TO CONTACT CUSTOMERCARE@RICKOWENS.EU FOR ANY ASSISTANCE.',
    },
    {
      _id: 5,
      brandId: 7,
      createdAt: 1680998336,
      images: ['/5/1.jpg', '/5/2.jpg', '/5/3.jpg'],
      price: 790.9,
      rating: 3.9,
      title: 'DRKSHDW',
      description:
        'CONVERSE X DRKSHDW PERFORMANCE CAP.\n\nPERFORMANCE CAP IN PREMIUM WATERPROOF\nNYLON, WITH SOFT CROWN, SNUG\nFIT. PENTAGRAM LOGO PRINTED ON FRONT,\nFOUR VENT EYELETS, 6 PANEL CONSTRUCTION,\nADJUSTABLE BACK STRAP.\n\nBLACK WITH PEARL LOGO PRINT.\n\n* MATERIAL: 100%NYLON',
    },
    {
      _id: 6,
      brandId: 2,
      createdAt: 1680955653,
      images: ['/6/1.webp', '/6/2.webp', '/6/3.webp', '/6/4.webp'],
      price: 790.9,
      rating: 4.2,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      title: 'CELINE POLAR JACKET IN CAMOUFLAGE FLEECE',
      description:
        '100% POLYESTER\n54% CUPRO 46% VISCOSE LINING\nCELINE EMBROIDERY\nLOOSE FIT\nHIGH COLLAR\n2 DIAGONAL ZIP POCKETS\nZIP CLOSURE\nMADE IN ITALY\nREFERENCE : 2Y905710S.02QO',
    },
    {
      _id: 7,
      brandId: 8,
      createdAt: 1680912230,
      images: ['/1/1.webp', '/1/2.webp'],
      price: 790.9,
      rating: 4.3,
      title: 'VETEMENTS BLACK LEATHER BACKPACK WITH LOGO',
    },
    {
      _id: 8,
      brandId: 6,
      createdAt: 1680866189,
      images: ['/8/1.webp', '/8/2.webp'],
      price: 790.9,
      rating: 4.7,
      sizes: ['40', '43', '44', '45'],
      title: 'JORDAN 1 RETRO HIGH OG STEALTH',
    },
    {
      _id: 9,
      brandId: 6,
      createdAt: 1680820546,
      images: ['/9/1.webp', '/9/2.webp', '/9/3.webp', '/9/4.webp', '/9/5.webp'],
      price: 790.9,
      rating: 4.5,
      sizes: ['39', '40', '41', '42', '44'],
      title: 'AIR JORDAN 1 RETRO HIGH OG PINE GREEN 2.0',
    },
    {
      _id: 10,
      brandId: 6,
      createdAt: 1680774605,
      images: ['/10/1.webp'],
      price: 790.9,
      rating: 4.4,
      sizes: ['39', '40', '41', '42', '43'],
      title: 'AIR JORDAN 1 RETRO HIGH OG CRIMSON TINT',
    },
    {
      _id: 11,
      brandId: 6,
      createdAt: 1680734372,
      images: [
        '/11/1.webp',
        '/11/2.webp',
        '/11/3.webp',
        '/11/4.webp',
        '/11/5.webp',
      ],
      price: 790.9,
      rating: 4.5,
      sizes: ['40', '41', '42', '43', '44'],
      title: 'AIR JORDAN 1 RETRO HIGH OG DEFIANT SB NYC TO PARIS',
    },
    {
      _id: 12,
      brandId: 6,
      createdAt: 1680698851,
      images: [
        '/12/1.webp',
        '/12/2.webp',
        '/12/3.webp',
        '/12/4.webp',
        '/12/5.webp',
      ],
      price: 790.9,
      rating: 4.3,
      sizes: ['43', '44'],
      title: 'AIR JORDAN 1 RETRO HIGH OG NEUTRAL GREY',
    },
    {
      _id: 13,
      brandId: 5,
      createdAt: 1680653310,
      images: [
        '/13/1.webp',
        '/13/2.webp',
        '/13/3.webp',
        '/13/4.webp',
        '/13/5.webp',
      ],
      price: 790.9,
      rating: 4.6,
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      title: 'Nike Air Max Pulse',
      description:
        'Keeping it real, the Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line. Its textile-wrapped midsole and vacuum-sealed accents keep ‘em looking fresh and clean, while colors inspired by the London music scene give your look the edge. Point-loaded Air cushioning—revamped from the incredibly plush Air Max 270—delivers better bounce, helping you push past your limits.',
    },
    {
      _id: 14,
      brandId: 5,
      createdAt: 1680615539,
      images: ['/14/1.jpg', '/14/2.jpg', '/14/3.jpg', '/14/4.jpg'],
      price: 790.9,
      rating: 4.2,
      title: 'Jordan Monogram Backpack',
      description:
        'Carry your stuff in DNA style with this spacious backpack. Inside the main zippered compartment there is a laptop sleeve. Toss items you need quick and easy access to in the front zip pocket. The adjustable padded straps provide comfortable wear.',
    },
    {
      _id: 15,
      brandId: 5,
      createdAt: 1680568258,
      images: [
        '/15/1.webp',
        '/15/2.webp',
        '/15/3.webp',
        '/15/4.jpg',
        '/15/5.jpg',
      ],
      price: 790.9,
      rating: 4.7,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      title: 'Nike Tech Fleece',
      description:
        'Our Tech Fleece Hoodie elevates a layering essential with premium, low-profile warmth. Signature details like contrast taped trim and bonded pockets provide an elevated look. The roomy fit and articulation at the shoulders and sleeves creates a more natural shape for relaxed comfort and easy movement.',
    },
    {
      _id: 16,
      brandId: 5,
      createdAt: 1680519637,
      images: [
        '/16/1.webp',
        '/16/2.webp',
        '/16/3.webp',
        '/16/4.webp',
        '/16/5.webp',
        '/16/6.webp',
      ],
      price: 790.9,
      rating: 4.9,
      sizes: ['44', '45'],
      title: "Nike Air Force 1 '07 FlyEase",
      description:
        "Quicker than 1, 2, 3—the original hoops shoe lets you step in and get going. Its easy-entry FlyEase system gives you a hands-free experience, while crisp leather dons the cleanest color for ultimate wearability. Yeah, it's everything you love and then some.",
    },
    {
      _id: 17,
      brandId: 2,
      createdAt: 1680485684,
      images: [
        '/17/1.webp',
        '/17/2.webp',
        '/17/3.webp',
        '/17/4.webp',
        '/17/5.webp',
      ],
      price: 790.9,
      rating: 4.5,
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      title: 'CT-06 HIGH TOP SNEAKER IN CALFSKIN & LAMINATED CALFSKIN',
      description:
        '100% CALFSKIN\n100 % TEXTILE LINING\n0.2 IN (5 MM) HEEL\nROUND TOE SHAPE\nTHIN PERFORATIONS ON THE UPPER\nGRAPHIC LEATHER CUT OUTS\nPADDED COLLAR AROUND THE ANKLE FOR GREAT COMFORT\nLACING TAB WITH CELINE DEBOSSED LOGO\nCELINE SIGNATURE AT THE BACK AND ON THE TONGUE\n"CT-06" NOMENCLATURA IS EMBOSSED ON THE SIDE OF THE SNEAKER\nCELINE DEBOSSED SIGNATURE ON THE EXTERNAL SIDE OF THE UPPER\nCOTTON LACES\nTEXTILE INSOLE\nRUBBER OUTSOLE\nTHE SHOES RUN LARGE, IF YOU ARE IN BETWEEN TWO SIZES, PLEASE ORDER THE SIZE DOWN\nMADE IN ITALY\nREFERENCE : 353133843C.01UF',
    },
    {
      _id: 18,
      brandId: 4,
      createdAt: 1680437843,
      images: ['/18/1.webp', '/18/2.webp', '/18/3.webp', '/18/4.webp'],
      price: 790.9,
      rating: 4.4,
      sizes: ['M', 'L', 'XL'],
      title: 'MONCLER BLACK T-SHIRT WITH LOGO',
    },
    {
      _id: 19,
      brandId: 8,
      createdAt: 1680388512,
      images: [
        '/19/1.webp',
        '/19/2.webp',
        '/19/3.webp',
        '/19/4.webp',
        '/19/5.jpg',
      ],
      price: 790.9,
      rating: 4.6,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      title: 'VETEMENTS DOUBLE-SIDED JACKET IN CAMOUFLAGE PRINT',
    },
    {
      _id: 20,
      brandId: 7,
      createdAt: 1680341971,
      images: ['/20/1.jpg', '/20/2.jpg', '/20/3.jpg', '/20/4.jpg'],
      price: 790.9,
      rating: 4.6,
      sizes: ['42', '43', '44', 'L', 'XL'],
      title:
        'RICK OWENS SS23 EDFU RUNWAY GEO GETH RUNNER IN FULL GRAIN CALF LEATHER',
      description:
        'RICK OWENS SS23 EDFU RUNWAY GEO GETH RUNNER IN FULL GRAIN CALF LEATHER\n\nTHESE GETH GEO RUNNERS ARE UNDER ANKLE HEIGHT. THEY FEATURE AN INTEGRATED ANGLED SIDE STRIPE, A THICK GEOMETRIC SOLE WITH AN ANGLED EXTENDED HEEL AND A STRIP OF COTTON WEBBING RUNNING UP THE TONGUE. THIS VERSION HAS AN INTERNAL STRUCTURE AND CAN BE WORN WITH OR WITHOUT LACES.\n\nTHIS FULL GRAIN CALF LEATHER HAS A SEMI-SHINE FINISH.\n\n* COLOR: MILK/BLACK/MILK\n\n* MATERIAL: UPPER 100% CALF LEATHER\n\n* DETAIL 100% BULL LEATHER\n\n* LINING 100% CALF LEATHER\n\n* INSOLE 100% CALF LEATHER\n\n* SOLE 100% E.V.A',
    },
    {
      _id: 21,
      brandId: 5,
      createdAt: 1680295210,
      images: [
        '/21/1.webp',
        '/21/2.webp',
        '/21/3.webp',
        '/21/4.webp',
        '/21/5.webp',
      ],
      price: 790.9,
      rating: 4.7,
      sizes: ['40', '42', '43', 'L', 'XL'],
      title: 'Nike Air Tuned Max',
      description:
        "Just like the original design, the Nike Air Tuned Max brings you cutting-edge innovation and fine-tuned comfort. Born from Nike's clandestine and bygone Alpha Project, the sleek, track-inspired design nods to the fast-paced division that brought you the Presto and so much more. Shimmering finishes and visible Air cushioning underfoot make a seismic statement in fashion and luxury.",
    },
    {
      _id: 22,
      brandId: 1,
      createdAt: 1680253279,
      images: ['/22/1.jpg', '/22/2.jpg', '/22/3.jpg', '/22/4.jpg', '/22/5.jpg'],
      price: 790.9,
      rating: 4.5,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      title: '1AA4IN Printed Allover Hoodie',
      description:
        " - 100% Cotton\n - Multicolor\n - Regular Fit\n - Model wears a FR M size\n - Model measurements : chest 36’’ / 92 cm, height 6' 0,1/2’’ 0 / 184 cm\n - Made in Italy",
    },
    {
      _id: 23,
      brandId: 4,
      createdAt: 1680203698,
      images: [
        '/23/1.jpg',
        '/23/2.webp',
        '/23/3.webp',
        '/23/4.webp',
        '/23/5.jpg',
      ],
      price: 790.9,
      rating: 4.2,
      sizes: ['S', 'L', 'XL', 'XXL'],
      title: 'MONCLER GREEN DOWN VEST PARKE',
    },
    {
      _id: 24,
      brandId: 2,
      createdAt: 1680152787,
      images: ['/24/1.webp', '/24/2.webp', '/24/3.webp', '/24/4.webp'],
      price: 790.9,
      rating: 4.4,
      sizes: ['39', '40', '41', '42', '43', '44', '45'],
      title:
        'CT-07 CELINE TRAINER LOW LACE-UP SNEAKER IN CALFSKIN & ZEBRA STAMPED CALFSKIN',
      description:
        '100% CALFSKIN\n100 % TEXTILE LINING\n0.2 IN (5 MM) HEEL\nROUND TOE SHAPE\nTHIN PERFORATIONS ON THE UPPER\nGRAPHIC LEATHER CUT OUTS\nPADDED COLLAR AROUND THE ANKLE FOR GREAT COMFORT\nLACING TAB WITH CELINE DEBOSSED LOGO\nCELINE SIGNATURE AT THE BACK AND ON THE TONGUE\n"CT-07" NOMENCLATURA IS EMBOSSED ON THE SIDE OF THE SNEAKER\nCELINE DEBOSSED SIGNATURE ON THE EXTERNAL SIDE OF THE UPPER\nCOTTON LACES\nTEXTILE INSOLE\nRUBBER OUTSOLE\nTHE SHOES RUN LARGE, IF YOU ARE IN BETWEEN TWO SIZES, PLEASE ORDER THE SIZE DOWN\nMADE IN ITALY\nREFERENCE : 353143841C.01OK',
    },
    {
      _id: 25,
      brandId: 4,
      createdAt: 1680107132,
      images: [
        '/25/1.webp',
        '/25/2.webp',
        '/25/3.webp',
        '/25/4.webp',
        '/25/5.webp',
      ],
      price: 790.9,
      rating: 4.3,
      sizes: ['XS', 'S', 'M', 'L'],
      title: 'MONCLER WHITE T-SHIRT WITH A PRINT',
    },
    {
      _id: 26,
      brandId: 1,
      createdAt: 1680075429,
      images: [
        '/26/1.webp',
        '/26/2.webp',
        '/26/3.webp',
        '/26/4.webp',
        '/26/5.webp',
        '/26/6.webp',
      ],
      price: 790.9,
      rating: 4.5,
      title: 'Bag S/S 2007 Limited Edition Monogram Riveting',
      description:
        ' - bag\n - genuine leather\n - bag model S/S 2007 Limited Edition Monogram Riveting\n - zipper and magnet closure\n - golden fittings\n - one compartment with a zipper, two patch pockets, two compartments with a magnet, two side pockets with a zipper\n - without branded packaging\n - has an Entrupy certificate',
    },
    {
      _id: 27,
      brandId: 3,
      createdAt: 1680026638,
      images: [
        '/27/1.webp',
        '/27/2.webp',
        '/27/3.webp',
        '/27/4.webp',
        '/27/5.webp',
      ],
      price: 790.9,
      rating: 4.6,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      title: 'BALENCIAGA BLACK SHIRT WITH LOGO PRINT',
    },
    {
      _id: 28,
      brandId: 3,
      createdAt: 1679978435,
      images: [
        '/28/1.webp',
        '/28/2.webp',
        '/28/3.webp',
        '/28/4.jpg',
        '/28/5.webp',
      ],
      price: 790.9,
      rating: 4.7,
      sizes: ['40', '41', '42', '43', '44'],
      title: 'BALENCIAGA WHITE SLIDERS WITH CONTRASTING LOGO',
    },
    {
      _id: 29,
      brandId: 4,
      createdAt: 1679944996,
      images: [
        '/29/1.webp',
        '/29/2.webp',
        '/29/3.webp',
        '/29/4.webp',
        '/29/5.jpg',
      ],
      price: 790.9,
      rating: 4.5,
      sizes: ['S', 'M', 'L', 'XXL'],
      title: 'MONCLER BLUE SWEATSHIRT WITH LOGO',
    },
    {
      _id: 30,
      brandId: 7,
      createdAt: 1679898693,
      images: ['/30/1.jpg', '/30/2.jpg', '/30/3.jpg', '/30/4.jpg'],
      price: 790.9,
      rating: 4.1,
      sizes: ['40', '43', '44'],
      title: 'RICK OWENS SS23 EDFU SLIDE GRANOLAS IN BLACK PEACHED LAMBSKIN',
      description:
        'RICK OWENS SS23 EDFU SLIDE GRANOLAS IN BLACK PEACHED LAMBSKIN\n\nTHESE SLIDE GRANOLA ARE SLIP ONS AND HAVE A HEAVILY PADDED WIDE FRONT STRAP WITH A SCULPTED FOOTBED.\n\nTHIS LEATHER IS LIGHTWEIGHT AND HAS A SOFT NATURAL PEACHSKIN HANDFEEL.\n\n* COLOR: BLACK\n\n* MATERIAL: UPPER 100% LAMB LEATHER\n\n* LINING 100% CALF LEATHER\n\n* PADDING 100% POLYESTER\n\n* PLANTAR FACING 100% CALF LEATHER\n\n* SOLE 100% RUBBER',
    },
  ]);

  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between ">
          <h3 className="font-semibold text-3xl capitalize ">People choose</h3>
          <Link
            to="/catalog"
            className="inline-flex gap-2 items-center text-lg text-zinc-800"
          >
            Go to catalog{' '}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-6 gap-5">
          {products.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
