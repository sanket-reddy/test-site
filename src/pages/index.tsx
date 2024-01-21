import { Button } from "@/components/ui/button";
import Appbar from "@/components/shared/appbar";

export default function Home() {
  return (
    <>
      <Appbar></Appbar>
      <div className="flex items-center justify-center mt-20 ">
        <Button className="bg-violet-800" variant="default">
          CREATE USER
        </Button>
      </div>
      <h1>test-site</h1>
    </>
  );
}
