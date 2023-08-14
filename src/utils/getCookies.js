import { cookies } from 'next/headers'
 
export default function Page() {
  const cookieStore = cookies();
  return cookieStore.getAll();
}