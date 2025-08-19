export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#f5fdfd] overflow-hidden">
      {/* Vector Layer di belakang form */}
      {/* <div className="absolute bottom-104 left-70 w-[70%] h-[90px] bg-cyan-200/40 rotate-[-20deg] z-0"></div>
      <div className="absolute bottom-102 left-275 w-[20%] h-[60px] bg-blue-300/40 rotate-[-200deg] z-0"></div> */}

      <div
        className="absolute bottom-51 left-0 right-0 flex justify-center"
        style={{ zIndex: 1 }}
      >
        <img src="/bg-vector-top.svg" alt="background vector" className="w-full max-w-5xl" />
      </div>

      {/* Konten Login */}
      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
