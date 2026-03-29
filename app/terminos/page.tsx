import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso y Exención de Responsabilidad",
  description:
    "Términos de uso, límites de responsabilidad y exención legal de Copa Mundial 2026 Predicciones.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-4">Términos de Uso y Exención de Responsabilidad</h1>
      <p className="text-sm text-gray-500 mb-8">Última actualización: 29 de marzo de 2026</p>

      <div className="prose">
        <h2>1. Aceptación de los términos</h2>
        <p>
          Al acceder y usar este sitio, aceptas estos términos. Si no estás de acuerdo,
          debes dejar de usar el sitio.
        </p>

        <h2>2. Naturaleza del contenido</h2>
        <p>
          Todo el contenido publicado es únicamente de carácter informativo y de
          entretenimiento deportivo.
        </p>

        <h2>3. Exención de responsabilidad (importante)</h2>
        <ul>
          <li>No ofrecemos asesoramiento financiero, legal ni de apuestas.</li>
          <li>No garantizamos exactitud, integridad o actualidad absoluta de predicciones.</li>
          <li>No garantizamos resultados deportivos futuros.</li>
          <li>
            Las decisiones del usuario (incluyendo apuestas, inversiones o compras)
            son de su exclusiva responsabilidad.
          </li>
          <li>
            No somos responsables por pérdidas directas o indirectas derivadas del uso
            de la información publicada.
          </li>
        </ul>

        <h2>4. Sin relación con organizadores oficiales</h2>
        <p>
          Este sitio es independiente y no está afiliado oficialmente a FIFA, federaciones,
          clubes o entidades organizadoras del torneo.
        </p>

        <h2>5. Uso permitido</h2>
        <p>El usuario se compromete a no:</p>
        <ul>
          <li>Usar el sitio para actividades ilegales o fraudulentas.</li>
          <li>Copiar o redistribuir masivamente contenido sin autorización.</li>
          <li>Interferir con el funcionamiento técnico del sitio.</li>
        </ul>

        <h2>6. Propiedad intelectual</h2>
        <p>
          Los textos, diseños y materiales originales del sitio están protegidos por
          derechos aplicables. Queda prohibido su uso comercial no autorizado.
        </p>

        <h2>7. Enlaces externos</h2>
        <p>
          Podemos incluir enlaces a servicios de terceros (por ejemplo, Telegram).
          No controlamos ni asumimos responsabilidad por su contenido o políticas.
        </p>

        <h2>8. Limitación de disponibilidad</h2>
        <p>
          No garantizamos que el sitio esté disponible de forma continua ni libre de
          errores en todo momento.
        </p>

        <h2>9. Modificaciones</h2>
        <p>
          Podemos actualizar estos términos en cualquier momento. La versión vigente
          será la publicada en esta página.
        </p>

        <h2>10. Ley aplicable</h2>
        <p>
          En caso de conflicto, se aplicará la legislación que corresponda según la
          jurisdicción del operador del sitio, salvo norma imperativa en contrario.
        </p>
      </div>
    </div>
  );
}
