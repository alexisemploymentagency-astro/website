// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Pull the raw variables from your .env
let rawUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
let rawKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Strip all quotes, remove trailing spaces, and force https:// to prevent ghost crashes
rawUrl = rawUrl.toString().replace(/['"]/g, '').trim();
if (!rawUrl.startsWith('http')) {
  rawUrl = `https://${rawUrl}`;
}

rawKey = rawKey.toString().replace(/['"]/g, '').trim();

export const supabase = createClient(rawUrl, rawKey, {
  auth: {
    // We disable the default local storage flow because we will use highly secure Server Cookies
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});