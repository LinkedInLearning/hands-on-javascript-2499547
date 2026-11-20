export const NAV = [
  { href: '#machine', label: 'The Machine' },
  { href: '/story.html', label: 'Our Story', page: true },
  { href: '#coffee', label: 'Our Coffee' },
  { href: '#menu', label: 'Menu' },
  { href: '#locations', label: 'Locations' },
  { href: '#partner', label: 'Partner' },
];

export const IMAGES = {
  render: {
    src: '/img/bean-kiosk-render',
    alt: 'The Bean Box kiosk in deep green and gold: an illuminated sign, a white robot arm beside the touchscreen, a glass hopper full of coffee beans and the words Grown in Rwanda',
  },
  concept: {
    src: '/img/bean-kiosk-concept',
    alt: 'Front view of The Bean Box: the robot arm places a cup on the pickup shelf beside the menu screen',
  },
  espresso: {
    src: '/img/bean-cup-espresso',
    alt: 'A green Bean Box cup under an espresso spout, with roasted coffee beans on the drip tray',
  },
  autumn: {
    src: '/img/bean-cup-autumn',
    alt: 'A Bean Box takeaway cup on a wooden table among autumn leaves',
    position: 'center 55%',
  },
  cherries: {
    src: '/img/cherries',
    alt: '',
  },
  cupBeans: {
    src: '/img/brand-cup-beans',
    alt: 'A white Bean Box espresso cup on a bed of roasted coffee beans, beside a tamper and portafilter',
    position: 'center 60%',
  },
  espressoPour: {
    src: '/img/brand-espresso-pour',
    alt: 'Espresso pouring from a machine into a white Bean Box cup',
    position: '62% 50%',
  },
  highlands: {
    src: '/img/highlands',
    alt: '',
  },
  farm: {
    src: '/img/rwanda-farm',
    alt: 'Red and green coffee cherries ripening on a hillside farm, with mountains behind',
    label: 'Rwanda farm photo',
    position: 'center 62%',
  },
};

export const GALLERY = [
  { ...IMAGES.render, caption: 'The Bean Box: a full coffee bar behind glass.' },
  // Add back once /img/bean-kiosk-concept is supplied:
  // { ...IMAGES.concept, caption: 'The arm places each finished cup on the pickup shelf.' },
  { ...IMAGES.espressoPour, caption: 'A fresh shot, poured into a Bean Box cup.' },
  { ...IMAGES.espresso, caption: 'Pulled to order, straight into a Bean Box takeaway cup.' },
  { ...IMAGES.autumn, caption: 'Take it with you, wherever the day goes.' },
];

export const MACHINE_FEATURES = [
  { icon: 'robot', title: 'Robotic barista', text: 'Grind, brew and hand-off, fully automated.' },
  { icon: 'cup', title: 'Fresh every cup', text: 'Made to order, never pre-poured.' },
  { icon: 'box', title: 'Small footprint', text: 'A full coffee bar in one compact unit.' },
];

export const MACHINE_CHIPS = ['Robotic', 'Fresh brew', 'Touch to order', 'Contactless'];

/** Drinks on the menu. Names only. */
export const MENU = ['Espresso', 'Americano', 'Cappuccino', 'Café Latte', 'Flat White', 'Mocha', 'Hot Chocolate'];

export const WHY = [
  { icon: 'bean', title: 'Premium Rwandan coffee', text: 'We serve Question Coffee, supporting women coffee growers in Rwanda.' },
  { icon: 'robot', title: 'Fully automated', text: 'Grinding, brewing and serving run on their own.' },
  { icon: 'touch', title: 'Self-service', text: 'Guests order on the touchscreen in a few taps.' },
  { icon: 'contactless', title: 'Contactless payments', text: 'Tap a card or phone to pay. No cash to handle.' },
  { icon: 'target', title: 'Consistent quality', text: 'The same recipe, the same precision, every cup.' },
  { icon: 'box', title: 'Compact design', text: 'A complete coffee bar in a single unit.' },
];

const venue = (slug, name, line, alt, position) => ({
  name,
  line,
  src: `/img/venue-${slug}`,
  alt,
  label: `${name} photo`,
  position,
});

export const VENUES = [
  venue(
    'mall',
    'Shopping Malls',
    'A striking attraction that turns foot traffic into sales.',
    'Shoppers on several levels of a busy shopping mall atrium',
    'center 55%'
  ),
  venue(
    'airport',
    'Airports',
    'Fast, contactless coffee for travellers on a schedule.',
    'Travellers with suitcases walking through a bright airport terminal beside floor-to-ceiling windows',
    'center 62%'
  ),
  venue(
    'university',
    'Universities',
    'Great coffee between lectures, open late for study sessions.',
    'Students studying on wide wooden steps and at tables in a university atrium',
    'center 58%'
  ),
  venue(
    'stadium',
    'Stadiums & Arenas',
    'Hot coffee for fans and event crowds, served fast so nobody misses the action.',
    'A stadium lit up at night, with the city skyline behind the field',
    'center 52%'
  ),
  venue(
    'hotel',
    'Hotels',
    'Fresh coffee for guests at any hour, with no extra staff.',
    'A bright hotel lobby with lounge chairs, potted palms and polished marble floors',
    'center 50%'
  ),
  venue(
    'office',
    'Offices',
    'Café-quality coffee for your team without leaving the floor.',
    'A bright office building lobby with lounge chairs and a marble reception desk',
    'center 60%'
  ),
];

export const INQUIRY_TYPES = [
  {
    value: 'buy',
    title: 'Buy a machine',
    text: 'Own a Bean Box outright.',
    submit: 'Request pricing',
  },
  {
    value: 'lease',
    title: 'Lease or rent',
    text: 'Flexible terms, lower upfront cost.',
    submit: 'Request lease options',
  },
  {
    value: 'host',
    title: 'Host one at my venue',
    text: 'We place and run it; you share revenue.',
    submit: 'Check if my venue qualifies',
  },
  {
    value: 'partner',
    title: 'Partner or distribute',
    text: 'Bring The Bean Box to your region.',
    submit: 'Start the conversation',
  },
];

export const LEASE_TERMS = ['Under 12 months', '12 months', '24 months', '36 months or more', 'Not sure yet'];
export const FOOT_TRAFFIC = ['Under 200 people', '200–500 people', '500–1,000 people', '1,000–5,000 people', 'More than 5,000 people'];

/** The four steps shown in the strip under the hero. */
export const STEPS = [
  { icon: 'touch', label: 'Order on screen' },
  { icon: 'contactless', label: 'Pay contactless' },
  { icon: 'robot', label: 'Watch it brew' },
  { icon: 'cup', label: 'Take your cup' },
];

/** Origin story tabs. Keep to verified facts: the origin details live in config.origin. */
export const ORIGIN_TABS = [
  {
    id: 'farm',
    label: 'The growers',
    title: 'Grown in Rwanda',
    text: 'Our coffee comes from Question Coffee, which provides a retail market for the women coffee growers enrolled in Sustainable Growers Rwanda trainings.',
    image: IMAGES.farm,
    showFacts: true,
  },
  {
    id: 'grinder',
    label: 'The grinder',
    title: 'Ground when you order',
    text: 'Whole beans wait in the hopper. Nothing is ground until you tap your order.',
    image: IMAGES.espresso,
  },
  {
    id: 'cup',
    label: 'The cup',
    title: 'Brewed fresh for you',
    text: 'Made to order, never pre-poured, and handed to you by the robot arm.',
    image: IMAGES.autumn,
  },
];

/** Question Coffee: only facts supplied by Question Coffee / The Bean Box. */
export const QUESTION_COFFEE = {
  mission:
    'Question Coffee is a social enterprise, with a mission to provide a retail market for the women coffee growers enrolled in Sustainable Growers Rwanda trainings.',
  more: 'It also serves as a training space for coffee professionals, and a place for visitors to explore the world of coffee in Rwanda.',
  impact: [
    { title: 'To the cooperative', text: 'A share of every purchase goes directly to the cooperative, for their coffee beans.' },
    {
      title: 'Into training',
      text: 'The rest is reinvested into professional training and trading programs for women coffee farmers.',
    },
  ],
};

/** Partnership programmes (from The Bean Box partner materials). `type` preselects the inquiry form option. */
export const PROGRAMS = [
  {
    id: 'owner',
    icon: 'person',
    name: 'The Bean Box Owner',
    designedFor:
      'Individuals or businesses looking to own and operate a single Bean Box Robot Coffee Barista. The ideal "Business in a Box" for entrepreneurs who want an automated coffee business with minimal operational complexity.',
    investment: 'One Bean Box Robot Coffee Barista.',
    type: 'buy',
  },
  {
    id: 'dealer',
    icon: 'network',
    name: 'The Bean Box Dealer',
    designedFor:
      'Entrepreneurs who wish to build a local Bean Box business by operating multiple units within an exclusive city or metropolitan territory.',
    investment: 'Minimum purchase of two Bean Box Robot Coffee Baristas.',
    type: 'partner',
  },
  {
    id: 'entrepreneur',
    icon: 'globe',
    name: 'The Bean Box Entrepreneur',
    designedFor:
      'Experienced entrepreneurs and investors seeking to build and manage a large-scale Bean Box operation across a major geographic territory.',
    investment: 'Minimum purchase of five Bean Box Robot Coffee Baristas.',
    type: 'partner',
  },
];

/** Story page chapters. */
export const STORY = [
  {
    n: '01',
    title: 'Land of a thousand hills',
    text: "Rwanda's unique climate and rich soils create the perfect home for exceptional coffee.",
    image: { src: '/img/highlands', alt: 'Misty green hills at sunrise', position: 'center 35%' },
  },
  {
    n: '02',
    title: 'A cherry',
    text: 'It begins as a single cherry, nurtured by nature, ripened to perfection.',
    image: { src: '/img/cherries', alt: 'Coffee cherries ripening on the branch' },
  },
  {
    n: '03',
    title: 'Handpicked by women',
    text: "Handpicked with care by the women who are the heart of Rwanda's coffee heritage.",
    image: { src: '/img/story-women-picking', alt: 'A hand picking ripe red coffee cherries from the branch', position: '40% 55%' },
  },
  {
    n: '04',
    title: 'The Bean Box',
    text: 'Where innovation meets tradition, crafting the perfect cup in just 90 seconds.',
    image: { src: '/img/bean-kiosk-render', alt: 'The Bean Box robotic coffee kiosk', contain: true },
  },
];
