import { MaterialIcon } from "@/components/icons/MaterialIcon";

export function HeroSection() {
  return (
    <section className="hero-gradient relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-edge">
        <div className="max-w-3xl">
          <span className="mb-unit-md inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-label-md text-label-md tracking-widest text-primary">
            个人理念
          </span>
          <h1 className="font-headline-xl text-headline-xl mb-unit-md leading-tight text-on-background">
            且徐行
            <span className="block font-normal text-primary italic">
              慢慢来
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-unit-xl max-w-2xl leading-relaxed">
            在加速的时代里，选择有意的慢。以沉静的专业姿态穿行于职业版图，始终专注于深度与清晰。
          </p>
          <div className="flex flex-col gap-gutter sm:flex-row">
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-primary px-unit-xl py-unit-md font-label-md text-on-primary shadow-xl shadow-primary/10 transition-all hover:opacity-90 active:scale-95"
            >
              浏览项目
              <MaterialIcon name="arrow_forward" className="ml-unit-xs" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center rounded-lg border border-outline-variant px-unit-xl py-unit-md font-label-md text-on-surface transition-all hover:bg-white/5"
            >
              了解理念
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-unit-lg left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <MaterialIcon name="keyboard_double_arrow_down" className="text-primary" />
      </div>
    </section>
  );
}
