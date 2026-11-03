export const SITE_URL = 'https://chadakoindigital.com';

export type Service = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  price: string;
  timeline: string;
  paragraphs: string[];
};

// Prices and timelines must match the offer cards in components/Offers.tsx.
export const SERVICES: Service[] = [
  {
    slug: 'websites',
    title: 'Business Websites in Jamestown, NY | Chadakoin Digital',
    description:
      'Fast, simple websites for Jamestown businesses: hours, menu or services, contact info and a map. Starting at $500, usually live in under a week.',
    h1: 'Business websites for Jamestown businesses',
    price: 'Starting at $500.',
    timeline: 'Usually under a week once I have your info.',
    paragraphs: [
      'Most people look up a local business on their phone before they call or walk in. If what they find is an old page, a broken link or nothing at all, they move on. A business website from me gives them the basics right away: your hours, your menu or services, how to reach you, and a map to your door.',
      'I keep these sites fast and simple. They load quickly on a phone, they are easy to read, and they show up properly when someone searches for you or shares your link. You do not need to learn a website builder or keep up with plugins. When your hours or prices change, you send me a message and I update it.',
      'The process is short. We talk for half an hour about what you need, you send me your details and any photos you want to use, and I build it. Most sites are usually live in under a week once I have your info.',
      'Pricing starts at $500, and you get a fixed quote before any work begins. Changes and small jobs after launch are $35 an hour. For local businesses I am also open to barter, such as a trade for services, goods or ad space.',
    ],
  },
  {
    slug: 'booking-and-ordering',
    title: 'Online Booking & Ordering in Jamestown | Chadakoin Digital',
    description:
      'Let customers book appointments or place orders online, and see it all in one place. Starting at $1,000, usually 1 to 2 weeks. Jamestown, NY.',
    h1: 'Online booking and ordering setup',
    price: 'Starting at $1,000.',
    timeline: 'Usually 1 to 2 weeks.',
    paragraphs: [
      'If your appointments live in a paper book, your orders come in by phone, text and Facebook message, and you spend the evening sorting it all out, a booking or ordering setup can take that off your plate.',
      'I set up a way for customers to book a time or place an order online, on their phone, whenever it suits them. You see every booking and order in one place instead of across five apps. It can send confirmations and reminders so fewer people forget, and it fits the way your business already works instead of forcing you into someone else\'s system.',
      'This works for salons, repair shops, studios, food businesses, rental gear, classes and anyone else who takes appointments or orders. If an off-the-shelf tool already fits you, I will tell you and help you set it up. If it does not, I build something that does.',
      'Pricing starts at $1,000, and you get a fixed quote before any work begins. Most setups usually take 1 to 2 weeks. Changes and small jobs after launch are $35 an hour, and I am open to barter with local businesses.',
    ],
  },
  {
    slug: 'dashboards',
    title: 'Spreadsheet to Dashboard, Jamestown NY | Chadakoin Digital',
    description:
      'Turn the spreadsheets you run your business on into one dashboard that updates itself. Starting at $400, usually about a week. Jamestown, NY.',
    h1: 'Spreadsheet to dashboard',
    price: 'Starting at $400.',
    timeline: 'Usually about a week.',
    paragraphs: [
      'A lot of local businesses run on spreadsheets. Sales in one file, inventory in another, and a report someone rebuilds by hand every Monday. It works until a formula breaks, two people edit different copies, or you need an answer and nobody can find it.',
      'I take the numbers you already track and put them in one dashboard that updates itself. You open it on your phone or computer and see sales, inventory, bookings, or whatever matters to you, without copying and pasting. It can pull from the spreadsheets you use today, so nobody has to change how they enter data.',
      'This is a good fit if you find yourself asking how this week compared to last week, what is running low, or which products are actually selling, and getting that answer takes more than a few seconds.',
      'Pricing starts at $400, and you get a fixed quote before any work begins. Most dashboards usually take about a week. Changes and small jobs after launch are $35 an hour, and I am open to barter with local businesses.',
    ],
  },
  {
    slug: 'automation',
    title: 'Business Automation and Custom Tools | Chadakoin Digital',
    description:
      'Hand off the workflow that wastes your time every day. Automation starts at $300; larger custom tools are quoted after a free 30-minute chat.',
    h1: 'Automation and custom tools',
    price: 'Starting at $300.',
    timeline: 'Larger custom tools are quoted after a free 30-minute conversation.',
    paragraphs: [
      'Every business has a task that eats time every day. Copying orders from email into a spreadsheet, sending the same reminder to every customer, building the same invoice by hand, or checking three websites to find one number. None of it is hard, but it adds up to hours you could spend on the actual work.',
      'I pick one of those workflows and make it run on its own. The data moves where it needs to go, the messages go out on time, and you get a heads up when something actually needs your attention. You keep the tools you already use, and I connect them so they work together.',
      'Sometimes the right answer is bigger than one automation: a small custom tool built around how your business works. Those are quoted after a free 30-minute conversation, so you know the scope and the price before anything starts.',
      'Single automations start at $300, and you get a fixed quote before any work begins. Changes and small jobs after launch are $35 an hour. I am based in Jamestown, NY, and open to barter with local businesses.',
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
