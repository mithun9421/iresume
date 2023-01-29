import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.REACT_APP_SUPABASE_PROJECT_NAME, process.env.REACT_APP_SUPABASE_JWT)
