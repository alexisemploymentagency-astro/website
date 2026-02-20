// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Stegg Fix: We add a fallback 'placeholder' string. 
// This prevents Astro from crashing if your .env file is missing or empty.
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);