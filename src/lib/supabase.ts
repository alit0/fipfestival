import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wmwqbpttgawubrjodcpl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtd3FicHR0Z2F3dWJyam9kY3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwMjg5NzAsImV4cCI6MjA4NzYwNDk3MH0.OBs80y2qjyXPPUIgAMxQGuUPdxVzUMl-lLTykfVqnpE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserRole = 'jurado' | 'agencia';

export interface Profile {
    id: string;
    email: string;
    full_name: string | null;
    role: UserRole;
    created_at: string;
}
