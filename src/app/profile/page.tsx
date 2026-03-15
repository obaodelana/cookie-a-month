'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema, ProfileFormValues } from '@/lib/schemas';
import { ArrowLeft, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log('Updating profile...', data);
    alert('Profile update dummy successful!');
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
        <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden">
          <div className="bg-pink-600 px-8 py-10 text-white">
            <h1 className="text-3xl font-bold">Delivery Profile</h1>
            <p className="opacity-80">Make sure your sweet treats find their way to you.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input
                  {...register('fullName')}
                  className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Postal Code (Edmonton Only)</label>
                <input
                  {...register('postalCode')}
                  placeholder="e.g. T5A 1A1"
                  className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:ring-2 focus:ring-pink-500 outline-none transition-all uppercase"
                />
                {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <MapPin size={16} /> Full Address
              </label>
              <textarea
                {...register('fullAddress')}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
              />
              {errors.fullAddress && <p className="text-red-500 text-xs mt-1">{errors.fullAddress.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <ExternalLink size={16} /> Google Maps Link (Optional)
              </label>
              <input
                {...register('googleMapsLink')}
                className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
              />
              {errors.googleMapsLink && <p className="text-red-500 text-xs mt-1">{errors.googleMapsLink.message}</p>}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-pink-700 transition-all shadow-lg shadow-pink-100"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
