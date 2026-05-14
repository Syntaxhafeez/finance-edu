import { visualLearningModels } from "@/lib/finance-data";

export function Educational3DModel() {
  return (
    <section className="overflow-hidden rounded-lg border bg-card p-6">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Visual learning</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal">See finance decisions as stacked layers</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Most money choices become easier when readers can see the layers: what they control, what costs them, what
            compounds, and what can go wrong. This 3D-style model turns abstract finance into a mental picture.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {visualLearningModels.map((model) => (
            <div key={model.title} className="rounded-lg border bg-background p-4">
              <div className="finance-perspective">
                <div className="finance-stack">
                  {model.layers.map((layer, index) => (
                    <div
                      key={layer}
                      className="absolute left-0 flex h-16 w-36 items-center justify-center rounded-md border bg-secondary text-center text-[11px] font-semibold shadow-sm"
                      style={{
                        bottom: `${index * 18}px`,
                        transform: `translateZ(${index * 12}px)`,
                        opacity: 1 - index * 0.055
                      }}
                    >
                      {layer}
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 font-semibold">{model.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{model.lesson}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
