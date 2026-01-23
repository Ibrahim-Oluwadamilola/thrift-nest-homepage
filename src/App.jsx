import React, { useState } from 'react';
import { 
  Download, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle, 
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin 
} from 'lucide-react';
import { motion } from "framer-motion";

// Assets
import thriftnestLogo from './assets/thriftnest-Logo.webp';
import heroBoy from './assets/Hero-boy.webp';
import heroGirl from './assets/Hero-girl.webp';
import thriftPlan from './assets/Thriftplan-Card-2.webp';
import thriftPlans from './assets/Thriftplan-Card.webp';
import success from './assets/success.webp';
import iphone from './assets/iphone15.webp';
import frameOne from './assets/Frame-3.png';
import frame2 from './assets/Frame2.webp';
import frame1 from './assets/Frame-1.webp';
import personalInformation from './assets/personal-information.webp';
import kycVerification from './assets/KYC-verification.png';
import discoverPlan from './assets/discoverplan-1.webp';
import planDetails from './assets/Plan-Details.webp';
import members from './assets/members.webp';
import membersReceiving from './assets/Member-Receiving.webp';
import cycle from './assets/active-cycle.webp';
import iconOne from './assets/Icons-1.webp';
import iconTwo from './assets/icon-2.webp';
import iconThree from './assets/icon-3.webp';
import iconFour from './assets/icon-4.webp';
import reviewOne from './assets/review1.webp';
import reviewTwo from './assets/review2.webp';
import reviewThree from './assets/review3.png';
import reviewFour from './assets/review4.webp';
import reviewFive from './assets/review5.webp';
import reviewSix from './assets/review6.webp';
import reviewSeven from './assets/review7.png';
import reviewEight from './assets/review8.webp';
import business from './assets/business-img.webp';
import news from './assets/news.webp';
import productTips from './assets/product-tips.webp';
import safeHaven from './assets/partner1.webp';
import sudo from './assets/partner2.webp';
import dojah from './assets/partner3.webp';
import appStore from './assets/App-Store.webp';
import googlePlay from './assets/Google-Play.webp';
import iphoneMockup from './assets/phone-hold1.webp';

// --- SUB-COMPONENTS ---

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does a Thrift Plan Work?",
      answer: "A thrift plan operates by pooling the contributions of members towards common financial goals. Each month, members contribute a fixed amount, and one member receives the total contributions as a payout."
    },
    {
      question: "Is my money safe in a Thrift Plan?",
      answer: "Absolutely! At ThriftPay, we prioritize the security of your savings. All thrift are meticulously managed and monitored."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 font-sans">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Frequently asked questions</h2>
        <p className="text-gray-500 text-lg">Your Questions Answered!</p>
      </div>
      <div className="divide-y divide-gray-100 border-t border-gray-100">
        {faqs.map((faq, index) => (
          <div key={index} className="py-2">
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full py-6 flex justify-between items-center text-left group transition-all"
            >
              <span className={`text-xl md:text-2xl font-bold transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                {faq.question}
              </span>
              <span className={`text-3xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-blue-600' : 'text-slate-400'}`}>+</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-8' : 'max-h-0'}`}>
              <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* 1. NAVBAR */}
      <div className="fixed top-4 left-0 w-full z-[100] px-4 md:px-10">
        <nav className="max-w-7xl mx-auto bg-white border border-gray-100 shadow-sm rounded-2xl h-20 flex justify-between items-center px-8">
          <div className="flex items-center gap-2">
            <img src={thriftnestLogo} alt='logo' className="w-8 h-8" />
            <span className="text-xl font-bold text-blue-900 tracking-tight">ThriftNest</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">Home</a>
            <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors">Blogs</a>
            <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors">FAQs</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-gray-700 font-semibold hover:text-blue-600 transition-colors">Login</button>
            <button className="bg-blue-600 text-white px-7 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">Sign up</button>
          </div>
        </nav>
      </div>

      <div className="h-28"></div>

      {/* 2. HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-6xl md:text-8xl font-semibold  text-slate-900 leading-[1.1] mb-8">
            Save Smarter, <br /> Together
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-500 text-xl md:text-2xl mb-12 max-w-lg leading-relaxed"
          >
            Join thousands of savers achieving their financial goals with ThriftPay.
          </motion.p>
          <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-200 hover:scale-105 transition-transform flex items-center gap-3">
            Get The App <Download size={24} />
          </button>
        </motion.div>

        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-end justify-center">
          <img src={heroBoy} alt="Hero Boy" className="absolute bottom-0 left-[-10%] w-[70%] z-10 object-contain max-h-[110%]" />
          <img src={heroGirl} alt="Hero Girl" className="absolute bottom-0 right-[-15%] w-[75%] z-20 object-contain max-h-[115%]" />
          <div className="absolute top-[40%] -right-10 z-30"><img src={success} alt="Payout" className="w-36 md:w-48 shadow-md rounded-2xl" /></div>
          <div className="absolute top-[60%] -left-16 z-30"><img src={thriftPlan} alt="Group" className="w-44 md:w-56 shadow-md rounded-2xl" /></div>
          <div className="absolute -bottom-10 right-0 z-40"><img src={thriftPlans} alt="Plan" className="w-52 md:w-64 shadow-md rounded-2xl" /></div>
        </div>
      </main>

      {/* ABOUT US */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[450px] aspect-[4/5] bg-blue-50/50 rounded-[3rem] border border-blue-100 flex items-center justify-center p-8 overflow-hidden">
            <img src={iphone} alt="App Interface" className="relative z-10 w-full drop-shadow-2xl" />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase mb-6">About Us</div>
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-8">Grow your wealth, and achieve your financial goals.</h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">At ThriftPay, we are passionate about empowering individuals to take control of their financial futures.</p>
          <button className="flex items-center gap-2 text-blue-600 font-bold text-lg group">Learn More <span className="group-hover:translate-x-2 transition-transform">→</span></button>
        </div>
      </section>

      {/* WHY THRIFTNEST */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Why ThriftNest?</h2>
          <p className="text-gray-500 text-lg">ThriftNest is your trusted partner for smarter savings.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: frameOne, title: "Tailored Thrift Plans", desc: "Our plans are designed to match your income and aspirations." },
            { img: frame2, title: "Real-time Transparency", desc: "Stay informed every step of the way with our transparent system." },
            { img: frame1, title: "Secure Platform", desc: "Your security is our priority. Every saver undergoes verification." }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <img src={feature.img} className="w-16 h-16 mb-8" alt={feature.title} />
              <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TAKE CHARGE SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">Take Charge of your financial future</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col"><div className="bg-white rounded-[2.5rem] p-4 border border-gray-100 mb-8"><img src={personalInformation} alt="Signup" className="w-full rounded-3xl" /></div><h3 className="text-2xl font-black">Signup</h3><p className="text-gray-400">Download our app and create your account.</p></div>
          <div className="flex flex-col"><div className="bg-white rounded-[2.5rem] p-4 border border-gray-100 mb-8"><img src={kycVerification} alt="KYC" className="w-full rounded-3xl" /></div><h3 className="text-2xl font-black">KYC Verification</h3><p className="text-gray-400">Verify your identity for a secure environment.</p></div>
          <div className="flex flex-col"><div className="bg-gray-50/50 rounded-[2.5rem] p-6 border border-gray-100 mb-8 h-[350px] flex items-center justify-center"><img src={discoverPlan} alt="Plans" className="w-[90%] shadow-xl rounded-3xl" /></div><h3 className="text-2xl font-black">Discover Plans</h3><p className="text-gray-400">Choose from a variety of plans based on income.</p></div>
        </div>
      </section>

      {/* JOIN & TRACK PROGRESS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-[#F9FAFB] rounded-[3rem] border border-gray-100 p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
            <div className="flex flex-col pr-0 md:pr-12 pb-10 md:pb-0">
              <div className="relative h-[400px] flex items-center justify-center mb-6"><img src={planDetails} className="w-[50%] drop-shadow-xl rounded-[2rem]" /></div>
              <h3 className="text-2xl font-black">Join a Plan</h3>
              <p className="text-gray-400">Join a plan that suits your financial objectives.</p>
            </div>
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gray-200/50"></div>
            <div className="flex flex-col pl-0 md:pl-12 pt-10 md:pt-0">
              <div className="relative h-[400px] mb-6">
                <img src={cycle} className="absolute top-8 left-0 w-[50%] z-10 drop-shadow-lg" />
                <img src={members} className="absolute top-16 right-0 w-[45%] z-20 drop-shadow-xl" />
                <img src={membersReceiving} className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[75%] z-30 drop-shadow-2xl" />
              </div>
              <h3 className="text-2xl font-black">Track Progress</h3>
              <p className="text-gray-400">Monitor your savings, payouts, and overall progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REWARD SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="px-3 md:px-14">
            <h2 className="font-semibold text-slate-900 text-2xl md:text-4xl mb-4">Bring Your Thrift Group & Get Rewarded!</h2>
            <p className="text-gray-600 mb-8">Earn ₦500 per active member when they complete registration.</p>
            <div className="space-y-6">
              {[ {img: iconOne, t: "Earn ₦500 Per Member"}, {img: iconTwo, t: "Effortless management"}, {img: iconThree, t: "Secure Tracking"}, {img: iconFour, t: "Flexible Control"} ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <img src={item.img} className="w-10 h-10 object-contain" alt="icon" />
                  <div><h4 className="font-semibold text-slate-900">{item.t}</h4><p className="text-gray-400 text-sm">Automate and manage with ease.</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-100/40 rounded-full blur-[100px] -z-10"></div>
            <img src={heroGirl} className="w-[80%] max-h-[450px] object-contain drop-shadow-2xl" alt="Girl" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden">
        <div className="text-center mb-16 relative z-30">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-2 relative inline-block">
            What our customers say
            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#2563eb" strokeWidth="4" fill="transparent" strokeLinecap="round" opacity="0.3" />
            </svg>
          </h2>
          <p className="text-gray-500 text-lg mt-4">Hear from our savers.</p>
        </div>
        <div className="relative min-h-[600px] flex items-center justify-center">
          <img src={reviewOne} className="absolute top-[5%] left-[10%] w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl" alt="1" />
          <img src={reviewTwo} className="absolute top-[35%] left-[5%] w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg z-10" alt="User 2" />
          <img src={reviewThree} className="absolute bottom-[20%] left-[5%] w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl" alt="3" />
          <img src={reviewFour} className="absolute bottom-[5%] left-[20%] w-14 h-14 rounded-full object-cover border-4 border-white shadow-md z-10" alt="User 4" />
          <div className="bg-[#F9FAFB] rounded-[3rem] p-10 md:p-16 max-w-2xl w-full text-center border border-gray-100">
            <div className="flex justify-center gap-1 mb-6 text-yellow-400">★★★★★</div>
            <blockquote className="text-xl md:text-2xl font-semibold mb-8">"I love the transparency on ThriftPay. I always know where my money is going."</blockquote>
            <cite className="not-italic font-bold text-lg block">Jenny Wilson</cite>
            <span className="text-gray-400 text-sm">Accountant at Nestle Nigeria</span>
          </div>
          <img src={reviewFive} className="absolute top-[10%] right-[10%] w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl" alt="5" />
          <img src={reviewSix} className="absolute top-[40%] right-[3%] w-18 h-18 rounded-full object-cover border-4 border-white shadow-lg z-10" alt="User 6" />
          <img src={reviewSeven} className="absolute bottom-[20%] right-[5%] w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl" alt="7" />
        <img src={reviewEight} className="absolute bottom-[8%] right-[22%] w-16 h-16 rounded-full object-cover border-4 border-white shadow-md z-10" alt="User 8" />

        </div>
      </section>

      {/* BLOGS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
  <div className="flex justify-between items-end mb-16">
    <h2 className="text-4xl font-black">Blogs</h2>
    <button className="px-8 py-3 border rounded-full font-bold">See More →</button>
  </div>

  {/* Removed hover classes from this grid div */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      { img: business, cat: "Business" },
      { img: news, cat: "News" },
      { img: productTips, cat: "Product Tips" }
    ].map((post, i) => (
      /* Applied hover classes to the individual article div */
      <article 
        key={i} 
        className="group cursor-pointer bg-white p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        <div className="overflow-hidden rounded-[2.5rem] mb-8 aspect-[4/3]">
          <img 
            src={post.img} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            alt={post.cat}
          />
        </div>
        
        <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase">
          {post.cat}
        </span>
        
        <h3 className="text-2xl font-bold mt-4 mb-4">Why Financial Goals Fail...</h3>
        <p className="text-gray-500 mb-8 line-clamp-2">
          Setting financial goals feels empowering...
        </p>
        
        <button className="px-6 py-2 border rounded-full font-bold group-hover:bg-slate-900 group-hover:text-white transition-all">
          Read more →
        </button>
      </article>
    ))}
  </div>
</section>

      <FAQSection />

      {/* PARTNERS */}
      <section className="bg-[#F9FAFB] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-600 mb-16">Our Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
            <img src={safeHaven} alt="Partner" className="h-12 object-contain" />
            <img src={sudo} alt="Partner" className="h-10 object-contain" />
            <img src={dojah} alt="Partner" className="h-10 object-contain" />
          </div>
        </div>
      </section>

      {/* TRANSFORM CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-[3rem] overflow-hidden min-h-[500px] flex items-center px-8 md:px-20 py-16 md:py-0">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="text-white">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Transform Your Savings Experience with ThriftNest!</h2>
              <p className="text-blue-100 text-xl mb-10">Download now and start thriving!</p>
              <div className="flex gap-4">
                <img src={appStore} className="h-12 cursor-pointer" alt="App Store" />
                <img src={googlePlay} className="h-12 cursor-pointer" alt="Google Play" />
              </div>
            </motion.div>
            <motion.img initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} viewport={{once:true}} src={iphoneMockup} className="w-full max-w-[400px] mx-auto drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-24 pb-12 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
      {/* Left side: Brand & Address */}
      <div className="md:col-span-6">
        <div className="flex items-center gap-2 mb-6">
          <img src={thriftnestLogo} alt='logo' className="w-8 h-8" />
          <span className="text-xl font-bold text-blue-900">ThriftNest</span>
        </div>
        <p className="text-gray-500 max-w-sm mb-4">Ogun Housing Estate, Ogun State, Nigeria.</p>
        <p className="text-gray-500 mb-2">+234 810 753 6436</p>
        <p className="text-gray-400 text-sm">RC- 7827136</p>
      </div>

      {/* Right side: All navigation links on one horizontal line */}
      <div className="md:col-span-6 flex flex-row flex-wrap items-start md:justify-end gap-x-8 gap-y-4 text-gray-600 font-medium">
        <a href="#" className="hover:text-blue-600 whitespace-nowrap">About Us</a>
        <a href="#" className="hover:text-blue-600 whitespace-nowrap">FAQ's</a>
        <a href="#" className="hover:text-blue-600 whitespace-nowrap">Contact Us</a>
        <a href="#" className="hover:text-blue-600 whitespace-nowrap">Terms of Use</a>
        <a href="#" className="hover:text-blue-600 whitespace-nowrap">Privacy Policy</a>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-gray-400 text-sm">Copyright © ThriftNest 2025 | ThriftNest by Jemivy Global Technology LTD.</p>
      <div className="flex gap-5 text-blue-900">
        <Linkedin size={20} className="cursor-pointer hover:text-blue-600" />
        <Twitter size={20} className="cursor-pointer hover:text-blue-600" />
        <Facebook size={20} className="cursor-pointer hover:text-blue-600" />
        <Instagram size={20} className="cursor-pointer hover:text-blue-600" />
        <Youtube size={20} className="cursor-pointer hover:text-blue-600" />
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}