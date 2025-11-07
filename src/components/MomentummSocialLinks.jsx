import { SocialLinks } from "@/components/ui/social-links"

// Momentumm Media branded social links with click handlers
export function MomentummSocialLinks({ className }) {
  const socials = [
    {
      name: "Facebook",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png",
      url: "https://www.facebook.com/share/1EZRtgvZBz/"
    },
    {
      name: "Instagram", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      url: "https://www.instagram.com/momentummmediaofficial?igsh=eTFtdHI4MjE5MWxn"
    },
    {
      name: "WhatsApp",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png", 
      url: "https://wa.me/919408266191?text=I%20am%20interested%20in%20a%20discovery%20call%20with%20Momentumm%20Media"
    }
  ]

  const handleSocialClick = (socialName) => {
    const social = socials.find(s => s.name === socialName)
    if (social?.url) {
      window.open(social.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div>
      <SocialLinks 
        socials={socials}
        className={`gap-6 ${className}`}
        onSocialClick={handleSocialClick}
      />
    </div>
  )
}