const TELEGRAM_CHANNEL =
  process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL || "https://t.me/TU_CANAL";
const TELEGRAM_BOT =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT || "https://t.me/TU_BOT";

export default function TelegramBoost() {
  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-emerald-700 font-semibold">
            Alerta en vivo
          </p>
          <h3 className="text-xl font-bold text-emerald-900 mt-1">
            Picks de ultimo minuto en Telegram
          </h3>
          <p className="text-emerald-800 mt-2 max-w-2xl">
            Publicamos cambios por alineaciones, cuotas en movimiento y picks en
            vivo. Si entras tarde, entras peor.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={TELEGRAM_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-700 text-white px-4 py-2.5 font-semibold hover:bg-emerald-800 transition-colors"
          >
            Entrar al canal
          </a>
          <a
            href={TELEGRAM_BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-emerald-700 text-emerald-800 px-4 py-2.5 font-semibold hover:bg-emerald-100 transition-colors"
          >
            Hablar con bot
          </a>
        </div>
      </div>
    </section>
  );
}
