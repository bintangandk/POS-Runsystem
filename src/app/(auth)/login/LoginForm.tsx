import InputField from "../../component/UI/inputField";
import RememberMe from "../../component/UI/RememberMe";
import AuthFooter from "../../component/UI/AuthFooter";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
      {/* <img className="text-center" src="/asset/icon/icon-accounting.png" alt="" /> */}
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

        <button
          type="submit"
          className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-blue-400"
        >
          Masuk
        </button>
      </form>

      <div className="text-center mt-4">
        <a href="/register" className="text-blue-400 hover:underline">
          Registrasi sekarang
        </a>
      </div>

      <AuthFooter />
    </div>
  );
}
