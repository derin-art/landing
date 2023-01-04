export default function MobileStackI() {
  const dtaa = [1, 2, 3, 4];
  return (
    <div className="h-screen w-full p-4 sticky top-0 bg-gradient-to-r pt-16 pb-16 from-gray-100 font-lora to-gray-200 flex-col justify-center  flex items-center ">
      <span className="relative flex items-center justify-center font-loraI text-6xl mb-4">
        {" "}
        <span className="blurry-gradient "></span>i
      </span>
      <div className="flex flex-col space-y-4">
        {dtaa.map((item) => {
          return (
            <div
              key={item}
              className="border-2 rounded-xl text-xs font-poppins p-2 border-b-4 border-l-4 backdrop-blur-md "
            >
              <div className="text-base">Lorem ipsum</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              adipisci quasi commodi, perferendis fugit molestias.
            </div>
          );
        })}
      </div>
    </div>
  );
}
