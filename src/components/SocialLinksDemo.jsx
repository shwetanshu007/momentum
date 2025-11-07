import { SocialLinks } from "@/components/ui/social-links"

// Your actual social media links with proper brand images
const socials = [
  {
    name: "Instagram",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
  },
  {
    name: "Facebook", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png",
  },
  {
    name: "LinkedIn",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
  },
  {
    name: "WhatsApp",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png",
  },
]

function SocialLinksDemo() {
  return (
    <div className="relative flex min-h-[200px] w-full items-center justify-center px-4 py-10">
      <SocialLinks socials={socials} />
    </div>
  )
}

function SocialLinksCustomGap() {
  return (
    <div className="relative flex min-h-[200px] w-full items-center justify-center px-4 py-10">
      <SocialLinks 
        socials={socials.slice(0, 2)} 
        className="gap-8" 
      />
    </div>
  )
}

export default SocialLinksDemo
export { SocialLinksDemo, SocialLinksCustomGap }