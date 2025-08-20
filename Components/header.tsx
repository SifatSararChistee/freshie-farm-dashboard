import Image from "next/image";

export default function Header() {
  return (
   <div className="w-full bg-[#017b46] h-[120px] flex">
    <div className="flex flex-row  justify-between items-center w-11/12 mx-auto p-2 max-w-7xl">
 <div>
      <Image
        src="/logo.png"
        alt="My Logo"
        width={100}
        height={80}
      />
    </div>
    <div>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
  Logout
</button>
    </div>
    </div>
   </div>
  );
}


