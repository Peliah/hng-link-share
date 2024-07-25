import Image from "next/image";
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import Navigationbar from "@/components/Navigationbar";

export default async function Home() {


  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }


  return (
    <div className="w-full bg-zinc-50">
      <div className="max-w-[1440px] mx-auto">
        
      </div>
          Hello
        <div>
        </div>
    </div>
  );
}
