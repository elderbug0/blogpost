import { notFound } from 'next/navigation';
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

export default function BlogPost({ params }) {
  const { id } = params;
  const blog = blogs.find(blog => blog.id == id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">By {blog.author} on {blog.date}</p>
      <p>{blog.description}</p>
      <Link href="/blog">
        <span className="text-blue-500 hover:underline cursor-pointer">Back to Blog</span>
      </Link>
    </div>
  );
}
