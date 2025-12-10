import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-[#002355] h-[4.688rem] text-white  px-6">
            <div className="w-[78.438rem] h-full mx-auto flex items-center justify-between">

                <a href="" className="flex items-center gap-[7px] cursor-pointer">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={38}
                        height={38}
                    />
                    <span className="font-black text-base">الرحلاتي</span>
                </a>

                <nav className="w-[30.75rem] flex justify-between items-center  text-sm">
                    <Link href="#" className="hover:text-gray-300">الرئيسية</Link>
                    <Link href="#" className="hover:text-gray-300">الرحلات</Link>
                    <Link href="#" className="hover:text-gray-300">العروض الخاصة</Link>
                    <Link href="#" className="hover:text-gray-300">خدمة العملاء</Link>
                    <Link href="#" className="hover:text-gray-300">حسابي</Link>
                </nav>

                <div className="flex items-center gap-0.5 text-sm">
                    <button className="p-3 font-bold text-white rounded-md font-semibold hover:opacity-90 hover:text-[#D3D3D3] transition cursor-pointer">
                        تسجيل الدخول
                    </button>
                    <button className="p-3 font-bold border border-[#D3D3D3] rounded-md hover:bg-white hover:text-[#002355] transition cursor-pointer">
                        تسجيل حساب
                    </button>
                </div>
            </div>
        </header>
    );
}

//#D3D3D3
//#002355