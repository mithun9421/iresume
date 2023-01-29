import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.SUPABASE_PROJECT_NAME, process.env.SUPABASE_JWT)
