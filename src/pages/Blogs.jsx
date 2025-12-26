import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Calendar,
  Clock,
  User,
  BookOpen,
  TrendingUp,
  Users,
  PiggyBank,
  ArrowRight,
} from "lucide-react";

const Blogs = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: "uk-banks-early",
      title: "Why Every UK Child Should Learn About Banks Early",
      excerpt:
        "Discover the importance of financial education and how early learning about banks can set children up for financial success throughout their lives.",
      author: "Renia",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Education",
      image: "🏦",
      featured: true,
      content: {
        intro:
          "In today's digital world, understanding banks and financial institutions is more crucial than ever for our children. Starting financial education early gives kids the tools they need to navigate an increasingly complex financial landscape.",
        sections: [
          {
            title: "The Digital Banking Revolution",
            content:
              "Today's children are growing up in a world where physical money is becoming less common. Contactless payments, digital wallets, and online banking are the norm. Without proper education, money can seem abstract and unlimited to young minds.",
          },
          {
            title: "Building Financial Confidence",
            content:
              "Children who learn about banking early develop confidence in managing money. They understand concepts like saving, interest, and budgeting before these become overwhelming adult responsibilities.",
          },
          {
            title: "UK-Specific Banking Knowledge",
            content:
              "UK children should understand our specific banking system - from high street banks like Barclays and Lloyds to building societies and credit unions. Each serves different purposes in our financial ecosystem.",
          },
          {
            title: "Starting the Conversation",
            content:
              "Parents can start by explaining what happens when they use their card at shops, how money moves from their account, and why we keep money in banks rather than under mattresses!",
          },
        ],
        conclusion:
          "Early financial education isn't about creating mini-accountants - it's about raising confident, informed citizens who can make smart money decisions throughout their lives.",
      },
    },
    {
      id: "uk-money-history",
      title: "The History of UK Money and Banking",
      excerpt:
        "Take a fascinating journey through British monetary history, from Roman coins to digital payments, and learn how our modern banking system evolved.",
      author: "Renia",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "History",
      image: "🪙",
      featured: true,
      content: {
        intro:
          "The story of British money is a tale spanning over 2,000 years, from ancient Roman coins found buried in British soil to today's instant digital payments. Understanding this history helps us appreciate how our current financial system came to be.",
        sections: [
          {
            title: "Ancient Beginnings (43-410 AD)",
            content:
              "When Romans occupied Britain, they brought their sophisticated monetary system. Roman coins have been found across the UK, showing how early Britons learned to use standardized currency for trade.",
          },
          {
            title: "Medieval Money (410-1485)",
            content:
              "After the Romans left, Anglo-Saxon kingdoms created their own coins. The pound sterling gets its name from these early silver 'sterlings' - small silver coins that were the basis of English currency.",
          },
          {
            title: "The Bank of England (1694)",
            content:
              "Founded in 1694 to fund King William III's war against France, the Bank of England became the world's second-oldest central bank. This marked the beginning of modern British banking.",
          },
          {
            title: "Paper Money Revolution",
            content:
              "Bank notes started as promises to pay the bearer in gold or silver. The first Bank of England notes were handwritten! It wasn't until 1855 that fully printed notes were introduced.",
          },
          {
            title: "Modern Digital Era",
            content:
              "From the first ATM installed by Barclays in 1967 to today's smartphone banking apps, technology has revolutionized how we handle money. Today's children are the first generation to grow up truly digital-native with money.",
          },
        ],
        conclusion:
          "This rich history shows us that money and banking are constantly evolving. Teaching our children about these changes helps them adapt to whatever comes next in our financial future.",
      },
    },
    {
      id: "pocket-money-lessons",
      title: "Pocket Money: The Ultimate Teaching Tool",
      excerpt:
        "Learn how to use pocket money effectively to teach budgeting, saving, and financial responsibility to children of all ages.",
      author: "Renia",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Parenting",
      image: "🎯",
      featured: false,
      content: {
        intro:
          "Pocket money isn't just about giving children spending money - it's one of the most powerful tools parents have for teaching financial literacy. When used thoughtfully, it can teach budgeting, saving, and decision-making skills that last a lifetime.",
        sections: [
          {
            title: "Age-Appropriate Amounts",
            content:
              "A good rule of thumb is £1 per year of age per week (so a 10-year-old gets £10/week). However, adjust based on your family's circumstances and what expenses the pocket money should cover.",
          },
          {
            title: "The Three Jars Method",
            content:
              "Encourage children to divide their pocket money into three categories: Save (long-term goals), Spend (immediate wants), and Share (charity/gifts). This teaches balanced money management from an early age.",
          },
          {
            title: "Earning vs. Receiving",
            content:
              "Consider a combination approach: some money given freely (teaching unconditional family support) and some money earned through age-appropriate chores (teaching work ethic and earning).",
          },
          {
            title: "Natural Consequences",
            content:
              "If they spend all their money early in the week, resist the urge to advance next week's allowance. Natural consequences are powerful teachers about budgeting and patience.",
          },
        ],
        conclusion:
          "Remember, the goal isn't perfection - it's practice. Pocket money gives children a safe environment to make financial mistakes and learn from them while the stakes are low.",
      },
    },
    {
      id: "savings-goals-kids",
      title: "Setting Savings Goals That Motivate Kids",
      excerpt:
        "Discover proven strategies to help children set and achieve savings goals, turning the abstract concept of saving into something concrete and exciting.",
      author: "Renia",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Tips",
      image: "⭐",
      featured: false,
      content: {
        intro:
          "Saving money can feel abstract and boring to children, especially when gratification is delayed. The key is making savings goals visual, achievable, and personally meaningful to each child.",
        sections: [
          {
            title: "Make It Visual",
            content:
              "Create savings thermometers, use clear jars to see money accumulating, or use apps that show progress graphically. Children need to see their progress to stay motivated.",
          },
          {
            title: "Short and Long Term Goals",
            content:
              "Balance quick wins (save £20 for a toy in 4 weeks) with longer-term goals (save £100 for a bike in 6 months). Success with short-term goals builds confidence for bigger challenges.",
          },
          {
            title: "The Power of Choice",
            content:
              "Let children choose their own savings goals rather than imposing adult priorities. A child saving for a 'silly' toy they really want will be more motivated than saving for something practical they don't care about.",
          },
          {
            title: "Celebrate Milestones",
            content:
              "Acknowledge progress along the way, not just the final achievement. Reaching 25%, 50%, and 75% of their goal are all worth celebrating!",
          },
        ],
        conclusion:
          "When children successfully save for and buy something they really wanted, the pride and satisfaction they feel teaches them more about the value of saving than any lecture ever could.",
      },
    },
    {
      id: "types-of-accounts-uk",
      title: "A Complete Guide to UK Bank Account Types",
      excerpt:
        "Navigate the UK banking landscape with confidence. Discover which bank account type suits your needs, from everyday current accounts to specialized business banking.",
      author: "Renia",
      date: "2024-02-15",
      readTime: "7 min read",
      category: "Education",
      image: "🏪",
      featured: true,
      content: {
        intro:
          "Whether you're new to the UK or simply looking to open a new bank account, understanding your options can save you time, money, and stress. From everyday current accounts to specialized student and business accounts, choosing the right account type sets the foundation for your financial journey in the UK.",
        sections: [
          {
            title: "Current Accounts: Your Financial Hub",
            content:
              "Current accounts are the backbone of UK banking - designed for day-to-day use including bill payments, salary deposits, and card purchases. Most UK residents aged 18+ qualify, and they typically offer overdraft options, online banking, and mobile apps. Think of it as your financial command center for everyday life.",
          },
          {
            title: "Basic Bank Accounts: Simple Banking Solutions",
            content:
              "Basic accounts serve as a simplified alternative for those who may not qualify for standard current accounts. With no overdraft facilities but standard debit card access and online banking, they're perfect for people with low income or poor credit history - ensuring everyone can access essential banking services.",
          },
          {
            title: "Savings Accounts: Growing Your Money",
            content:
              "Savings accounts help you build wealth over time while earning interest on your deposits. Whether you choose easy access accounts for flexibility, fixed-term accounts for higher rates, or notice accounts for balance, they're essential for achieving both short-term and long-term financial goals.",
          },
          {
            title: "Specialized Accounts for Life Stages",
            content:
              "Student accounts offer interest-free overdrafts and perks like travel discounts, while business accounts help entrepreneurs separate personal and professional finances. Joint accounts enable couples and housemates to manage shared expenses, though all holders share responsibility for any debts.",
          },
          {
            title: "Digital vs Traditional Banking",
            content:
              "Choose between high street banks like Barclays and HSBC for face-to-face service, or challenger banks like Monzo and Starling for app-based convenience. Online-only banks often offer faster setup (10-15 minutes) and innovative budgeting features, while traditional banks provide comprehensive branch networks.",
          },
        ],
        conclusion:
          "The key to choosing the right account is matching your lifestyle and financial needs to the account features. Start with the basics - current and savings accounts - then explore specialized options as your financial situation evolves.",
      },
    },
    {
      id: "budgeting-basics-guide",
      title: "Master Your Money: The Complete Budgeting Guide",
      excerpt:
        "Learn how to create a budget that actually works. From understanding money flow to popular budgeting methods, take control of your finances with practical strategies.",
      author: "Renia",
      date: "2024-02-10",
      readTime: "8 min read",
      category: "Tips",
      image: "📊",
      featured: true,
      content: {
        intro:
          "Budgeting isn't about restricting yourself or eliminating fun - it's about taking control and being intentional with your money. A good budget gives you a clear view of your financial situation, helps you make informed decisions, and ensures your income can cover your expenses while leaving room for saving and debt repayment.",
        sections: [
          {
            title: "Understanding Money Flow",
            content:
              "Money inflow includes your salary, freelance income, benefits, gifts, and passive income like interest or dividends. Money outflow encompasses everything you spend - from fixed expenses like rent and utilities, to variable costs like groceries and entertainment, plus irregular expenses like annual insurance premiums and car repairs.",
          },
          {
            title: "The Art of Expense Categorization",
            content:
              "Separate your spending into fixed expenses (same amount monthly), variable expenses (amounts change), and irregular expenses (not monthly but important). Also distinguish between needs (essentials like housing and food) and wants (extras like entertainment and vacations). This categorization reveals spending patterns and improvement opportunities.",
          },
          {
            title: "Tracking Methods That Work",
            content:
              "Choose tracking methods that fit your lifestyle - from simple pen and paper or spreadsheets to budgeting apps like YNAB or Goodbudget. Review 3-6 months of bank and credit card statements to spot trends and understand your actual spending patterns, not just what you think you spend.",
          },
          {
            title: "Popular Budgeting Frameworks",
            content:
              "The 50/30/20 rule allocates 50% to needs, 30% to wants, and 20% to savings and debt repayment. Zero-based budgeting assigns every pound a purpose, ensuring income minus expenses equals zero. Both methods help ensure intentional money management and prevent overspending.",
          },
          {
            title: "Avoiding Common Pitfalls",
            content:
              "Don't forget irregular expenses like car repairs or holiday spending - these budget-breakers catch many people off guard. Avoid underestimating variable costs, making budgets too restrictive, or failing to review regularly. Flexibility is key - budgets should change as your life does.",
          },
        ],
        conclusion:
          "Understanding your money inflow and outflow is the essential first step to building a functional budget. It's not about perfection - it's about awareness and being proactive. Start tracking today, and your financial journey begins with that crucial first step of awareness.",
      },
    },
    {
      id: "uk-banking-system-guide",
      title: "How UK Banking Really Works: From High Street to Digital",
      excerpt:
        "Demystify the UK banking system. Learn about different types of banks, what services they offer, and how they keep your money safe in an accessible, easy-to-understand guide.",
      author: "Renia",
      date: "2024-02-05",
      readTime: "6 min read",
      category: "Education",
      image: "🏛️",
      featured: false,
      content: {
        intro:
          "Banks are like financial toolboxes - helping you save, spend, borrow, and send money while supporting the broader economy. Whether you're curious about where your money goes when deposited or how contactless payments work, understanding the UK banking system empowers better financial decisions.",
        sections: [
          {
            title: "The Banking Landscape",
            content:
              "High street banks like Barclays, HSBC, and NatWest offer traditional branch-based services alongside digital platforms. Online-only banks such as Monzo, Starling, and Revolut provide app-focused experiences with innovative budgeting tools. Building societies and credit unions operate as member-owned institutions focused on community benefit over profit.",
          },
          {
            title: "Essential Banking Services",
            content:
              "Current accounts handle everyday transactions and bill payments, while savings accounts grow your money through interest. Debit cards access your existing funds, whereas credit cards let you borrow and pay later. Banks also provide loans and mortgages for major purchases, plus comprehensive online and mobile banking platforms.",
          },
          {
            title: "Your Money's Security",
            content:
              "Banks protect your funds through multiple layers: PINs and passwords for account access, chip-and-pin technology with biometric login options, and sophisticated fraud prevention systems. The FSCS (Financial Services Compensation Scheme) protects up to £85,000 per person per bank, ensuring safety even if your bank fails.",
          },
          {
            title: "Banking Evolution Timeline",
            content:
              "From 1600s goldsmiths storing gold and issuing handwritten receipts, to the 1694 founding of the Bank of England, banking has continuously evolved. The 1800s saw expansion to ordinary citizens, while the 1900s brought national expansion and innovations like credit cards and ATMs.",
          },
          {
            title: "The Digital Revolution",
            content:
              "The 2000s-2010s witnessed online banking becoming mainstream and challenger banks emerging with mobile-first approaches. The 2020s introduced open banking and fintech explosion, with AI budgeting tools and ethical investment platforms transforming how we manage money through technology.",
          },
        ],
        conclusion:
          "The UK banking system serves as both a safe haven for your money and a gateway to financial opportunities. From traditional high street branches to cutting-edge fintech apps, understanding your options helps you choose services that best support your financial goals and lifestyle preferences.",
      },
    },
  ];

  const categories = ["All", "Education", "History", "Parenting", "Tips"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const BlogPostDetail = ({ post }) => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setSelectedPost(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:bg-pink-50 border-pink-200"
        >
          ← Back to Blog
        </Button>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.date).toLocaleDateString("en-UK", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </span>
          <span className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </span>
        </div>
      </div>

      <div className="text-center">
        <div className="text-6xl mb-4">{post.image}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {post.excerpt}
        </p>
      </div>

      <Card className="rounded-xl">
        <CardContent className="pt-8">
          <div className="prose max-w-none space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              {post.content.intro}
            </p>

            {post.content.sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 font-display">
                  {section.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">
                Key Takeaway
              </h3>
              <p className="text-gray-700 leading-relaxed italic">
                {post.content.conclusion}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (selectedPost) {
    const post = blogPosts.find((p) => p.id === selectedPost);
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {post ? <BlogPostDetail post={post} /> : null}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
            <BookOpen className="inline-block mr-4 h-12 w-12 text-pink-500 animate-pulse" />
            Money <span className="text-pink-500">Wisdom</span> Blog 📝
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, practical tips, and inspiring stories about
            financial literacy for families. Written by educators, parents, and
            financial experts who care about children's futures.
          </p>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-display">
            Featured Articles ⭐
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl"
                onClick={() => {
                  setSelectedPost(post.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4 text-center">{post.image}</div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-pink-500 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-UK", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-pink-500 hover:bg-pink-600 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "border-pink-200 text-pink-600 hover:bg-pink-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-display">
            {selectedCategory === "All"
              ? "All Articles"
              : `${selectedCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-gray-200 hover:border-pink-300 rounded-xl"
                onClick={() => {
                  setSelectedPost(post.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <CardContent className="pt-6">
                  <div className="text-3xl mb-4 text-center">{post.image}</div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        post.category === "Education"
                          ? "bg-blue-100 text-blue-700"
                          : post.category === "History"
                          ? "bg-orange-100 text-orange-700"
                          : post.category === "Parenting"
                          ? "bg-teal-100 text-teal-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString("en-UK", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        {/* <Card className="mt-16 bg-gradient-to-r from-pink-400 to-blue-500 text-white rounded-xl">
          <CardContent className="pt-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-display">
              Stay Updated! 📬
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Get the latest financial education tips and resources delivered to
              your inbox
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 !bg-white rounded-lg !text-gray-900 !focus:outline-none !focus:ring-2 focus:!ring-white"
              />
              <Button className="bg-white !text-pink-600 hover:bg-gray-100 font-semibold px-6 shadow-lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/80 mt-3">
              No spam, just helpful content. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default Blogs;
