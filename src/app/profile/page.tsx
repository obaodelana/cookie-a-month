'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema, ProfileFormValues } from '@/lib/schemas';
import { ArrowLeft, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: '',
      fullAddress: '',
      postalCode: '',
      googleMapsLink: '',
    }
  });

  const onSubmit = (data: ProfileFormValues) => {
    // Automatically generate Google Maps link
    const encodedAddress = encodeURIComponent(`${data.fullAddress}, ${data.postalCode}, Edmonton, AB`);
    const generatedLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    const finalData = {
      ...data,
      googleMapsLink: generatedLink
    };

    console.log('Updating profile with auto-generated Maps link...', finalData);
    alert('Profile updated! Your delivery location has been pinned.');
  };

  return (
    <div className="min-h-screen bg-[#fffafb] pb-20">
      <nav className="bg-white border-b border-pink-50 px-4 py-4 mb-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-pink-600 font-bold">
            <ArrowLeft size={20} />
            My Dashboard
          </Link>
          <div className="text-sm font-bold text-pink-900">COOKIEAMONTH</div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[40px] shadow-sm border border-pink-100 overflow-hidden">
          <div className="bg-pink-600 px-8 py-12 text-white">
            <h1 className="text-4xl font-black mb-2">Delivery Profile</h1>
            <p className="text-pink-100 font-medium">Make sure your sweet treats find their way to you.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-black text-pink-900 uppercase tracking-widest">Full Name</label>
                <input
                  {...register('fullName')}
                  placeholder="Your lovely name"
                  className="w-full px-5 py-4 rounded-2xl border border-pink-100 focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 outline-none transition-all bg-pink-50/30 font-medium"
                />
                {errors.fullName && <p className="text-red-500 text-xs font-bold mt-1">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-pink-900 uppercase tracking-widest">Postal Code</label>
                <input
                  {...register('postalCode')}
                  placeholder="T5A 1A1"
                  className="w-full px-5 py-4 rounded-2xl border border-pink-100 focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 outline-none transition-all bg-pink-50/30 font-medium uppercase"
                />
                {errors.postalCode && <p className="text-red-500 text-xs font-bold mt-1">{errors.postalCode.message}</p>}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-black text-pink-900 uppercase tracking-widest flex items-center gap-2">
                <MapPin size={16} /> Delivery Address
              </label>
              <textarea
                {...register('fullAddress')}
                placeholder="123 Cookie Lane..."
                rows={3}
                className="w-full px-5 py-4 rounded-2xl border border-pink-100 focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 outline-none transition-all bg-pink-50/30 font-medium"
              />
              {errors.fullAddress && <p className="text-red-500 text-xs font-bold mt-1">{errors.fullAddress.message}</p>}
            </div>

            {/* Google Maps Link hidden as requested */}
            <input type="hidden" {...register('googleMapsLink')} />

            <div className="pt-4">
              <button
                type="submit"
                className="bg-pink-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-pink-700 transition-all shadow-xl shadow-pink-200"
              >
                Save Delivery Info
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
