import InputField from "../../components/UI/inputField";
import RememberMe from "../../components/UI/RememberMe";
import PrimaryButton from "../../components/UI/primaryButton";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
      <p className="text-center text-black font-semibold mb-2 text-[18px]">
        Selamat datang di Accounting+ POS
      </p>
      <p className="text-center text-gray-500 mb-6 text-[14px]">
        Masukkan kredensial untuk mengakses akun Anda
      </p>

      <form className="space-y-4">
        <InputField
          label="Email"
          type="email"
          placeholder="Masukkan email Anda"
          required
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Masukkan password Anda"
          required
        />

        <RememberMe />

        <PrimaryButton type="submit">Login</PrimaryButton>
      </form>

      <div className="text-center mt-4">
        <a href="/register" className="text-blue-400 hover:underline">
          Registrasi sekarang
        </a>
      </div>
    </div>
  );
}
