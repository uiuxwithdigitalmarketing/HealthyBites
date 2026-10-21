import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, ChevronDown, Search, Facebook, Twitter, Instagram, Youtube, ArrowRight, Clock, Flame, Utensils } from "lucide-react";
import heroBowl from "@/assets/hero-bowl.jpg";
import recipe1 from "@/assets/recipe-1.jpg";
import recipe2 from "@/assets/recipe-2.jpg";
import recipe3 from "@/assets/recipe-3.jpg";
import recipe4 from "@/assets/recipe-4.jpg";
import recipe5 from "@/assets/recipe-5.jpg";
import recipe6 from "@/assets/recipe-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Healthy Recipes — The Daily Healthy Tip" },
      { name: "description", content: "Wholesome, easy-to-make healthy recipes — low carb, vegetarian, high protein and family-friendly meals from The Daily Healthy Tip." },
      { property: "og:title", content: "Healthy Recipes — The Daily Healthy Tip" },
      { property: "og:description", content: "Wholesome, easy-to-make healthy recipes from The Daily Healthy Tip." },
    ],
  }),
  component: HealthyRecipes,
});

const NAV = [
  "Food & Recipes",
  "Diet & Fitness",
  "Exercise and Fitness",
  "Yoga",
  "Beauty tips and ideas",
  "Health Tips",
];

const recipes = [
  {
    img: recipe1,
    tag: "Vegetarian",
    title: "Healthy and Low Carb Vegetarian Recipes",
    excerpt:
      "Eat well without sacrificing flavor — a colorful collection of low-carb vegetarian plates that keep energy steady through the day.",
    time: "25 min",
    calories: "320 kcal",
    serves: "2",
  },
  {
    img: recipe2,
    tag: "Salad",
    title: "5 Fast & Easy Healthy Recipes Everyone Can Follow",
    excerpt:
      "Five no-fuss meals you can throw together on a busy weeknight — fresh, filling and ready before the kettle boils.",
    time: "15 min",
    calories: "280 kcal",
    serves: "4",
  },
  {
    img: recipe3,
    tag: "Breakfast",
    title: "Avocado Toast with Poached Egg & Microgreens",
    excerpt:
      "A café-worthy breakfast in under 10 minutes. Creamy avocado, a perfectly poached egg, and a tangle of greens.",
    time: "10 min",
    calories: "340 kcal",
    serves: "1",
  },
  {
    img: recipe4,
    tag: "Smoothie",
    title: "Green Power Smoothie Bowl with Chia & Granola",
    excerpt:
      "Spinach, banana and kiwi blended thick and topped with crunchy granola for a glow-up breakfast.",
    time: "8 min",
    calories: "390 kcal",
    serves: "1",
  },
  {
    img: recipe5,
    tag: "High Protein",
    title: "Lemon Grilled Salmon with Crisp Asparagus",
    excerpt:
      "Omega-3 rich salmon brushed with lemon and olive oil, served with snappy seasonal asparagus.",
    time: "20 min",
    calories: "430 kcal",
    serves: "2",
  },
  {
    img: recipe6,
    tag: "Bowl",
    title: "Rainbow Quinoa Buddha Bowl",
    excerpt:
      "Roasted sweet potato, purple cabbage, edamame and quinoa with a creamy tahini drizzle.",
    time: "30 min",
    calories: "470 kcal",
    serves: "2",
  },
];

const popular = [
  "10 anti-inflammatory foods to add this week",
  "How to build a balanced plate (without counting)",
  "The simple smoothie formula nutritionists swear by",
  "Meal-prep Sunday: 5 lunches in 60 minutes",
];

function HealthyRecipes() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-2 px-4 py-2">
          <span className="opacity-90">Drop your article on</span>
          <Mail className="h-4 w-4" />
          <a href="mailto:editor@thedailyhealthytip.com" className="font-medium hover:underline">
            editor@thedailyhealthytip.com
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-md border-2 border-primary text-primary">
              <Utensils className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold">
                The <span className="text-primary">Daily Healthy</span> Tip
              </div>
            </div>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n}
                href="#"
                className="flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {n}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </a>
            ))}
          </nav>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-foreground/80 transition hover:bg-primary hover:text-primary-foreground">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-mint">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <div className="mb-3 flex items-center gap-3 text-accent">
              <span className="h-px w-10 bg-accent" />
              <span className="font-script text-2xl">Treat your body</span>
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Healthy <span className="text-primary">Recipes</span> <br />
              For Every <span className="text-accent">Mood</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
              Wholesome, easy-to-make meals from our nutritionists — low-carb,
              high-protein and vegetarian dishes that fit real, busy lives.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#recipes"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition hover:translate-y-[-1px] hover:shadow-xl"
              >
                Browse Recipes <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#popular"
                className="text-sm font-semibold text-foreground/80 hover:text-primary"
              >
                See most popular →
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["#fcd34d", "#34d399", "#fb923c"].map((c) => (
                  <div
                    key={c}
                    className="h-10 w-10 rounded-full border-2 border-background"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold">Loved by 12K+ home cooks</div>
                <div className="text-muted-foreground">★ 4.9 average rating</div>
              </div>
            </div>
          </div>

          {/* Hero image with orange rounded backdrop */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[42%_58%_42%_58%/55%_45%_55%_45%] bg-accent" />
            <img
              src={heroBowl}
              alt="Healthy vegetable bowl with quinoa, kale and chickpeas"
              width={1024}
              height={1024}
              className="relative rounded-[42%_58%_42%_58%/55%_45%_55%_45%] object-cover shadow-2xl"
            />
            {/* floating badges */}
            <div className="absolute -left-4 top-10 hidden rounded-2xl bg-background px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground">Calories</div>
                  <div className="text-sm font-bold">320 kcal</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-2 bottom-10 hidden rounded-2xl bg-background px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Ready in</div>
                  <div className="text-sm font-bold">25 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb / category strip */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 text-sm">
          <div className="text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="hover:text-primary">Food &amp; Recipes</span>
            <span className="mx-2">/</span>
            <span className="font-semibold text-foreground">Healthy Recipes</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Vegetarian", "Low Carb", "High Protein", "Breakfast", "Bowls"].map((t, i) => (
              <button
                key={t}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground/70 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes grid + sidebar */}
      <section id="recipes" className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <div className="font-script text-2xl text-accent">Latest from the kitchen</div>
                <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
                  Healthy Recipes
                </h2>
                <div className="mt-2 h-1 w-16 rounded-full bg-accent" />
              </div>
              <div className="hidden text-sm text-muted-foreground sm:block">
                Showing <span className="font-semibold text-foreground">1–6</span> of 42
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {recipes.map((r) => (
                <article
                  key={r.title}
                  className="group overflow-hidden rounded-3xl border border-border/60 bg-card transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                      {r.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold leading-snug text-foreground transition group-hover:text-primary">
                      {r.tag === "Vegetarian" ? (
                        <Link to="/recipes/healthy-low-carb-vegetarian">{r.title}</Link>
                      ) : (
                        <a href="#">{r.title}</a>
                      )}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {r.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {r.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Flame className="h-3.5 w-3.5" /> {r.calories}
                      </span>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                      >
                        Read more <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              {[1, 2, 3, 4].map((p) => (
                <button
                  key={p}
                  className={`h-10 w-10 rounded-full text-sm font-semibold transition ${
                    p === 1
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "bg-secondary text-foreground/70 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button className="ml-2 inline-flex items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90">
                Next <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="rounded-3xl bg-secondary p-6">
              <h3 className="font-display text-lg font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "Healthy Recipes",
                  "Healthy Breakfast",
                  "Vegan & Vegetarian",
                  "Diet & Fitness",
                  "Yoga & Mindfulness",
                  "Beauty Tips & Ideas",
                ].map((l, i) => (
                  <li key={l}>
                    <a
                      href="#"
                      className={`flex items-center justify-between rounded-xl px-3 py-2 transition ${
                        i === 0
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-background hover:text-primary"
                      }`}
                    >
                      <span className="font-medium">{l}</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div id="popular" className="rounded-3xl border border-border/60 p-6">
              <h3 className="font-display text-lg font-bold">Most Popular</h3>
              <ol className="mt-4 space-y-4">
                {popular.map((p, i) => (
                  <li key={p} className="flex gap-3">
                    <span className="font-display text-2xl font-extrabold text-accent">
                      0{i + 1}
                    </span>
                    <a href="#" className="text-sm font-medium leading-snug hover:text-primary">
                      {p}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/40" />
              <div className="relative">
                <div className="font-script text-2xl">Stay inspired</div>
                <h3 className="mt-1 font-display text-xl font-bold">
                  Weekly recipes in your inbox
                </h3>
                <p className="mt-2 text-sm opacity-90">
                  One short email every Sunday — handpicked recipes & tips.
                </p>
                <form className="mt-4 flex overflow-hidden rounded-full bg-background p-1">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  />
                  <button
                    type="button"
                    className="rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-ink text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-bold">
              The <span className="text-primary">Daily Healthy</span> Tip
            </div>
            <p className="mt-3 text-sm opacity-70">
              Trusted nutrition, recipes and wellness tips — every single day.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-background/10 transition hover:bg-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">
              Categories
            </h4>
            <ul className="mt-4 space-y-2 text-sm opacity-70">
              {NAV.slice(0, 4).map((n) => (
                <li key={n}><a href="#" className="hover:text-primary">{n}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm opacity-70">
              {["About", "Contact", "Write for us", "Privacy"].map((n) => (
                <li key={n}><a href="#" className="hover:text-primary">{n}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">
              Get in touch
            </h4>
            <p className="mt-4 text-sm opacity-70">
              editor@thedailyhealthytip.com
            </p>
          </div>
        </div>
        <div className="border-t border-background/10">
          <div className="mx-auto max-w-7xl px-4 py-5 text-xs opacity-60">
            © {new Date().getFullYear()} The Daily Healthy Tip. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
