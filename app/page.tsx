import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default function Home() {
  const {userId} = auth();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">{userId ? <SignInButton/> :  <SignOutButton/>}
        
       
      </main>
      
    </div>
  );
}
