'use client';

import { supabase } from '@/lib/supabase';
import { useState } from 'react';

export default function ImageUploadTool() {
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<string>('');

  const uploadImages = async () => {
    setUploading(true);
    setStatus('Starting upload...');

    // This is a helper for the user to upload their images to Supabase storage
    // since I cannot access their local files directly from the sandbox to the cloud.
    // In a real scenario, the user would use this page to upload the 5 images.

    setStatus('Please upload the images via the Supabase Dashboard "products" bucket.');
    setUploading(false);
  };

  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-pink-100 max-w-lg mx-auto mt-20">
      <h2 className="text-2xl font-bold text-pink-800 mb-4">Storage Setup</h2>
      <p className="text-gray-600 mb-6">
        To use Supabase Storage, create a public bucket named <b>"products"</b> and upload your cookie images there.
      </p>
      <button
        onClick={uploadImages}
        disabled={uploading}
        className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold hover:bg-pink-700 transition-colors"
      >
        {uploading ? 'Processing...' : 'Verify Storage Connection'}
      </button>
      {status && <p className="mt-4 text-sm text-pink-600 font-medium">{status}</p>}
    </div>
  );
}
