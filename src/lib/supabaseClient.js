import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tyhimoopyfkckwiiwiwv.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5aGltb29weWZrY2t3aWl3aXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NjAxMDcsImV4cCI6MjA3MTEzNjEwN30.aOqfZdim9Rg434XiUKQfZ2zcP7TjS2dcCBjnedqp5es";     
export const supabase = createClient(supabaseUrl, supabaseKey);
N