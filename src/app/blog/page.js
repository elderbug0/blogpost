import Link from 'next/link';

const blogs = [
  {
    id: 1,
    date: "2024-06-04",
    author: "Baurma",
    title: "How to Sneak Your Phone into Class Like a Pro",
    description: "Tired of getting caught? Here are 10 ninja-level tips to keep your phone hidden and your texts flowing during boring lectures."
  },
  {
    id: 2,
    date: "2024-06-03",
    author: "Daulet Issatayev",
    title: "10 Reasons Why Avocado Toast is the Secret to Happiness",
    description: "You won't believe number 7! Find out why this trendy snack is more than just a food – it’s a lifestyle."
  },
  {
    id: 3,
    date: "2024-06-02",
    author: "Madina",
    title: "Memes That Will Make Your Mom Say 'What?'",
    description: "From Spongebob to Baby Yoda, these memes will have you laughing while leaving your parents totally confused."
  },
  {
    id: 4,
    date: "2024-06-01",
    author: "Alibek Seitov",
    title: "Why Homework is Basically DLC for School",
    description: "Ever feel like homework is just extra content you didn’t ask for? Here’s why it’s the ultimate downloadable content for your education."
  },
  {
    id: 5,
    date: "2024-05-31",
    author: "Uldana",
    title: "The Ultimate Guide to Going Viral on TikTok",
    description: "Want to be the next big thing? Follow these simple steps to become a TikTok sensation overnight (or at least get a few likes)."
  }
];

export default function BlogPage() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
              <Link href={`/blog/${blog.id}`}>
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 cursor-pointer hover:underline">
                  {blog.title}
                </h2>
              </Link>
              <p className="leading-relaxed mb-8">{blog.description}</p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <Link href={`/blog/${blog.id}`}>
                  <span className="text-indigo-500 inline-flex items-center cursor-pointer">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">{blog.author}</span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
