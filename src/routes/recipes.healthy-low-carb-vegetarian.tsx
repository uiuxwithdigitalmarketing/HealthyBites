import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Flame,
  Users,
  ChefHat,
  Bookmark,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Search,
  ChevronDown,
  Utensils,
  Check,
} from "lucide-react";
import recipe1 from "@/assets/recipe-1.jpg";
import recipe2 from "@/assets/recipe-2.jpg";
import recipe3 from "@/assets/recipe-3.jpg";
import recipe6 from "@/assets/recipe-6.jpg";

export const Route = createFileRoute("/recipes/healthy-low-carb-vegetarian")({
  head: () => ({
    meta: [
      {
        title:
          "Healthy and Low Carb Vegetarian Recipes — The Daily Healthy Tip",
      },
      {
        name: "description",
        content:
          "A colorful collection of low-carb vegetarian plates packed with plant protein, fiber and flavor — easy weeknight ideas from The Daily Healthy Tip.",
      },
      {
        property: "og:title",
        content: "Healthy and Low Carb Vegetarian Recipes",
      },
      {
        property: "og:description",
        content:
          "Low-carb vegetarian plates packed with plant protein, fiber and flavor.",
      },
      { property: "og:image", content: recipe1 },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: recipe1 },
    ],
  }),
  component: BlogPost,
});

const NAV = [
  "Food & Recipes",
  "Diet & Fitness",
  "Exercise and Fitness",
  "Yoga",
  "Beauty tips and ideas",
  "Health Tips",
];

const ingredients = [
  "2 cups cauliflower florets",
  "1 cup baby spinach, packed",
  "1/2 cup cooked chickpeas",
  "1/2 avocado, sliced",
  "1/4 cup crumbled feta cheese",
  "2 tbsp extra-virgin olive oil",
  "1 tbsp fresh lemon juice",
  "1 clove garlic, minced",
  "1 tsp toasted sesame seeds",
  "Sea salt & black pepper, to taste",
];

const steps = [
  {
    title: "Roast the cauliflower",
    body: "Heat oven to 220°C (425°F). Toss cauliflower with 1 tbsp olive oil, salt and pepper. Roast 18–20 minutes until edges are deeply golden.",
  },
  {
    title: "Wilt the greens",
    body: "While cauliflower roasts, warm 1 tsp oil in a pan. Add garlic and spinach, toss for 60 seconds until just wilted.",
  },
  {
    title: "Build the bowl",
    body: "Layer spinach, roasted cauliflower, chickpeas and avocado in a wide bowl. Crumble feta on top.",
  },
  {
    title: "Dress & finish",
    body: "Whisk lemon juice with remaining olive oil; drizzle over the bowl. Finish with sesame seeds and a crack of pepper.",
  },
];

const related = [
  {
    img: recipe2,
    tag: "Salad",
    title: "5 Fast & Easy Healthy Recipes Everyone Can Follow",
    time: "15 min",
  },
  {
    img: recipe3,
    tag: "Breakfast",
    title: "Avocado Toast with Poached Egg & Microgreens",
    time: "10 min",
  },
  {
    img: recipe6,
    tag: "Bowl",
    title: "Rainbow Quinoa Buddha Bowl",
    time: "30 min",
  },
];

function BlogPost() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-2 px-4 py-2">
          <span className="opacity-90">Drop your article on</span>
          <Mail className="h-4 w-4" />
          <a
            href="mailto:editor@thedailyhealthytip.com"
            className="font-medium hover:underline"
          >
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

      {/* Breadcrumb */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-5 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="hover:text-primary">Food &amp; Recipes</span>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-primary">
            Healthy Recipes
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-foreground line-clamp-1">
            Healthy and Low Carb Vegetarian Recipes
          </span>
        </div>
      </section>

      {/* Article header */}
      <section className="bg-mint">
        <div className="mx-auto max-w-4xl px-4 py-14 lg:py-20">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Vegetarian
            </span>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              Low Carb
            </span>
            <span className="text-muted-foreground">June 20, 2026</span>
            <span className="text-muted-foreground">· 6 min read</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Healthy and Low Carb{" "}
            <span className="text-primary">Vegetarian</span> Recipes
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Eat well without sacrificing flavor — a colorful collection of
            low-carb vegetarian plates that keep your energy steady all day
            long.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="h-12 w-12 rounded-full border-2 border-background shadow"
                style={{ background: "#34d399" }}
              />
              <div>
                <div className="text-sm font-semibold">By Mira Patel</div>
                <div className="text-xs text-muted-foreground">
                  Registered Nutritionist
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-1.5 rounded-full bg-background px-4 py-2 text-xs font-semibold shadow-sm hover:text-primary">
                <Bookmark className="h-3.5 w-3.5" /> Save
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-background px-4 py-2 text-xs font-semibold shadow-sm hover:text-primary">
                <Share2 className="h-3.5 w-3.5" /> Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-mint pb-16">
        <div className="mx-auto max-w-5xl px-4">
          <img
            src={recipe1}
            alt="Roasted cauliflower bowl with chickpeas, spinach, avocado and feta"
            width={1600}
            height={1000}
            className="aspect-[16/9] w-full rounded-3xl object-cover shadow-2xl"
          />

          {/* Quick stats */}
          <div className="mx-auto -mt-10 grid max-w-3xl grid-cols-2 gap-3 rounded-3xl bg-background p-4 shadow-xl sm:grid-cols-4">
            {[
              { Icon: Clock, label: "Prep + Cook", value: "25 min" },
              { Icon: Users, label: "Serves", value: "2" },
              { Icon: Flame, label: "Calories", value: "320 kcal" },
              { Icon: ChefHat, label: "Difficulty", value: "Easy" },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl px-3 py-3"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-mint text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-sm font-bold">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article body + sidebar */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <article className="prose-custom">
            <p className="text-lg leading-relaxed text-foreground/85">
              Low-carb eating doesn't have to mean grilled chicken on repeat.
              When you center meals around vegetables, legumes and good fats,
              you get plates that are colorful, satisfying and naturally low
              in starch — perfect for steady energy and better focus.
            </p>

            <p className="mt-4 leading-relaxed text-foreground/80">
              The hero recipe below — a roasted cauliflower & chickpea bowl —
              has become a weeknight staple in our test kitchen. It's ready
              in 25 minutes, takes one sheet pan, and delivers around{" "}
              <span className="font-semibold text-foreground">14g of plant protein</span>{" "}
              per serving. Once you've got the formula, you can swap in any
              roasted veg you love.
            </p>

            <h2 className="mt-10 font-display text-2xl font-extrabold sm:text-3xl">
              Why this works for low-carb eating
            </h2>
            <ul className="mt-4 space-y-3">
              {[
                "Cauliflower stands in for grains — same satisfying bulk, a fraction of the carbs.",
                "Chickpeas add plant protein and slow-burning fiber to keep you full.",
                "Avocado and olive oil bring healthy fats that help absorb fat-soluble vitamins.",
                "A bright lemon dressing replaces creamy, sugar-heavy sauces.",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-foreground/85">
                  <Check className="mt-1 h-5 w-5 flex-none text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {/* Ingredients */}
              <div className="rounded-3xl bg-mint p-6">
                <h3 className="font-display text-xl font-extrabold">
                  Ingredients
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">Serves 2</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {ingredients.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      <span className="text-foreground/85">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nutrition */}
              <div className="rounded-3xl border border-border/60 p-6">
                <h3 className="font-display text-xl font-extrabold">
                  Nutrition (per serving)
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  {[
                    ["Calories", "320 kcal"],
                    ["Net carbs", "14 g"],
                    ["Protein", "14 g"],
                    ["Fat", "22 g"],
                    ["Fiber", "9 g"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between border-b border-border/60 pb-2 last:border-none last:pb-0"
                    >
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <h2 className="mt-12 font-display text-2xl font-extrabold sm:text-3xl">
              How to make it
            </h2>
            <ol className="mt-6 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <div className="grid h-10 w-10 flex-none place-items-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">
                      {s.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-foreground/80">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <blockquote className="mt-12 rounded-3xl border-l-4 border-accent bg-orange-soft p-6">
              <p className="font-script text-2xl text-accent">Chef's tip</p>
              <p className="mt-2 leading-relaxed text-foreground/85">
                Roast a double batch of cauliflower on Sunday. It keeps for 4
                days in the fridge and turns three weeknight dinners into
                10-minute jobs.
              </p>
            </blockquote>

            <h2 className="mt-12 font-display text-2xl font-extrabold sm:text-3xl">
              Swap & customize
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Make it vegan by dropping the feta and adding a spoon of tahini
              to the dressing. Want more protein? Add a soft-boiled egg or a
              handful of edamame. Out of cauliflower? Roasted broccoli,
              zucchini or bell peppers all work beautifully.
            </p>

            {/* Tags + share */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
              <div className="flex flex-wrap gap-2">
                {["#vegetarian", "#lowcarb", "#bowl", "#weeknight"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-full bg-secondary transition hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-secondary p-6">
              <div className="font-script text-xl text-accent">On this page</div>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Why this works",
                  "Ingredients",
                  "Nutrition",
                  "How to make it",
                  "Swap & customize",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="flex items-center justify-between rounded-xl px-3 py-2 hover:bg-background hover:text-primary"
                    >
                      <span className="font-medium">{l}</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/40" />
              <div className="relative">
                <div className="font-script text-2xl">Stay inspired</div>
                <h3 className="mt-1 font-display text-lg font-bold">
                  Weekly recipes in your inbox
                </h3>
                <form className="mt-4 flex overflow-hidden rounded-full bg-background p-1">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  />
                  <button
                    type="button"
                    className="rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="font-script text-2xl text-accent">Keep reading</div>
              <h2 className="font-display text-3xl font-extrabold">
                You might also like
              </h2>
            </div>
            <Link
              to="/"
              className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
            >
              All recipes →
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
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
                  <h3 className="font-display text-lg font-bold leading-snug group-hover:text-primary">
                    <a href="#">{r.title}</a>
                  </h3>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {r.time}
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
                <li key={n}>
                  <a href="#" className="hover:text-primary">
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider opacity-90">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm opacity-70">
              {["About", "Contact", "Write for us", "Privacy"].map((n) => (
                <li key={n}>
                  <a href="#" className="hover:text-primary">
                    {n}
                  </a>
                </li>
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
            © {new Date().getFullYear()} The Daily Healthy Tip. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
