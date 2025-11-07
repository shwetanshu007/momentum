import React from 'react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import GooeyNav from './GooeyNav.jsx';

const BlogPost2 = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* Background shader layer - fixed to viewport */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse 80% 80% at 50% -20%, rgba(217, 255, 0, 0.3), transparent),
              radial-gradient(ellipse 80% 80% at 80% 50%, rgba(0, 64, 61, 0.5), transparent),
              radial-gradient(ellipse 80% 80% at 40% 80%, rgba(179, 207, 204, 0.3), transparent),
              linear-gradient(135deg, #00403d 0%, #72b9bb 50%, #d9ff00 100%)
            `
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-6 py-4" style={{ background: 'transparent', position: 'relative', zIndex: 30 }}>
        <button 
          onClick={handleBackClick}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        <div className="flex-1 flex justify-end">
          <GooeyNav />
        </div>
      </nav>

      {/* Blog Content */}
      <div className="relative z-10 container mx-auto px-6 py-8 max-w-4xl">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20 shadow-xl">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>October 18, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Momentumm Media</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#00403d] mb-6 leading-tight">
            Building a Cohesive Brand Strategy That Delivers Results
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            A strong brand is more than a logo or slogan. It is a strategic asset that drives awareness, trust, and growth. But without a cohesive strategy, even the most compelling creative elements can fail to deliver meaningful results. This article explores an evergreen approach to building a brand strategy that aligns your entire organization and resonates with your audience.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">1️⃣</span>
              Define Your Brand Purpose
            </h2>
            <p className="text-gray-700 mb-4">
              Start with your "why." Your brand purpose should clearly articulate:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The problem you solve</li>
              <li>The value you deliver</li>
              <li>Why customers should choose you</li>
            </ul>
            <p className="text-gray-700 mt-4">
              This purpose acts as the foundation for all marketing and communication.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">2️⃣</span>
              Understand Your Audience
            </h2>
            <p className="text-gray-700 mb-4">
              Effective branding requires deep insight into your target market. Research should cover:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Demographics</li>
              <li>Pain points and motivations</li>
              <li>Buying journey</li>
              <li>Preferred communication channels</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Building customer personas can help keep strategy focused and relevant.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">3️⃣</span>
              Craft a Clear Positioning Statement
            </h2>
            <p className="text-gray-700 mb-4">
              Your positioning statement defines how you want to be perceived relative to competitors. It should include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Target audience</li>
              <li>Frame of reference (category)</li>
              <li>Differentiating benefit</li>
              <li>Reason to believe</li>
            </ul>
            <p className="text-gray-700 mt-4">
              A clear positioning statement keeps all messaging consistent.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">4️⃣</span>
              Develop Visual and Verbal Identity
            </h2>
            <p className="text-gray-700 mb-4">
              Consistency is key to recognition and trust. Ensure your brand guidelines define:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Logo usage</li>
              <li>Color palette</li>
              <li>Typography</li>
              <li>Tone of voice</li>
              <li>Key messaging pillars</li>
            </ul>
            <p className="text-gray-700 mt-4">
              This identity should be used across all touchpoints, online and offline.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">5️⃣</span>
              Align Internal Stakeholders
            </h2>
            <p className="text-gray-700 mb-4">
              Brand strategy isn't just for marketing—it should guide the entire organization.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Conduct training and workshops</li>
              <li>Provide accessible guidelines</li>
              <li>Ensure leadership buy-in</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Alignment ensures every employee represents the brand consistently.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">6️⃣</span>
              Maintain Consistency While Evolving
            </h2>
            <p className="text-gray-700 mb-4">
              A strong brand remains consistent while adapting to change.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Regularly review your brand guidelines</li>
              <li>Gather customer feedback</li>
              <li>Evolve messaging and visuals to stay relevant</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Consistent evolution keeps your brand competitive without losing its core identity.
            </p>
          </div>

          {/* Conclusion */}
          <div className="bg-[#00403d] text-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-[#d9ff00]">
              Conclusion
            </h2>
            <p className="mb-4 leading-relaxed">
              Building a cohesive brand strategy requires deliberate planning, audience understanding, and organizational alignment. By following this framework, businesses can create brands that deliver real, lasting value in any market environment.
            </p>
            <p className="leading-relaxed">
              <strong>At Momentumm Media, we partner with organizations to develop brand strategies that drive measurable business outcomes.</strong>
            </p>
          </div>

          {/* CTA */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-[#00403d] mb-4">
              Ready to Build Your Brand Strategy?
            </h3>
            <p className="text-gray-700 mb-6">
              Let's create a cohesive brand strategy that drives real business results.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/919408266191?text=I%20am%20interested%20in%20building%20a%20brand%20strategy%20with%20Momentumm%20Media', '_blank')}
              className="px-8 py-4 bg-[#d9ff00] text-[#00403d] font-bold rounded-full hover:bg-[#b8e600] transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;