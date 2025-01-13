import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpbmFvcmp3bm93aGZjcW9mb3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjE3NjEsImV4cCI6MjA1MjA5Nzc2MX0.ib_ryzqXSwSCEoRY5uj2ziUfqDFIf9qLOc4smhLMA0Y';

console.log('Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_KEY); // Check if the variable is loaded

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
