import { createClient } from '@supabase/supabase-js';

function initSupabase() {
    try {
        return createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        );
    } catch (x) {
        console.error(
            'Please create .env.local and supply supabase config (see .env.local.example).'
        );
        return null;
    }
}

export const supabase = initSupabase();