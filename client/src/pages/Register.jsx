import { Label, TextInput, Checkbox, Button } from "flowbite-react";

function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full bg-white shadow-md px-4 py-8 rounded-md space-y-8 max-w-md ">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Register
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Please create an account
        </div>

        <div className="mt-10">
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
                shadow={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput
                id="password2"
                type="password"
                required={true}
                shadow={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Repeat password" />
              </div>
              <TextInput
                id="repeat-password"
                type="password"
                required={true}
                shadow={true}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree">
                I agree with the{" "}
                <a
                  href="/forms"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </Label>
            </div>
            <Button type="submit">Register new account</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
