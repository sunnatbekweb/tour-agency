import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600">Страница не найдена</p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Вернуться на главную
      </Link>
    </div>
  );
}
