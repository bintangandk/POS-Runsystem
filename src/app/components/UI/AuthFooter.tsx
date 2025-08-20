export default function AuthFooter() {
  return (
    <div>
      <div className="mt-6 text-center text-xs text-gray-500">
        <a href="/privacy" className="hover:underline text-sm">Kebijakan Privasi</a> |{" "}
        <a href="/terms" className="hover:underline text-sm">Ketentuan Penggunaan</a>
      </div>
    </div>
  );
}
