import Link from "next/link";
import { Cookie, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-chocolate text-warm-beige py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-pink p-2 rounded-xl">
                <Cookie className="text-deep-chocolate" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tight">
                Fresh Batch Box
              </span>
            </Link>
            <p className="text-warm-beige/70 max-w-md mb-6 font-medium leading-relaxed">
              Handcrafted cookies and cupcakes baked fresh in Edmonton. We deliver
              sweetness monthly, straight from our kitchen to your doorstep.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-warm-beige/10 p-3 rounded-full hover:bg-brand-pink hover:text-deep-chocolate transition-all">
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@freshbatchbox.ca" className="bg-warm-beige/10 p-3 rounded-full hover:bg-brand-pink hover:text-deep-chocolate transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-warm-beige/60 hover:text-brand-pink transition-colors font-bold">Home</Link></li>
              <li><Link href="/menu" className="text-warm-beige/60 hover:text-brand-pink transition-colors font-bold">Menu</Link></li>
              <li><Link href="/pricing" className="text-warm-beige/60 hover:text-brand-pink transition-colors font-bold">Pricing</Link></li>
              <li><Link href="/about" className="text-warm-beige/60 hover:text-brand-pink transition-colors font-bold">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Delivery Area</h4>
            <div className="flex items-start gap-3 text-warm-beige/60 font-bold mb-4">
              <MapPin size={20} className="text-brand-pink shrink-0" />
              <p>Exclusively serving Edmonton, AB (Postal codes starting with T5 & T6)</p>
            </div>
            <p className="text-xs text-warm-beige/40">
              Monthly local delivery by the owner. No shipping damage, just fresh treats.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-warm-beige/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-beige/40 text-sm font-bold">
            © {new Date().getFullYear()} Fresh Batch Box. Edmonton, AB.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-warm-beige/30">
            <Link href="#" className="hover:text-warm-beige transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-warm-beige transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
