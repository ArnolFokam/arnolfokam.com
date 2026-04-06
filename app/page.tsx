import Image from "next/image";
import me from "@/public/avatars/me.png";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Image
          src={me}
          alt="Arnolf Okam"
          loading="eager"
          style={{ height: "88vh", width: "auto" }}
        />
      </div>
    </main>
  );
}
