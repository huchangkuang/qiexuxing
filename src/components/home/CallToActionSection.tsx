import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function CallToActionSection() {
  return (
    <section className="relative overflow-hidden bg-surface-container-highest py-unit-xl">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-container-max px-margin-edge text-center">
        <h2 className="font-headline-xl text-headline-xl text-on-surface mb-unit-md">
          想深入聊聊吗？
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mx-auto mb-unit-xl max-w-2xl">
          无论你有具体的项目想法，还是只想聊聊如何在快节奏的世界里慢慢走，都欢迎与我联系。
        </p>
        <button
          type="button"
          className="group inline-flex items-center gap-unit-sm rounded-lg bg-primary px-unit-xl py-unit-md font-label-md text-on-primary shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
        >
          与我联系
          <MaterialIcon
            name="chat_bubble"
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}
