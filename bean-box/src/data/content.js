export const NAV = [
  { href: '#machine', label: 'The Machine' },
  { href: '#coffee', label: 'Our Coffee' },
  { href: '#menu', label: 'Menu' },
  { href: '#locations', label: 'Locations' },
  { href: '#partner', label: 'Partner' },
];

export const IMAGES = {
  render: {
    src: '/img/bean-kiosk-render',
    alt: 'The Bean Box kiosk in forest green and gold, with an illuminated sign, robot arm, touchscreen and bean hopper',
  },
  concept: {
    src: '/img/bean-kiosk-concept',
    alt: 'Front view of The Bean Box: the robot arm places a cup on the pickup shelf beside the menu screen',
  },
  espresso: {
    src: '/img/bean-cup-espresso',
    alt: 'A green Bean Box cup filling under the espresso spout',
  },
  autumn: {
    src: '/img/bean-cup-autumn',
    alt: 'A Bean Box takeaway cup on a wooden table',
  },
  farm: {
    src: '/img/rwanda-farm',
    alt: 'Coffee farm in Rwanda',
    label: 'Rwanda farm photo',
  },
};

export const GALLERY = [
  { ...IMAGES.render, caption: 'The Bean Box: a full coffee bar behind glass.' },
  { ...IMAGES.concept, caption: 'The arm places each finished cup on the pickup shelf.' },
  { ...IMAGES.espresso, caption: 'Pulled to order, straight into a Bean Box cup.' },
  { ...IMAGES.autumn, caption: 'Take it with you, wherever the day goes.' },
];

export const MACHINE_FEATURES = [
  { title: 'Robotic barista', text: 'Grind, brew and hand-off, fully automated.' },
  { title: 'Fresh every cup', text: 'Made to order, never pre-poured.' },
  { title: 'Small footprint', text: 'A full coffee bar in one compact unit.' },
];

export const MACHINE_CHIPS = ['Robotic', 'Fresh brew', 'Touch to order', 'Contactless'];

const drink = (slug, name, line) => ({
  name,
  line,
  src: `/img/drink-${slug}`,
  alt: `${name} from The Bean Box`,
  label: `${name} photo`,
});

export const MENU = [
  drink('espresso', 'Espresso', 'A short, intense shot with a rich crema.'),
  drink('americano', 'Americano', 'Espresso lengthened with hot water. Clean and bold.'),
  drink('cappuccino', 'Cappuccino', 'Espresso under a deep cap of velvety foam.'),
  drink('cafe-latte', 'Café Latte', 'Espresso and steamed milk, smooth and mellow.'),
  drink('flat-white', 'Flat White', 'A double shot with a thin layer of silky microfoam.'),
  drink('mocha', 'Mocha', 'Espresso, chocolate and steamed milk.'),
  drink('hot-chocolate', 'Hot Chocolate', 'Rich, creamy and caffeine-free.'),
];

export const WHY = [
  { icon: 'bean', title: 'Premium Rwandan coffee', text: 'Every cup starts with beans from Rwanda.' },
  { icon: 'robot', title: 'Fully automated', text: 'Grinding, brewing and serving run on their own.' },
  { icon: 'touch', title: 'Self-service', text: 'Guests order on the touchscreen in a few taps.' },
  { icon: 'contactless', title: 'Contactless payments', text: 'Tap a card or phone to pay. No cash to handle.' },
  { icon: 'target', title: 'Consistent quality', text: 'The same recipe, the same precision, every cup.' },
  { icon: 'box', title: 'Compact design', text: 'A complete coffee bar in a single unit.' },
];

const venue = (slug, name, line) => ({
  name,
  line,
  src: `/img/venue-${slug}`,
  alt: `The Bean Box in a ${name.toLowerCase().replace(/s$/, '')} setting`,
  label: `${name} photo`,
});

export const VENUES = [
  venue('office', 'Offices', 'Café-quality coffee for your team without leaving the floor.'),
  venue('hotel', 'Hotels', 'Fresh coffee for guests at any hour, with no extra staff.'),
  venue('airport', 'Airports', 'Fast, contactless coffee for travellers on a schedule.'),
  venue('university', 'Universities', 'Great coffee between lectures, open late for study sessions.'),
  venue('mall', 'Shopping Malls', 'A striking attraction that turns foot traffic into sales.'),
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
