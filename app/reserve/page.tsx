import Header from "@/components/Header";
import InputField from "@/components/InputField";

export default function ReservePage() {
    return (
        <main className="w-full h-[100vh] bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="h-full bg-gradient-to-l from-[#00235599] to-[#004DBB00]" >
            <Header />

            <section className=" justify-center w-[78.438rem] mx-auto mt-[5.133rem] ">

                <div className=" z-10 text-white px-4  mt-[5.133rem] mb-[1.554rem]">
                    <h1 className="text-3xl font-extrabold mb-4">
                        اكتشف رحلتك القادمة بسهولة وسرعة
                    </h1>
                    <p className="text-xl  opacity-89 ">
                        احجز تذكرتك في ثوانٍ، وقارن أفضل الأسعار من مئات شركات الطيران
                    </p>
                </div>

                <div className="flex items-center">
                    <button className="px-5 py-2 text-xl font-bold bg-white text-[#0047AB] rounded-tr-md cursor-pointer">ذهاب فقط</button>
                    <button className="px-5 py-2 text-xl font-bold bg-[#002355] text-white border-l-[1px] border-white hover:bg-[#0047AB] hover:text-white transition-colors duration-300 cursor-pointer">ذهاب وعودة</button>
                    <button className="px-5 py-2 text-xl font-bold bg-[#002355] text-white rounded-tl-md hover:bg-[#0047AB] hover:text-white transition-colors duration-300 cursor-pointer">وجهات متعددة</button>
                </div>
                <div className="w-full mx-auto bg-white rounded-2xl p-6 shadow-xl text-black rounded-tr-none">
                    <div className="flex gap-7">
                        <div className="flex items-center gap-3">
                            <label htmlFor="directFlights">رحلات مباشرة</label>
                            <input type="checkbox" name="directFlights" id="directFlights" className="cursor-pointer" />
                        </div>
                        <div className="flex items-center gap-3">
                            <label htmlFor="includesLuggage">شاملة أمتعة السفر</label>
                            <input type="checkbox" name="includesLuggage" id="includesLuggage" className="cursor-pointer" />
                        </div>
                    </div>

                    <div className="gap-2 mt-5 flex ">
                        <InputField
                            legend="من أين؟"
                            placeholder="أدخل اسم المدينة أو المطار"
                            size={23}
                        />
                        <InputField
                            legend="إلى أين؟"
                            placeholder="أدخل اسم المدينة أو المطار"
                            size={23}
                        />
                        <InputField
                            legend="تاريخ الذهاب"
                            placeholder="اختر تاريخ الذهاب"
                            size={13}
                        />
                        <InputField
                            legend="تاريخ العودة"
                            placeholder="اختر تاريخ الذهاب"
                            size={13}
                        />
                        <InputField
                            legend="مسافر | درجه السفر"
                            placeholder="0 | اقتصادية"
                            size={9}
                            showSVG={true}
                        />


                        <button className="mt-2 bg-[#0047AB] text-white px-6 rounded-xl text-2xl font-bold cursor-pointer hover:bg-[#003A8A] transition-colors duration-300">ابحث</button>

                    </div>
                    <div className="flex items-center gap-2 mt-5 ">
                        <p>وجهات شائعة:</p>

                        <div className="bg-[#F9F9FB] flex items-center p-2.5 font-sans gap-1 rounded-lg cursor-pointer hover:bg-[#EBEBEB] hover:shadow-md transition-all duration-300">
                            <p>دبي → القاهرة</p>
                            <span>EG</span>
                        </div>
                        <div className="bg-[#F9F9FB] flex items-center p-2.5 font-sans gap-1 rounded-lg cursor-pointer hover:bg-[#EBEBEB] hover:shadow-md transition-all duration-300">
                            <p>دبي → إسطنبول</p>
                            <span>🇪🇬</span>
                        </div>
                        <div className="bg-[#F9F9FB] flex items-center p-2.5 font-sans gap-1 rounded-lg cursor-pointer hover:bg-[#EBEBEB] hover:shadow-md transition-all duration-300">
                            <p>أبوظبي → الرياض</p>
                            <span>🇸🇦</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </main>
    );
}
//#0047AB
//#EBEBEB
//#F9F9FB