"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Instagram, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-warm-beige">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <div className="inline-flex items-center gap-2 bg-brand-pink/20 px-4 py-2 rounded-full mb-6">
               <Sparkles size={14} className="text-brand-pink" />
               <span className="text-deep-chocolate font-black text-[10px] tracking-[0.2em] uppercase">
                 Get In Touch
               </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-deep-chocolate mb-6 tracking-tight">Contact Us</h1>
            <p className="text-xl text-deep-chocolate/60 max-w-2xl mx-auto font-medium leading-relaxed">
              Have questions about your subscription, allergens, or a large event?
              We&apos;re here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
               <div className="bg-white p-10 rounded-[3rem] border border-brand-pink/10 shadow-xl shadow-deep-chocolate/5">
                    <h3 className="text-2xl font-black text-deep-chocolate mb-8">Reach Out</h3>

                    <div className="space-y-6">
                        <div className="flex items-start gap-5">
                            <div className="bg-brand-pink/20 p-4 rounded-2xl text-deep-chocolate">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-widest mb-1">Email</p>
                                <p className="text-lg font-bold text-deep-chocolate">hello@freshbatchbox.ca</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="bg-brand-pink/20 p-4 rounded-2xl text-deep-chocolate">
                                <Instagram size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-widest mb-1">Instagram</p>
                                <p className="text-lg font-bold text-deep-chocolate">@freshbatchbox</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="bg-brand-pink/20 p-4 rounded-2xl text-deep-chocolate">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-widest mb-1">Location</p>
                                <p className="text-lg font-bold text-deep-chocolate">Edmonton, AB</p>
                            </div>
                        </div>
                    </div>
               </div>

               <div className="bg-deep-chocolate text-warm-beige p-10 rounded-[3rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                    <h4 className="text-xl font-black mb-4">Response Time</h4>
                    <p className="text-warm-beige/60 font-medium leading-relaxed">
                        We&apos;re a small local business! We usually respond to emails within
                        24 hours, Monday through Friday.
                    </p>
               </div>
            </div>

            <div className="lg:col-span-7">
                {isSubmitted ? (
                    <div className="bg-white p-12 md:p-20 rounded-[4rem] text-center border border-brand-pink/10 shadow-2xl shadow-deep-chocolate/5 h-full flex flex-col items-center justify-center">
                        <div className="bg-soft-green/20 p-6 rounded-full text-soft-green mb-8">
                            <Send size={48} />
                        </div>
                        <h2 className="text-4xl font-black text-deep-chocolate mb-4">Message Sent!</h2>
                        <p className="text-lg text-deep-chocolate/60 font-medium">
                            Thank you for reaching out. We&apos;ll get back to you as soon as we can.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="mt-12 text-deep-chocolate font-black border-b-2 border-brand-pink"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-brand-pink/10 shadow-2xl shadow-deep-chocolate/5">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-widest px-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Jane Doe"
                                        className="w-full bg-brand-beige/50 border-2 border-transparent focus:border-brand-pink/30 focus:bg-white rounded-2xl p-4 outline-none transition-all font-bold text-deep-chocolate"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-widest px-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="jane@example.com"
                                        className="w-full bg-brand-beige/50 border-2 border-transparent focus:border-brand-pink/30 focus:bg-white rounded-2xl p-4 outline-none transition-all font-bold text-deep-chocolate"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-widest px-1">Subject</label>
                                <select className="w-full bg-brand-beige/50 border-2 border-transparent focus:border-brand-pink/30 focus:bg-white rounded-2xl p-4 outline-none transition-all font-bold text-deep-chocolate appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Subscription Question</option>
                                    <option>Allergen Information</option>
                                    <option>Large Event/Catering</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-deep-chocolate/40 uppercase tracking-widest px-1">Message</label>
                                <textarea
                                    rows={5}
                                    required
                                    placeholder="How can we help you today?"
                                    className="w-full bg-brand-beige/50 border-2 border-transparent focus:border-brand-pink/30 focus:bg-white rounded-2xl p-4 outline-none transition-all font-bold text-deep-chocolate resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-deep-chocolate text-warm-beige py-6 rounded-3xl font-black text-xl hover:translate-y-[-4px] transition-all shadow-xl shadow-deep-chocolate/20 flex items-center justify-center gap-3"
                            >
                                Send Message
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
