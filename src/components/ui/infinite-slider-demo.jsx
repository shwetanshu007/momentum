import { InfiniteSlider } from "@/components/ui/infinite-slider";

function InfiniteSliderBasic() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#00403d] mb-4">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We've helped businesses across industries achieve remarkable growth through data-driven marketing strategies.
        </p>
      </div>
      
      <InfiniteSlider gap={32} duration={30} className="w-full bg-white/50 backdrop-blur-sm rounded-2xl py-8">
        {/* Meta/Facebook */}
        <div className="flex items-center justify-center h-[80px] w-[160px] bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            alt="Meta/Facebook"
            className="h-[40px] w-auto object-contain"
          />
        </div>
        
        {/* Google */}
        <div className="flex items-center justify-center h-[80px] w-[160px] bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt="Google"
            className="h-[30px] w-auto object-contain"
          />
        </div>
        
        {/* Instagram */}
        <div className="flex items-center justify-center h-[80px] w-[160px] bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            alt="Instagram"
            className="h-[40px] w-auto object-contain"
          />
        </div>
        
        {/* LinkedIn */}
        <div className="flex items-center justify-center h-[80px] w-[160px] bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="h-[40px] w-auto object-contain"
          />
        </div>
        
        {/* WhatsApp */}
        <div className="flex items-center justify-center h-[80px] w-[160px] bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
            alt="WhatsApp"
            className="h-[40px] w-auto object-contain"
          />
        </div>
        
        {/* Shopify */}
        <div className="flex items-center justify-center h-[80px] w-[160px] bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png"
            alt="Shopify"
            className="h-[30px] w-auto object-contain"
          />
        </div>
        
        {/* YouTube */}
        <div className="flex items-center justify-center h-[80px] w-[160px] bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
            alt="YouTube"
            className="h-[35px] w-auto object-contain"
          />
        </div>
        
        {/* TikTok */}
        <div className="flex items-center justify-center h-[80px] w-[160px] bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/2560px-TikTok_logo.svg.png"
            alt="TikTok"
            className="h-[40px] w-auto object-contain"
          />
        </div>
      </InfiniteSlider>
    </div>
  );
}

export function MomentummInfiniteSlider() {
  return <InfiniteSliderBasic />;
}

export default {
  InfiniteSliderBasic,
  MomentummInfiniteSlider
};