import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.REACT_APP_SUPABASE_PROJECT_NAME || 'https://yohhygynlorzantmtigh.supabase.co', process.env.REACT_APP_SUPABASE_JWT || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
