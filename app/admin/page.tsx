import { cookies } from 'next/headers'
import { supabase } from '@/lib/supabase'
import AdminLogin from '@/components/AdminLogin'
import AdminGuestList from '@/components/AdminGuestList'

export default async function AdminPage() {
  const cookieStore = await cookies()
  const auth = cookieStore.get('admin_auth')

  if (auth?.value !== 'authenticated') {
    return <AdminLogin />
  }

  const { data: guests } = await supabase
    .from('rsvps')
    .select('*')
    .order('created_at', { ascending: false })

  return <AdminGuestList guests={guests ?? []} />
}
