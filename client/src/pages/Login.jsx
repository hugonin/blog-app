import { Label, TextInput, Checkbox, Button } from "flowbite-react";

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full bg-white shadow-md px-4 py-8 rounded-md space-y-8 max-w-md ">
        <div className=" font-medium self-center text-xl sm:text-3xl text-gray-800">
          <h1 className="m-1 inline-block">Login</h1>
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Please log in to access your account
        </div>

        <div className="mt-10">
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required={true} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
