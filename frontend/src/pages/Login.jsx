import Input from "@/components/common/Input"
import Button from "@/components/common/Button"


export default function Login() {
 
  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-3xl font-semibold mb-6">Sign in</h2>

      <div className="space-y-4">
        <Input label="Email" placeholder="you@example.com" />
        <Input label="Password" type="password" placeholder="••••••••" />
        <Button className="w-full bg-blue-900 text-white hover:bg-blue-800 transition">Sign in</Button>
      </div>
      <div className="">
        
      </div>
    </div>
  )
}
