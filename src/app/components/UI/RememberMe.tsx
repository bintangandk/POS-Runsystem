export default function RememberMe() {
  return (
    <div className="flex items-center justify-between mb-4">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="h-4 w-4" />
        <span className="text-sm text-gray-600">Ingatkan Saya</span>
      </label>
      <a href="/forgot-password" className="text-sm text-primary-600 hover:underline">
        Lupa Password
      </a>
    </div>
  );
}
