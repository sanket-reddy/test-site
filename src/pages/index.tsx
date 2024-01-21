import { Button } from "@/components/ui/button";
import Appbar from "@/components/shared/appbar";
import createtes from "@/pages/api/tes.create";
import axios from "axios";
export default function Home() {
  return (
    <>
      <Appbar></Appbar>
      <h1>test-site</h1>
    </>
  );
}
