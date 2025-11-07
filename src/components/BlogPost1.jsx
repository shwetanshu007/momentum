import React from 'react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import GooeyNav from './GooeyNav.jsx';

const BlogPost1 = () => {
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
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Momentumm Media</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#00403d] mb-6 leading-tight">
            Measuring Marketing ROI: A Practical Framework for Business Leaders
          </h1>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Marketing is an investment, not an expense. Yet many businesses struggle to measure its true impact. Without a clear approach to tracking return on investment (ROI), even the best campaigns risk falling short of their potential. This article outlines a practical, evergreen framework for evaluating marketing ROI, empowering decision-makers to make informed, strategic choices.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">1️⃣</span>
              Define Clear Objectives
            </h2>
            <p className="text-gray-700 mb-4">
              Every marketing initiative should start with a specific, measurable goal. Common objectives include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Increasing qualified leads</li>
              <li>Boosting sales revenue</li>
              <li>Enhancing brand awareness</li>
              <li>Improving customer retention</li>
            </ul>
            <p className="text-gray-700 mt-4">
              By setting clear goals, you create a benchmark against which all activities can be measured.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">2️⃣</span>
              Establish Relevant KPIs
            </h2>
            <p className="text-gray-700 mb-4">
              Align your goals with Key Performance Indicators (KPIs) that provide meaningful insight. Examples include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cost per lead</li>
              <li>Conversion rate</li>
              <li>Customer lifetime value</li>
              <li>Return on ad spend (ROAS)</li>
              <li>Website engagement metrics</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Ensure KPIs are realistic, relevant, and shared across teams.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">3️⃣</span>
              Track Attribution Accurately
            </h2>
            <p className="text-gray-700 mb-4">
              Attribution identifies which marketing activities drive results. Without it, you risk misallocating budget. Common attribution models include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>First-touch</li>
              <li>Last-touch</li>
              <li>Multi-touch</li>
              <li>Time-decay</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Selecting the right model depends on your sales cycle and customer journey complexity.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">4️⃣</span>
              Analyze Costs and Returns Holistically
            </h2>
            <p className="text-gray-700 mb-4">
              Don't focus solely on campaign spend. Include all related costs:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Agency fees</li>
              <li>Technology subscriptions</li>
              <li>Creative production</li>
              <li>Team hours</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Then compare this to revenue directly attributable to marketing to calculate true ROI.
            </p>
            <div className="bg-[#d9ff00]/20 border border-[#d9ff00] rounded-lg p-4 mt-4">
              <p className="font-mono text-[#00403d] font-bold text-center">
                Formula: ROI = (Revenue – Cost) / Cost
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">5️⃣</span>
              Build a Consistent Reporting Framework
            </h2>
            <p className="text-gray-700 mb-4">
              Develop regular reporting to evaluate performance over time. Reports should be:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Clear and accessible</li>
              <li>Focused on agreed KPIs</li>
              <li>Tailored for stakeholders</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Consistent reporting creates transparency and supports agile decision-making.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-[#00403d] mb-4 flex items-center gap-2">
              <span className="text-[#d9ff00]">6️⃣</span>
              Use Insights for Continuous Improvement
            </h2>
            <p className="text-gray-700 mb-4">
              ROI measurement isn't just about proving past success—it's about improving future outcomes. Use findings to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Reallocate budgets toward higher-performing channels</li>
              <li>Refine audience targeting</li>
              <li>Optimize creative and messaging</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Continuous improvement ensures marketing remains aligned with business goals.
            </p>
          </div>

          {/* Conclusion */}
          <div className="bg-[#00403d] text-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-[#d9ff00]">
              Conclusion
            </h2>
            <p className="mb-4 leading-relaxed">
              Measuring marketing ROI requires discipline, clear objectives, and reliable data. By adopting a structured approach to goal setting, KPI tracking, attribution, and reporting, business leaders can make confident, evidence-based decisions about their marketing investments.
            </p>
            <p className="leading-relaxed">
              <strong>At Momentumm Media, we help brands implement rigorous ROI frameworks that ensure their marketing delivers real, sustained value.</strong>
            </p>
          </div>

          {/* CTA */}
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-[#00403d] mb-4">
              Ready to Measure Your Marketing ROI?
            </h3>
            <p className="text-gray-700 mb-6">
              Let's work together to implement a data-driven ROI framework for your business.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/919408266191?text=I%20am%20interested%20in%20measuring%20marketing%20ROI%20with%20Momentumm%20Media', '_blank')}
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

export default BlogPost1;