import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <center className="mt-10">
      <SignIn />
    </center>
  );
}
