import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col gap-4 min-w-80 p-6 border-2 border-slate-200 rounded-md">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Link href="/" className="w-full">
        <Button className="w-full">로그인</Button>
      </Link>
    </div>
  );
}
