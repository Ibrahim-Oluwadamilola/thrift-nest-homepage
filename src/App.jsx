import { Download, Shield, Zap, Users, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from "framer-motion";
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
import iconOne from './assets/icons-1.webp';
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














function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. NAVBAR */}
      
   {/* Floating Fixed Navbar Container */}
<div className="fixed top-4 left-0 w-full z-[100] px-4 md:px-10">
  <nav className="max-w-7xl mx-auto bg-white border border-gray-100 shadow-sm rounded-2xl h-20 flex justify-between items-center px-8">
    
    {/* Left: Logo */}
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center">
        <img src={thriftnestLogo} alt='logo' className="w-8 h-8" />
      </div>
      <span className="text-xl font-bold text-blue-900 tracking-tight">ThriftNest</span>
    </div>
    
    {/* Center: The "Pill" Menu Links */}
    <div className="hidden md:flex items-center gap-8">
      <a href="#" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">Home</a>
      <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors">About Us</a>
      <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors">Blogs</a>
      <a href="#" className="text-gray-500 font-medium hover:text-blue-600 transition-colors">FAQs</a>
    </div>

    {/* Right: Auth Buttons */}
    <div className="flex items-center gap-6">
      <button className="text-gray-700 font-semibold hover:text-blue-600 transition-colors">
        Login
      </button>
      <button className="bg-blue-600 text-white px-7 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
        Sign up
      </button>
    </div>
  </nav>
</div>

{/* IMPORTANT: Spacer to prevent hero content from being hidden */}
<div className="h-28"></div>


{/* IMPORTANT: This spacer prevents the hero content from being hidden under the fixed nav */}
<div className="h-24"></div>

      {/* 2. HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8">
            Save Smarter, <br />
            <span className="text-blue-600">Together</span>
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl mb-12 max-w-lg leading-relaxed">
            Join thousands of savers achieving their financial goals with ThriftPay.
          </p>
          <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-200 hover:scale-105 transition-transform flex items-center gap-3">
            Get The App <Download size={24} />
          </button>
        </div>

        {/* Hero Visual Mockup */}
        {/* Right Visual (The Frame with Separate Boy and Girl) */}
{/* Right Visual (The Frame with Separate Boy and Girl) */}
  
  {/* THE BLUE DASHED FRAME (The Container) */}
  <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-end justify-center overflow-visible">
    
    {/* 1. THE HERO BOY (Positioned left and slightly behind the girl) */}
    <img 
      src={heroBoy} 
      alt="Hero Boy" 
      className="absolute bottom-0 left-[-10%] w-[70%] z-10 object-contain max-h-[110%] pointer-events-none"
    />

    {/* 2. THE HERO GIRL (Positioned right and in front) */}
    <img 
      src={heroGirl} 
      alt="Hero Girl" 
      className="absolute bottom-0 right-[-15%] w-[75%] z-20 object-contain max-h-[115%] pointer-events-none"
    />

    {/* 3. PAYOUT SUCCESS CARD (Floating top right) */}
    <div className="absolute top-[40%] -right-10 z-30 animate-float">
      <img src={success} alt="Payout" className="w-36 md:w-48 shadow-md rounded-2xl" />
    </div>

    {/* 4. BASIC THRIFT GROUP CARD (Floating middle left) */}
    <div className="absolute top-[60%] -left-16 z-30 animate-float-delayed">
      <img src={thriftPlan} alt="Group" className="w-44 md:w-56 shadow-md rounded-2xl" />
    </div>

    {/* 5. PLAN PROGRESS CARD (Floating bottom right) */}
    <div className="absolute -bottom-10 right-0 z-40">
      <img src={thriftPlans} alt="Plan" className="w-52 md:w-64 shadow-md rounded-2xl" />
    </div>

  </div>


      </main>

      {/* ABOUT US SECTION */}
<section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
  
  {/* Left Side: Phone Mockup Visual */}
  <div className="md:w-1/2 flex justify-center">
    <div className="relative w-full max-w-[450px] aspect-[4/5] bg-blue-50/50 rounded-[3rem] border border-blue-100 flex items-center justify-center p-8 overflow-hidden">
      
      {/* Decorative Gradient Background behind the phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 blur-[80px] rounded-full"></div>

      {/* Main Phone Mockup Image */}
      {/* Replace 'phoneMockup' with your imported image variable */}
      <img 
        src={iphone} 
        alt="ThriftNest App Interface" 
        className="relative z-10 w-full drop-shadow-2xl"
      />
    </div>
  </div>

  {/* Right Side: Text Content */}
  <div className="md:w-1/2">
    {/* Blue "About Us" Badge */}
    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
      <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
      About Us
    </div>

    <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-8">
      Grow your wealth, and achieve your financial goals.
    </h2>

    <p className="text-gray-500 text-lg leading-relaxed mb-8">
      At ThriftPay, we are passionate about empowering individuals to take control of their financial futures. 
      We believe that everyone deserves the opportunity to save smartly, grow their wealth, and achieve their 
      financial goals.
    </p>

    <p className="text-gray-500 text-lg leading-relaxed mb-10">
      With a commitment to transparency, community, and innovation, we have built a platform that redefines 
      the way people approach Thrift saving.
    </p>

    <button className="flex items-center gap-2 text-blue-600 font-bold text-lg group">
      Learn More 
      <span className="group-hover:translate-x-2 transition-transform">→</span>
    </button>
  </div>
</section>

      {/* WHY THRIFTNEST SECTION */}
<section className="max-w-7xl mx-auto px-6 py-24 bg-white">
  {/* Header Content */}
  <div className="text-center max-w-3xl mx-auto mb-20">
    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
      Why ThriftNest ?
    </h2>
    <p className="text-gray-500 text-lg leading-relaxed">
      ThriftNest is your trusted partner for smarter savings. Join our community of like-minded savers and 
      explore tailored Thrift plans designed just for you. Let's help you achieve your financial goals!
    </p>
  </div>

  {/* Features Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Card 1: Tailored Thrift Plans */}
    <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 mb-8 flex items-center justify-center">
        {/* Replace with your specific SVG icon */}
        <img src={frameOne} alt="Tailored Plans" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-4">Tailored Thrift Plans</h3>
      <p className="text-gray-500 leading-relaxed">
        Our Thrift plans are meticulously designed to match your income level and financial aspirations. 
        Whether you're saving for a dream vacation, a new home, or simply building a rainy-day fund. 
        ThriftPay offers plans that suit your specific needs.
      </p>
    </div>

    {/* Card 2: Real-time Transparency */}
    <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 mb-8 flex items-center justify-center">
        <img src={frame2} alt="Transparency" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-4">Real-time Transparency</h3>
      <p className="text-gray-500 leading-relaxed">
        Stay informed every step of the way with our transparent transaction system. Easily track your 
        thrift contributions and payouts in real-time, directly from your mobile device.
      </p>
    </div>

    {/* Card 3: Secure Platform */}
    <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 mb-8 flex items-center justify-center">
        <img src={frame1} alt="Security" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-4">Secure Platform</h3>
      <p className="text-gray-500 leading-relaxed">
        Your security is our priority. Every thrift saver undergoes thorough verification to ensure 
        compliance and trust. We assess creditworthiness, giving you peace of mind as you save.
      </p>
    </div>

  </div>
</section>


{/* TAKE CHARGE SECTION */}
<section className="max-w-7xl mx-auto px-6 py-24 bg-white">
  
  {/* Header with Animation */}
  <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  
  /* CHANGED: set once to false to make it animate every time you scroll */
  viewport={{ once: false, amount: 0.1 }} 
  
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-center max-w-4xl mx-auto mb-20"
>
  <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
    Take Charge of your financial future <br /> with a few simple steps
  </h2>
  <p className="text-gray-400 text-lg">
    Let's guide you towards a brighter, wealthier tomorrow.
  </p>
</motion.div>

  {/* The 3-Column Lineup */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
    
    {/* 1. Signup Card */}
    <div className="flex flex-col h-full">
      <div className="bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-sm mb-8 flex-grow flex items-center justify-center">
        <img src={personalInformation} alt="Personal Information" className="w-full h-auto rounded-3xl" />
      </div>
      <div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Signup</h3>
        <p className="text-gray-400 leading-relaxed">
          Download our mobile app. Create your account and complete KYC.
        </p>
      </div>
    </div>

    {/* 2. KYC Verification Card */}
    <div className="flex flex-col h-full">
      <div className="bg-white rounded-[2.5rem] p-4 border border-gray-100 shadow-sm mb-8 flex-grow flex items-center justify-center">
        <img src={kycVerification} alt="KYC Verification" className="w-full h-auto rounded-3xl" />
      </div>
      <div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">KYC Verification</h3>
        <p className="text-gray-400 leading-relaxed">
          Verify your identity to ensure a secure savings environment.
        </p>
      </div>
    </div>

    {/* 3. Discover Plans Card (With Overlap) */}
    <div className="flex flex-col h-full">
      <div className="bg-gray-50/50 rounded-[2.5rem] p-6 border border-gray-100 mb-8 flex-grow relative overflow-visible flex items-center justify-center min-h-[350px]">
        {/* Main Card Image */}
        <img 
          src={discoverPlan} 
          alt="Basic Thrift Plan" 
          className="relative z-10 w-[90%] shadow-xl rounded-3xl" 
        />
        {/* Floating Coordinator Overlap */}
      </div>
      <div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Discover Plans</h3>
        <p className="text-gray-400 leading-relaxed">
          Choose from a variety of Thrift plans based on your income level.
        </p>
      </div>
    </div>

  </div>
</section>
{/* THE COMPACT WRAPPER BOX */}
<section className="max-w-7xl mx-auto px-6 py-24">
  {/* Reduced overall padding from p-16 to p-10 to make the box smaller */}
  <div className="bg-[#F9FAFB] rounded-[3rem] border border-gray-100 p-10 shadow-sm">
    
    {/* GRID CONTAINER */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
      
      {/* 1. LEFT SIDE: JOIN A PLAN */}
      <div className="flex flex-col pr-0 md:pr-12 pb-10 md:pb-0">
        {/* Reduced container height to 400px to prevent covering text */}
        <div className="relative h-[400px] flex items-center justify-center mb-6">
          {/* Reduced image width to 65% for a cleaner look */}
          <img 
            src={planDetails} 
            alt="Plan Details" 
            className="w-[50%] h-auto drop-shadow-xl rounded-[2rem] border border-white/20" 
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">Join a Plan</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Join a plan that suits your financial objectives.
          </p>
        </div>
      </div>

      {/* VERTICAL DIVIDER LINE */}
      <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gray-200/50"></div>

      {/* 2. RIGHT SIDE: TRACK PROGRESS */}
      <div className="flex flex-col pl-0 md:pl-12 pt-10 md:pt-0 border-t md:border-t-0 border-gray-200/50">
        {/* Adjusted image container height */}
        <div className="relative h-[400px] mb-6">
          
          {/* Active Cycle Card - Scaled down */}
          <img 
            src={cycle} 
            alt="Active Cycle" 
            className="absolute top-8 left-0 w-[50%] z-10 drop-shadow-lg rounded-xl" 
          />

          {/* Members List Card - Scaled down */}
          <img 
            src={members} 
            alt="Members Status" 
            className="absolute top-16 right-0 w-[45%] z-20 drop-shadow-xl rounded-xl" 
          />

          {/* Payout Success Card - Scaled down to prevent overlap with text */}
          <img 
            src={membersReceiving} 
            alt="Member Payout" 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[75%] z-30 drop-shadow-2xl rounded-xl" 
          />
        </div>

        <div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">Track Progress</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Monitor your savings, payouts, and overall progress.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* BRING YOUR GROUP SECTION */}
<section className="max-w-7xl mx-auto px-6 py-16 bg-white overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Left Column: Text & Benefits */}
    <div className="px-3 md:px-14">
      <h2 className="font-semibold text-slate-900 text-2xl md:text-4xl leading-tight mb-4">
        Bring Your Thrift Group & <br /> Get Rewarded!
      </h2>
      <p className="mt-2 md:mt-4 text-gray-600 text-md leading-relaxed max-w-lg">
        Empower your financial journey by teaming up with friends, family, or colleagues. 
        Bring your Thrift group to ThriftNest and earn ₦500 per active member when 
        they complete registration. Join your group, and start contributing.
      </p>

      {/* Benefit List with Image Icons */}
      <div className="mt-6 space-y-3 md:space-y-6">
        
        {/* Item 1 */}
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
             <img src={iconOne} alt="Reward Icon" className="w-full h-auto object-contain" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 text-lg ">Earn ₦500 Per Member</h4>
            <p className="text-gray-400 text-sm">As a coordinator, you get rewarded for every member who joins and contributes.</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
             <img src={iconTwo} alt="Management Icon" className="w-full h-auto object-contain" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 text-lg ">Effortless group management</h4>
            <p className="text-gray-400 text-sm">Automate contributions, track payments, and manage members with ease.</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
             <img src={iconThree} alt="Tracking Icon" className="w-full h-auto object-contain" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 text-lg">Transparent & Secure Tracking</h4>
            <p className="text-gray-400 text-sm">Monitor every transaction and ensure seamless payouts.</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
             <img src={iconFour} alt="Control Icon" className="w-full h-auto object-contain" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 text-lg">Flexible Control</h4>
            <p className="text-gray-400 text-sm">Set customized rules and parameters for your group's needs.</p>
          </div>
        </div>

      </div>
    </div>

    {/* Right Column: Hero Girl Image */}
    <div className="relative flex justify-center">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-100/40 rounded-full blur-[100px] -z-10"></div>
      
      <img 
        src={heroGirl} 
        alt="ThriftNest User" 
        className="w-[80%] max-h-[450px] h-auto drop-shadow-2xl object-contain" 
      />
    </div>

  </div>
</section>

<section className="relative max-w-7xl mx-auto px-6 py-24 bg-white overflow-hidden font-sans">
  
  {/* Header with Doodle Underline */}
  <div className="text-center mb-16 relative z-30">
    <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-2 relative inline-block">
      What our customers say
      {/* Hand-drawn style blue underline */}
      <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
        <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#2563eb" strokeWidth="4" fill="transparent" strokeLinecap="round" opacity="0.3" />
      </svg>
    </h2>
    <p className="text-gray-500 text-lg mt-4">Hear from our savers.</p>
  </div>

  <div className="relative min-h-[700px] flex items-center justify-center">
    
    {/* --- LEFT SIDE USERS --- */}
    <img src={reviewOne} className="absolute top-[5%] left-[15%] w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl z-10" alt="User 1" />
    <img src={reviewTwo} className="absolute top-[35%] left-[5%] w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg z-10" alt="User 2" />
    <img src={reviewThree} className="absolute bottom-[30%] left-[12%] w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl z-10" alt="User 3" />
    <img src={reviewFour} className="absolute bottom-[5%] left-[20%] w-14 h-14 rounded-full object-cover border-4 border-white shadow-md z-10" alt="User 4" />

    {/* --- CENTRAL CARD --- */}
    <div className="bg-[#F9FAFB] rounded-[3rem] p-10 md:p-16 max-w-2xl w-full text-center border border-gray-100 shadow-sm relative z-20">
      <div className="flex justify-center gap-1 mb-6 text-yellow-400 text-xl">
        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
      </div>

      <blockquote className="text-xl md:text-2xl font-semibold text-slate-900 leading-snug mb-8 px-4">
        "I love the transparency on ThriftPay. I always know where my money is going."
      </blockquote>

      <div className="space-y-1">
        <cite className="not-italic font-bold text-slate-900 text-lg block">Jenny Wilson</cite>
        <span className="text-gray-400 text-sm">Accountant at Nestle Nigeria</span>
      </div>
    </div>

    {/* --- RIGHT SIDE USERS --- */}
    <img src={reviewFive} className="absolute top-[8%] right-[10%] w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl z-10" alt="User 5" />
    <img src={reviewSix} className="absolute top-[40%] right-[3%] w-18 h-18 rounded-full object-cover border-4 border-white shadow-lg z-10" alt="User 6" />
    <img src={reviewSeven} className="absolute bottom-[25%] right-[12%] w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl z-10" alt="User 7" />
    <img src={reviewEight} className="absolute bottom-[8%] right-[22%] w-16 h-16 rounded-full object-cover border-4 border-white shadow-md z-10" alt="User 8" />

  </div>
</section>


<section className="max-w-7xl mx-auto px-6 py-24 bg-white">
  
  {/* Blog Header with "See More" Button */}
  <div className="flex justify-between items-end mb-12">
    <div>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Blogs</h2>
      <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
        Discover How You Can Build Wealth, Stay Consistent, and Thrive Financially Through Stories That Speak Your Language.
      </p>
    </div>
    {/* See More Button */}
    <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
      See More <span className="text-xl">→</span>
    </button>
  </div>

  {/* Blog Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Blog Card 1 */}
    <article className="flex flex-col">
      <div className="overflow-hidden rounded-[2rem] mb-6 h-64">
        <img 
          src={business} 
          alt="Business Blog" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold">Business</span>
        <time className="text-gray-400 text-sm">10 Aug, 2025</time>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
        Why Financial Goals Fail, And How to Make Yours Stick
      </h3>
      <p className="text-gray-500 mb-6 line-clamp-2">
        Setting financial goals feels empowering, like declaring to the universe: I’m ready to level up.
      </p>
      <button className="flex items-center gap-2 text-slate-900 font-bold hover:gap-3 transition-all">
        Read more <span className="text-lg">→</span>
      </button>
    </article>

    {/* Blog Card 2 */}
    <article className="flex flex-col">
      <div className="overflow-hidden rounded-[2rem] mb-6 h-64">
        <img 
          src={news} 
          alt="News Blog" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold">News</span>
        <time className="text-gray-400 text-sm">10 Aug, 2025</time>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
        Why Financial Goals Fail, And How to Make Yours Stick
      </h3>
      <p className="text-gray-500 mb-6 line-clamp-2">
        Setting financial goals feels empowering, like declaring to the universe: I’m ready to level up.
      </p>
      <button className="flex items-center gap-2 text-slate-900 font-bold">
        Read more <span>→</span>
      </button>
    </article>

    {/* Blog Card 3 */}
    <article className="flex flex-col">
      <div className="overflow-hidden rounded-[2rem] mb-6 h-64">
        <img 
          src={productTips} 
          alt="Product Tips" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold">Product tips</span>
        <time className="text-gray-400 text-sm">10 Aug, 2025</time>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
        Why Financial Goals Fail, And How to Make Yours Stick
      </h3>
      <p className="text-gray-500 mb-6 line-clamp-2">
        Setting financial goals feels empowering, like declaring to the universe: I’m ready to level up.
      </p>
      <button className="flex items-center gap-2 text-slate-900 font-bold">
        Read more <span>→</span>
      </button>
    </article>

  </div>
</section>
      {/* 4. REWARD SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-blue-600 rounded-[3rem] my-10 text-white overflow-hidden relative">
         <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Bring Your Thrift Group & Get Rewarded!</h2>
              <p className="text-blue-100 text-xl mb-8">Earn ₦500 per active member when they complete registration.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><CheckCircle size={20}/> Effortless group management</div>
                <div className="flex items-center gap-3"><CheckCircle size={20}/> Transparent & Secure Tracking</div>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20 text-center">
               <p className="text-4xl font-black mb-2">₦500</p>
               <p className="text-blue-200 uppercase tracking-widest text-xs font-bold">Per Active Member</p>
            </div>
         </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-white pt-24 pb-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div> <img src={thriftnestLogo} alt='logo' className="w-8 h-8" /></div>
              <span className="text-xl font-bold text-blue-900">ThriftNest</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Ogun Housing Estate, Ogun State, Nigeria.</p>
            <p className="text-gray-500 text-sm font-bold">RC- 7827136</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3 flex flex-col text-gray-500 font-medium">
              <a href="#">About Us</a>
              <a href="#">FAQ's</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="space-y-3 flex flex-col text-gray-500 font-medium">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-50 text-center text-gray-400 text-xs">
          Copyright ©️ ThriftNest 2025 | ThriftNest by Jemivy Global Technology LTD.
        </div>
      </footer>
    </div>
  );
}

export default App;