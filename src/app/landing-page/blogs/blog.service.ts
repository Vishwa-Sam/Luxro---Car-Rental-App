import { Injectable } from '@angular/core';
import { BlogPost, miniBlogPost } from './blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs: BlogPost[] = [
  {
    id: '1',
    slug: 'best-road-trips-south-india',
    title: 'Best Road Trips in South India',
    excerpt:
      'South India is a paradise for road trip lovers. From misty hill stations and winding mountain roads to long coastal highways that run alongside the sea, the southern part of India offers some of the most scenic and diverse driving experiences in the country. Whether you are planning a relaxed weekend escape or a long self-drive adventure, these routes promise unforgettable views, rich culture, and incredible food along the way.',
    category: 'Travel Tips',
    coverImage: '../../../assets/blogs/card-0.jpg',
    author: 'Luxro Editorial',
    publishedAt: '2024-03-12',
    readTime: 8,
    featured: true,
    content: [
  {
    type: 'paragraph',
    value:
      'A road trip in South India is not just about reaching a destination — it is about enjoying the journey itself. Smooth highways, winding mountain roads, lush greenery, and long coastal stretches make every drive unforgettable. As you move from one region to another, the scenery changes dramatically, keeping the journey exciting and refreshing throughout. The experience is further enriched by roadside tea stalls, local eateries, and unexpected viewpoints that invite you to pause and soak in the surroundings.'
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id-1.jpg',
    caption: 'Scenic mountain roads surrounded by dense forests'
  },
  {
    type: 'paragraph',
    value:
      'From mist-covered hill stations to sunlit coastal highways, South India offers incredible diversity for travelers who love driving. In just a few hours, you can travel from cool mountain climates to warm seaside towns, experiencing different cultures, languages, and traditions along the way. The region’s natural beauty, combined with well-developed road networks, makes it ideal for both short weekend drives and long, immersive road trips.'
  },
  {
    type: 'heading',
    value: 'Top Scenic Routes You Must Experience'
  },
  {
    type: 'list',
    value: [
      'Bangalore to Coorg – lush coffee plantations, forest roads, and cool hill air',
      'Chennai to Pondicherry – coastal highway with endless ocean views and sunrise drives',
      'Munnar to Thekkady – rolling tea gardens, misty hills, and quiet forest stretches',
      'Hyderabad to Hampi – wide open roads leading to dramatic landscapes and ancient ruins'
    ]
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id1.jpg',
    caption: 'A peaceful coastal drive during sunrise'
  },
  {
    type: 'paragraph',
    value:
      'To truly enjoy these scenic routes, planning your drive carefully is essential. Starting early in the morning allows you to avoid heavy traffic, enjoy cooler temperatures, and witness breathtaking sunrises along highways and hill roads. Early hours also offer a calmer driving experience, making it easier to appreciate the beauty of nature without constant interruptions.'
  },
  {
    type: 'paragraph',
    value:
      'Equally important is ensuring that your vehicle is in top condition before setting off. A well-maintained car with good tires, smooth suspension, and reliable brakes can significantly enhance comfort and safety during long drives. Carrying essentials such as water, snacks, navigation tools, and emergency supplies ensures that you are prepared for unexpected situations, especially when driving through remote or hilly regions.'
  },
  {
    type: 'paragraph',
    value:
      'Beyond the roads themselves, South Indian road trips are also about the experiences you gather along the way. Stopping at local restaurants to taste regional cuisine, exploring small towns, visiting roadside temples, or simply taking a break at a scenic viewpoint can turn an ordinary drive into a memorable adventure. These moments create lasting memories that often become the highlight of the journey.'
  },
  {
    type: 'paragraph',
    value:
      'Whether you are a solo traveler seeking solitude, a group of friends chasing adventure, or a family looking to bond over shared experiences, South India offers road trips for every kind of traveler. The combination of natural beauty, cultural richness, and diverse landscapes makes every journey unique. With the right mindset and a love for the open road, a South Indian road trip becomes more than just travel—it becomes a story worth telling.'
  }
]

  },

  {
    id: '2',
    slug: 'how-to-plan-weekend-getaway-by-car',
    title: 'How to Plan a Perfect Weekend Getaway by Car',
    excerpt:
      'Weekend getaways by car are one of the easiest and most refreshing ways to break away from routine life. With minimal planning, flexible schedules, and the freedom to explore at your own pace, a short road trip can feel like a full vacation. This guide walks you through everything you need to plan a smooth, stress-free weekend escape.',
    category: 'Travel Tips',
    coverImage: '../../../assets/blogs/card-1.png',
    author: 'Luxro Editorial',
    publishedAt: '2024-03-18',
    readTime: 7,
    content: [
  {
    type: 'paragraph',
    value:
      'Weekend getaways by car are one of the easiest and most rewarding ways to escape daily routines without long planning cycles. They provide unmatched flexibility, personal comfort, and complete control over your schedule. Unlike flights or trains, road trips allow spontaneous detours, scenic stops, and the freedom to explore hidden gems along the way. Even a short drive can offer a refreshing mental reset, making weekend car trips a perfect balance between relaxation and adventure.'
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id-2.jpg',
    caption: 'A calm countryside road perfect for short trips'
  },
  {
    type: 'paragraph',
    value:
      'Short road trips are especially appealing because they require minimal preparation while still delivering meaningful travel experiences. Whether it is a quiet countryside retreat, a hill station nearby, or a small heritage town, weekend destinations often surprise travelers with their charm. Driving yourself also means traveling at your own pace—stopping when you want, exploring local food spots, and enjoying the journey as much as the destination.'
  },
  {
    type: 'heading',
    value: 'How to Plan a Stress-Free Weekend Trip'
  },
  {
    type: 'list',
    value: [
      'Choose destinations within 250–300 km to avoid exhaustion and maximize leisure time',
      'Start early in the morning to beat traffic and enjoy calm, empty roads',
      'Pre-book accommodations to save time and prevent last-minute confusion',
      'Carry offline maps, emergency contacts, and basic supplies for safety',
    ]
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id2.jpg',
    caption: 'Early morning drives make the journey peaceful'
  },
  {
    type: 'paragraph',
    value:
      'Starting your journey early is one of the simplest ways to make a weekend trip enjoyable. Morning drives are quieter, cooler, and less stressful, allowing you to cover more distance comfortably. They also help you reach your destination with enough time left in the day to explore, relax, or simply unwind without feeling rushed.'
  },
  {
    type: 'paragraph',
    value:
      'Equally important is choosing a reliable and comfortable car for the journey. A smooth ride, good fuel efficiency, and enough luggage space can significantly improve the overall experience. Ensuring your vehicle is well-maintained before departure—checking tires, fuel levels, and basic mechanics—adds peace of mind and lets you focus on enjoying the trip.'
  },
  {
    type: 'paragraph',
    value:
      'With the right preparation and mindset, even a two-day road trip can feel incredibly refreshing and fulfilling. Weekend car getaways are not about covering long distances but about breaking routine, reconnecting with nature or loved ones, and returning home recharged. Sometimes, all it takes is a short drive to create memories that last far longer than the weekend itself.'
  }
]

  },

  {
    id: '3',
    slug: 'driving-in-bangalore-tips-and-parking',
    title: 'Driving in Bangalore: Tips, Traffic & Parking Guide',
    excerpt:
      'Driving in Bangalore can feel overwhelming, especially for first-time visitors. Heavy traffic, narrow streets, and limited parking can be challenging. However, with the right strategies and local insights, navigating the city by car can be surprisingly manageable.',
    category: 'City Guides',
    coverImage: '../../../assets/blogs/card-2.jpg',
    author: 'Luxro Editorial',
    publishedAt: '2024-04-02',
    readTime: 9,
    content: [
  {
    type: 'paragraph',
    value:
      'Driving in Bangalore can often feel overwhelming due to heavy traffic congestion, narrow internal roads, frequent construction work, and limited parking availability. The city’s rapid growth has led to a high number of vehicles on the road, making even short distances time-consuming during peak hours. However, with the right strategies, a bit of patience, and smart planning, navigating Bangalore’s roads can become far more manageable and less stressful.'
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id3.jpg',
    caption: 'Traffic patterns vary greatly by time of day'
  },
  {
    type: 'paragraph',
    value:
      'One of the key aspects of driving in Bangalore is understanding that traffic conditions change drastically depending on the time of day and location. Business districts, tech parks, and major junctions tend to get heavily congested during office hours, while residential areas are relatively calmer. Being aware of these patterns helps drivers plan better routes and avoid unnecessary delays.'
  },
  {
    type: 'heading',
    value: 'Essential Driving & Parking Tips'
  },
  {
    type: 'list',
    value: [
      'Avoid peak hours (9–11 AM and 5–8 PM) when traffic is at its worst',
      'Use navigation apps with live traffic updates to choose faster routes',
      'Prefer designated public parking zones to avoid fines and towing',
      'Strictly follow no-parking rules, especially in busy commercial areas'
    ]
  },
  {
    type: 'paragraph',
    value:
      'Using real-time navigation apps can make a significant difference when driving in the city. These tools not only suggest alternative routes but also alert you to accidents, roadblocks, and sudden traffic build-ups. Even familiar routes may change in efficiency depending on the day, so staying updated helps save both time and fuel.'
  },
  {
    type: 'paragraph',
    value:
      'Parking is another major challenge in Bangalore, particularly in popular areas such as shopping streets, markets, and office hubs. Always look for authorized parking spaces or paid parking facilities rather than roadside spots. Illegally parked vehicles are often fined or towed, leading to unnecessary inconvenience and expense.'
  },
  {
    type: 'paragraph',
    value:
      'Planning your routes in advance and understanding local traffic patterns can save hours over the course of a week and significantly reduce driving stress. Combined with calm driving habits and adherence to traffic rules, these small adjustments can make daily commuting in Bangalore safer, smoother, and far more predictable.'
  }
]

  },

  {
    id: '4',
    slug: 'how-to-maintain-your-car-for-long-drives',
    title: 'How to Maintain Your Car for Long Drives',
    excerpt:
      'Long drives put additional stress on your car. Proper maintenance not only ensures safety but also improves comfort and fuel efficiency. Before embarking on any long journey, it’s essential to perform a few critical checks that can prevent breakdowns and unexpected expenses.',
    category: 'Vehicle Care',
    coverImage: '../../../assets/blogs/card-3.webp',
    author: 'Luxro Editorial',
    publishedAt: '2024-04-10',
    readTime: 8,
    content: [
  {
    type: 'paragraph',
    value:
      'Long-distance driving places extra strain on your vehicle. Continuous engine load, high temperatures, varying road conditions, and long hours behind the wheel can expose even minor mechanical issues. What might go unnoticed during short city drives can quickly turn into serious problems on highways. Preparing your car properly before a long journey ensures not only safety but also comfort, reliability, and peace of mind throughout the trip.'
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id4.jpg',
    caption: 'A well-maintained car reduces the risk of breakdowns on highways'
  },
  {
    type: 'paragraph',
    value:
      'Before starting a long drive, it is essential to conduct a few basic yet thorough checks. These preventive steps may seem small, but they play a crucial role in avoiding major mechanical failures and costly repairs, especially when traveling far from home or through remote areas. A little preparation can save hours of inconvenience and ensure a smoother journey.'
  },
  {
    type: 'paragraph',
    value:
      'Long trips also demand consistent performance from your vehicle for extended periods. This makes it important to pay attention not just to the engine, but also to components like tyres, brakes, lights, and fluids. Ensuring everything functions correctly helps maintain control, improves fuel efficiency, and reduces fatigue for the driver.'
  },
  {
    type: 'heading',
    value: 'Essential Pre-Drive Checklist'
  },
  {
    type: 'list',
    value: [
      'Check engine oil, coolant, and brake fluid levels to prevent overheating and braking issues',
      'Inspect tyre pressure, tread depth, wheel alignment, and spare tyre condition',
      'Test headlights, tail lights, brake lights, indicators, and fog lamps for visibility',
      'Ensure brakes respond smoothly without vibrations or unusual noise',
      'Carry basic tools, jumper cables, a puncture repair kit, first-aid supplies, and emergency equipment'
    ]
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id-4.jpg',
    caption: 'Tyre checks are critical before long highway journeys'
  },
  {
    type: 'paragraph',
    value:
      'Tyres deserve special attention before any highway journey, as they are constantly exposed to heat and friction at high speeds. Properly inflated tyres with good tread not only improve safety but also enhance fuel efficiency and driving stability. Neglecting tyre condition is one of the most common causes of roadside breakdowns during long trips.'
  },
  {
    type: 'paragraph',
    value:
      'Regular servicing before long-distance travel can significantly reduce the chances of unexpected breakdowns. Scheduling a maintenance check a few days before departure allows time to fix any issues that arise. Investing time in vehicle care ensures a safer, smoother, and more enjoyable driving experience, allowing you to focus fully on the journey rather than potential problems.'
  }
]

  },

  {
    id: '5',
    slug: 'solo-road-trips-safety-tips',
    title: 'Solo Road Trips: Safety Tips Every Driver Should Know',
    excerpt:
      'Solo road trips offer unmatched freedom and self-discovery, but they also require extra attention to safety. From route planning to emergency preparedness, following a few essential precautions can make your solo journey both enjoyable and secure.',
    category: 'Travel Tips',
    coverImage: '../../../assets/blogs/card-4.jpg',
    author: 'Luxro Editorial',
    publishedAt: '2024-05-12',
    readTime: 7,
   content: [
  {
    type: 'paragraph',
    value:
      'Solo road trips can be incredibly liberating, offering a sense of freedom, flexibility, and deep personal discovery. Traveling alone allows you to move at your own pace, make spontaneous decisions, and enjoy uninterrupted time with your thoughts. However, being on your own also means taking full responsibility for your safety, planning, and well-being throughout the journey. Preparation becomes the key to turning a solo drive into a confident and rewarding experience.'
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id5.jpg',
    caption: 'Solo drives offer freedom, but preparation is essential'
  },
  {
    type: 'paragraph',
    value:
      'Proper planning and situational awareness can make solo travel both safe and enjoyable. From choosing reliable routes and understanding road conditions to knowing where you can stop for fuel, food, or rest, every detail matters when you are traveling alone. Planning ahead reduces uncertainty and allows you to focus more on enjoying the journey rather than worrying about what might go wrong.'
  },
  {
    type: 'paragraph',
    value:
      'Solo drivers should also be mentally prepared for long hours behind the wheel. Staying alert, managing fatigue, and recognizing when to take breaks are critical for maintaining focus. Listening to music or podcasts, staying hydrated, and stopping at regular intervals can help keep energy levels up and improve overall driving safety.'
  },
  {
    type: 'heading',
    value: 'Safety Essentials for Solo Drivers'
  },
  {
    type: 'list',
    value: [
      'Share your planned route and expected arrival time with a trusted friend or family member',
      'Avoid night driving in unfamiliar or poorly lit areas whenever possible',
      'Keep emergency contacts, roadside assistance numbers, and local helplines easily accessible',
      'Carry a power bank and ensure your phone remains fully charged at all times',
      'Stop regularly to rest, stretch, and stay mentally alert during long drives'
    ]
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id-5.jpg',
    caption: 'Daytime driving improves visibility and safety on solo trips'
  },
  {
    type: 'paragraph',
    value:
      'Daytime driving is generally safer for solo travelers, as it offers better visibility, easier access to help, and more open facilities along highways. Planning your schedule to drive during daylight hours can significantly reduce risks and improve confidence, especially when passing through unknown regions.'
  },
  {
    type: 'paragraph',
    value:
      'Trust your instincts while traveling alone. If a situation, location, or route feels unsafe, it is always better to slow down, alter your plans, or seek assistance. Solo road trips are meant to be empowering, not stressful. A calm, well-prepared driver enjoys the journey far more than someone rushing ahead without caution, turning the solo drive into a truly fulfilling experience.'
  }
]

  },
  {
  id: '6',
  slug: 'best-places-to-visit-in-mumbai-by-car',
  title: 'Best Places to Visit in Mumbai by Car',
  excerpt:
    'Mumbai offers a unique driving experience with scenic coastal roads, historic landmarks, and quick getaways just a few hours away. Exploring the city by car gives you the flexibility to enjoy iconic locations at your own pace.',
  category: 'City Guides',
  coverImage: '../../../assets/blogs/card-5.avif',
  author: 'Luxro Editorial',
  publishedAt: '2024-06-02',
  readTime: 7,
  content: [
    {
    type: 'paragraph',
    value:
      'Driving through Mumbai can be an adventure in itself, offering a unique mix of coastal beauty, historic landmarks, and vibrant city life. From iconic sea-facing roads to bustling neighborhoods filled with energy, the city presents countless sights that are best experienced from behind the wheel. While traffic can be intense during peak hours, choosing the right time and routes can transform a regular drive into a memorable experience.'
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id-6.jpg',
    caption: 'Marine Drive during early morning hours'
  },
  {
    type: 'paragraph',
    value:
      'Mumbai’s charm truly shines during the quieter hours of the day. Early mornings and late nights offer calmer roads, cooler air, and unobstructed views of the city’s skyline and coastline. Driving at these times allows you to appreciate the architectural beauty, sea breeze, and changing colors of the sky without the usual hustle and noise.'
  },
  {
    type: 'heading',
    value: 'Must-Visit Places When Driving in Mumbai'
  },
  {
    type: 'list',
    value: [
      'Marine Drive – a peaceful coastal stretch ideal for relaxed drives and sea views',
      'Bandra-Worli Sea Link – a modern engineering marvel with stunning views of the Arabian Sea',
      'Gateway of India – a historic landmark best visited during off-peak hours',
      'Lonavala – a scenic hill destination perfect for a refreshing weekend drive'
    ]
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id6.jpg',
    caption: 'A scenic drive across the sea link'
  },
  {
    type: 'paragraph',
    value:
      'Driving across the Bandra-Worli Sea Link offers a rare sense of openness in a busy city like Mumbai. The panoramic sea views, especially during sunrise or sunset, make the drive feel calm and almost therapeutic. It is one of the few stretches where the journey itself feels just as rewarding as the destination.'
  },
  {
    type: 'paragraph',
    value:
      'Starting early in the morning helps avoid heavy traffic and allows you to enjoy the beauty of Mumbai’s roads without the usual rush. Fewer vehicles mean smoother drives, easier parking near popular spots, and more time to explore. With the right timing and a relaxed approach, driving in Mumbai can be both enjoyable and surprisingly peaceful.'
  }
  ],
},
{
  id: '7',
  slug: 'essential-car-checks-before-every-road-trip',
  title: 'Essential Car Checks Before Every Road Trip',
  excerpt:
    'Before every road trip, a few simple car checks can prevent breakdowns and ensure a safe journey. This guide walks you through the most important things to inspect before hitting the highway.',
  category: 'Vehicle Care',
  coverImage: '../../../assets/blogs/car-check.jpg',
  author: 'Luxro Editorial',
  publishedAt: '2024-06-10',
  readTime: 6,
  content: [
    {
    type: 'paragraph',
    value:
      'A well-prepared car is the foundation of a stress-free and enjoyable road trip. Simple checks done before starting your journey can help identify minor issues before they turn into major problems on the road. Taking a few extra minutes to inspect essential components can save valuable time, unexpected expenses, and the inconvenience of roadside breakdowns, especially during long or remote drives.'
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id-7.jpg',
    caption: 'Basic checks improve safety and performance'
  },
  {
    type: 'paragraph',
    value:
      'Pre-trip inspections not only improve safety but also enhance your vehicle’s overall performance. When your car is in good condition, it runs more efficiently, offers better handling, and provides a more comfortable driving experience. These checks are particularly important before highway journeys, where continuous driving places extra load on the engine, tyres, and braking system.'
  },
  {
    type: 'heading',
    value: 'Pre-Trip Inspection Checklist'
  },
  {
    type: 'list',
    value: [
      'Check tyre pressure, tread depth, and overall tyre condition for proper grip and stability',
      'Inspect engine oil, coolant, and other fluid levels to prevent overheating or engine damage',
      'Test brakes, headlights, indicators, and wipers to ensure visibility and control',
      'Ensure the spare tyre, jack, and basic tools are easily accessible and in good condition'
    ]
  },
  {
    type: 'paragraph',
    value:
      'Tyres deserve special attention, as they directly affect safety and fuel efficiency. Properly inflated tyres with adequate tread improve road grip, reduce wear, and help maintain better control at high speeds. Ignoring tyre condition is one of the most common causes of travel delays during road trips.'
  },
  {
    type: 'paragraph',
    value:
      'Making these checks part of your regular routine ensures a smooth journey and lasting peace of mind on long drives. A few minutes of preparation can dramatically reduce stress, increase confidence behind the wheel, and allow you to focus on enjoying the road ahead rather than worrying about potential issues.'
  }
  ],
},
{
  id: '8',
  slug: 'weekend-getaways-near-chennai',
  title: 'Weekend Getaways Near Chennai',
  excerpt:
    'Chennai is surrounded by beautiful destinations that are perfect for short weekend drives. From coastal towns to peaceful hill stations, these getaways offer a refreshing escape from city life.',
  category: 'City Guides',
  coverImage: '../../../assets/blogs/card-7.jpg',
  author: 'Luxro Editorial',
  publishedAt: '2024-06-18',
  readTime: 6,
  content: [
    {
    type: 'paragraph',
    value:
      'Weekend drives from Chennai offer a wonderful mix of beaches, hill escapes, heritage towns, and peaceful natural landscapes. Thanks to well-connected highways and relatively short travel times, most destinations can be reached within a few hours, making them perfect for quick breaks from city life. These short road trips allow travelers to unwind, explore new places, and return refreshed without the need for extensive planning.'
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id8.jpg',
    caption: 'Coastal highways near Chennai'
  },
  {
    type: 'paragraph',
    value:
      'Driving out of Chennai is especially enjoyable because the scenery changes quickly—from busy city roads to open highways lined with greenery or coastal views. Beachside routes offer fresh sea air and calming views, while inland drives take you through villages, farmlands, and quiet stretches of road. This variety makes weekend drives from Chennai both relaxing and visually rewarding.'
  },
  {
    type: 'heading',
    value: 'Popular Weekend Destinations'
  },
  {
    type: 'list',
    value: [
      'Pondicherry – French colonial charm, peaceful streets, cafés, and beachside walks',
      'Mahabalipuram – ancient temples, heritage monuments, and scenic beaches',
      'Yelagiri Hills – a cool climate getaway with winding roads and panoramic views',
      'Pulicat Lake – a quiet nature escape known for birdlife and serene surroundings'
    ]
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id-8.jpg',
    caption: 'Relaxing beach drives at sunset'
  },
  {
    type: 'paragraph',
    value:
      'Each of these destinations offers a different experience, whether you are looking for cultural exploration, natural beauty, or simply a peaceful place to relax. Short driving distances mean less time on the road and more time enjoying your destination, making these spots ideal for weekend travel.'
  },
  {
    type: 'paragraph',
    value:
      'Leaving early in the morning is one of the best ways to enjoy a weekend drive from Chennai. Early starts help you avoid city traffic, enjoy cooler temperatures, and reach your destination with ample time to explore. With fewer vehicles on the road, the drive feels smoother and more enjoyable, setting the tone for a refreshing and memorable getaway.'
  }
  ],
},
{
  id: '9',
  slug: 'preparing-your-car-for-long-trips',
  title: 'Preparing Your Car for Long Trips',
  excerpt:
    'Long-distance journeys require more than just filling up fuel. Preparing your car properly ensures safety, comfort, and a smooth driving experience throughout the trip.',
  category: 'Vehicle Care',
  coverImage: '../../../assets/blogs/carrd-8.jpg',
  author: 'Luxro Editorial',
  publishedAt: '2024-06-25',
  readTime: 7,
  content: [
    {
    type: 'paragraph',
    value:
      'Before embarking on a long trip, it is important to prepare your car beyond routine daily checks. Long hours of continuous driving, varying weather conditions, and changing road surfaces can expose hidden mechanical issues that might otherwise go unnoticed. Proper preparation reduces the risk of breakdowns, improves safety, and ensures a smoother and more confident driving experience throughout the journey.'
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id9.jpg',
    caption: 'Preparation ensures a stress-free journey'
  },
  {
    type: 'paragraph',
    value:
      'Long-distance travel demands consistent performance from your vehicle over extended periods. This makes it essential to pay close attention to key components such as the engine, tyres, brakes, and suspension. Addressing small concerns in advance can prevent unexpected delays, costly repairs, and unnecessary stress while traveling far from familiar surroundings.'
  },
  {
    type: 'heading',
    value: 'Steps to Prepare Your Car'
  },
  {
    type: 'list',
    value: [
      'Schedule a complete service check before departure to identify and fix potential issues',
      'Inspect tyres for proper pressure, tread depth, and correct wheel alignment',
      'Carry essential emergency supplies, vehicle documents, and insurance details',
      'Plan fuel stops in advance, especially when traveling through remote or less-populated areas'
    ]
  },
  {
    type: 'paragraph',
    value:
      'A professional service check before a long trip provides valuable reassurance. Mechanics can detect worn components, fluid leaks, or alignment issues that may not be obvious during everyday use. Taking care of these details ahead of time helps avoid breakdowns in unfamiliar locations.'
  },
  {
    type: 'paragraph',
    value:
      'Taking time to prepare your car properly ensures you can focus on enjoying the journey rather than worrying about potential issues. With a reliable vehicle and thoughtful planning, long drives become more comfortable, safer, and far more enjoyable—allowing you to fully embrace the experience of the open road.'
  },
  {
    type: 'image',
    value: '../../../../assets/blogs/id-9.jpg',
    caption: 'Checklist before long journeys improves safety'
  },
  ],
}

];

private miniArticles: miniBlogPost[] = [
  {
    title: 'Best Road Trips in South India',
    excerpt:
      'South India is a paradise for road trip lovers, offering misty hill stations, winding mountain roads, and scenic coastal highways that promise unforgettable journeys.',
    image: 'assets/blogs/section-1.jpg',
    meta: 'Luxro Editorial • 8 min read',
  },
  {
    title: 'How to Maintain Your Car for Long Drives',
    excerpt:
      'Proper car maintenance ensures safety, comfort, and fuel efficiency during long journeys. A few simple checks can prevent unexpected breakdowns.',
    image: 'assets/blogs/car-maintenance.jpg',
    meta: 'Luxro Editorial • 8 min read',
  },
  {
    title: 'Solo Road Trips: Safety Tips',
    excerpt:
      'Solo road trips offer freedom and self-discovery, but they require careful planning and awareness to ensure a safe and enjoyable journey.',
    image: 'assets/blogs/solo-road-trip.jpg',
    meta: 'Luxro Editorial • 7 min read',
  },
];

getMiniBlogPosts(): miniBlogPost[] {
    return this.miniArticles;
  }

  getAllBlogs(): BlogPost[] {
    return this.blogs;
  }

  getFeaturedBlog(): BlogPost | undefined {
    return this.blogs.find((b) => b.featured);
  }

  getBlogBySlug(slug: string): BlogPost | undefined {
    return this.blogs.find((b) => b.slug === slug);
  }
}
