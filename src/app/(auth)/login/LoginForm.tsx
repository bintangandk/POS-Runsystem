import InputField from "../../components/UI/inputField";
import RememberMe from "../../components/UI/RememberMe";
import PrimaryButton from "../../components/UI/Button";
import { MdOutlineMail, MdOutlineLock } from "react-icons/md";

export default function LoginForm() {
  


  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        <img
          src="/logo-a.svg"
          alt="Logo Accounting+ POS"
          width={200}
          height={32}
          className="rounded-full"
        />
      </div>
      <p className="text-center text-neutral-900 font-semibold mb-2 text-[22px]">
        Selamat datang di Accounting+ POS
      </p>
      <p className="text-center text-gray-500 mb-6 text-[16px]">
        Masukkan kredensial untuk mengakses akun Anda
      </p>

      <form className="space-y-4">
        <InputField
          label="Email"
          type="email"
          placeholder="Masukkan email Anda"
          required
          icon={<MdOutlineMail size={20} />}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Masukkan password Anda"
          required
          icon={<MdOutlineLock size={20} />}
        />

        <RememberMe />

        <PrimaryButton type="submit">Masuk</PrimaryButton>
      </form>

      <div className="flex justify-center items-center gap-1 mt-4 text-sm">
        <span className="text-gray-600">Belum punya akun?</span>
        <a href="/register" className="text-info-600 hover:underline">
          Registrasi sekarang
        </a>
      </div>
    </div>
  );
}
