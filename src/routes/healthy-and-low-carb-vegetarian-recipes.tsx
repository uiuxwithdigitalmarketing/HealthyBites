import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Flame,
  Leaf,
  BookOpen,
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
  ListChecks,
} from "lucide-react";
import heroBowl from "@/assets/hero-bowl.jpg";
import recipe2 from "@/assets/recipe-2.jpg";
import recipe3 from "@/assets/recipe-3.jpg";
import recipe6 from "@/assets/recipe-6.jpg";

export const Route = createFileRoute("/healthy-and-low-carb-vegetarian-recipes")({
  head: () => ({
    meta: [
      {
        title:
          "Healthy and Low Carb Vegetarian Recipes — The Daily Healthy Tip",
      },
      {
        name: "description",
        content:
          "Easy-to-prepare healthy and low carb vegetarian recipes that help improve your metabolism, keep you fit and satisfy your taste buds.",
      },
      {
        property: "og:title",
        content: "Healthy and Low Carb Vegetarian Recipes",
      },
      {
        property: "og:description",
        content:
          "Burrito bowl, taco Mexicana, jeera vegetables, watermelon salad and beetroot soup — five healthy vegetarian recipes to cook at home.",
      },
      { property: "og:image", content: heroBowl },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBowl },
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

type Group = { title?: string; items: string[] };
type Recipe = {
  id: string;
  name: string;
  tag: string;
  intro: string;
  ingredients: Group[];
  directions: Group[];
  serve: string;
  nutrition: [string, string][];
};

const recipes: Recipe[] = [
  {
    id: "burrito-bowl",
    name: "Burrito Bowl",
    tag: "Bowl",
    intro:
      "Burrito bowl is an easy way to load up on micronutrients and fiber by squeezing in a few servings of veggies. The benefit is that it is not covered in high-carb or high-calories. Plus they are easy to prepare and you don’t need seasoned veggie to make burrito bowl.",
    ingredients: [
      {
        items: [
          "1 cup of uncooked rice",
          "1 cup salsa sauce (store-bought or homemade)",
          "1 avocado, halved, peeled, and seeded",
          "2 tbsp chopped fresh cilantro leaves",
          "3 cups chopped lettuce",
          "1 whole kernel corn, drained",
          "1 black beans, rinsed and drained",
          "2 tomatoes, diced",
        ],
      },
      {
        title: "For chipotle cream sauce",
        items: [
          "1 cup sour cream",
          "1 tbsp chipotle paste",
          "1 clove garlic",
          "¼ tbsp salt, or more according to taste",
          "Juice of 1 lime",
        ],
      },
    ],
    directions: [
      {
        items: [
          "To make chipotle cream sauce, whisk together sour cream, garlic, lime juice, salt and chipotle paste, then set it aside for some time.",
          "In a large pan add 1½ cups of water and cook rice according to package instructions; let it cool and mix it with salsa sauce.",
          "Take a big bowl and divide the rice mixture in it; top it with black beans, tomatoes, avocado, cilantro, lettuce and corn.",
        ],
      },
    ],
    serve: "Drizzle it with chipotle cream sauce and serve it.",
    nutrition: [
      ["Calories", "371.9 kcal"],
      ["Total fat", "11.4 g"],
      ["Cholesterol", "13.4 g"],
      ["Total carbohydrates", "58.9 g"],
      ["Protein", "12.7 g"],
    ],
  },
  {
    id: "taco-mexicana",
    name: "Taco Mexicana",
    tag: "Mexican",
    intro:
      "A crispy taco, loaded with wholesome rajma topping and tangy salsa — a delight. In this dish tortillas are used which are made using refined flour (maida) or corn flour/maize. It is better that you use corn flour/maize if you are diet conscious. This dish will make your taste buds more than happy, further enhanced by peppy sauces and yummy grated cheese!",
    ingredients: [
      { items: ["14 taco shells"] },
      {
        title: "For uncooked salsa",
        items: [
          "¼ cup finely chopped spring onions",
          "¾ cup finely chopped tomatoes",
          "½ tbsp dried oregano",
          "½ tbsp dry red chili flakes (paprika)",
          "½ tbsp sugar",
          "1½ tbsp finely chopped coriander",
          "Salt according to taste",
        ],
      },
      {
        title: "For the rajma",
        items: [
          "1 tbsp oil",
          "½ tbsp garlic paste",
          "½ cup finely chopped onions",
          "1 cup fresh tomato pulp",
          "½ tbsp chilli powder (chili flakes)",
          "1 tbsp cumin seeds powder",
          "Salt according to taste",
          "2 tbsp tomato ketchup",
        ],
      },
    ],
    directions: [
      {
        title: "Rajma topping",
        items: [
          "Take a pan and heat the oil, add onions and garlic paste and sauté on medium flame for 2–3 minutes until the onions turn brown.",
          "Add the tomato pulp, tomato ketchup, chili powder, salt and cumin, mix it well and cook for 2–3 minutes, stirring properly.",
          "Add rajma and mix it well. Mash it lightly using a potato masher and cook on a medium flame for 2–3 minutes while stirring occasionally. Then keep it aside for some time.",
        ],
      },
      {
        title: "Uncooked salsa",
        items: [
          "Mix all the ingredients — onions, tomatoes, green chilli — in a bowl and mash lightly using a spoon for 2–3 minutes so that the flavors can mix easily.",
        ],
      },
      {
        title: "Assemble",
        items: [
          "Take a taco shell and fill it with 1 tbsp of rajma topping, then add ½ tbsp of uncooked salsa on the rajma topping. Now spread ½ spoon ketchup and ¼ tbsp chilli sauce on it.",
          "Add a few shredded lettuce leaves and grated cheese on it.",
        ],
      },
    ],
    serve: "Serve immediately!",
    nutrition: [
      ["Calories", "300 kcal"],
      ["Total fat", "13 g"],
      ["Cholesterol", "15 mg"],
      ["Total carbohydrates", "40 g"],
      ["Protein", "11 g"],
    ],
  },
  {
    id: "jeera-vegetables",
    name: "Jeera Vegetables",
    tag: "Indian",
    intro:
      "When the name of an Indian dish comes in front of you, the only thing you say is “spicy and tasty”. Normally Indian dishes are full of calories as everything is made in oil, so they are considered fatty food. But there are so many dishes that are healthy and tasty. Jeera Vegetables is one of those recipes which is really easy to make — ready in 15–20 minutes.",
    ingredients: [
      {
        items: [
          "2 tbsp butter",
          "2 tbsp olive oil",
          "2 tbsp jeera",
          "1 tbsp chili powder",
          "2 tbsp lemon juice",
          "2 onions",
          "1 cup palak puree",
          "8–9 baby potatoes",
          "5–6 carrots",
          "Salt and pepper",
          "Coriander leaves",
          "Cardamom powder",
          "Cream",
        ],
      },
    ],
    directions: [
      {
        items: [
          "Take a pan and heat the oil.",
          "Add jeera, onions, potatoes, baby carrots and ginger-chili-garlic paste.",
          "Pour the palak puree in it and let it cook for 3–4 minutes.",
          "Put in some butter and cream. Mix well and add lime juice.",
          "Garnish with cream, chili powder and coriander.",
        ],
      },
    ],
    serve: "Serve hot!",
    nutrition: [
      ["Calories", "104 kcal"],
      ["Total fat", "14 g"],
      ["Cholesterol", "11.3 g"],
      ["Total carbohydrates", "34 g"],
      ["Protein", "15 g"],
    ],
  },
  {
    id: "mediterranean-watermelon-salad",
    name: "Mediterranean Watermelon Salad",
    tag: "Salad",
    intro:
      "A quick dish of refreshing vegetables and fruit for hydrating your body. A dish full of watermelon cubes, tomatoes, lettuce, bell pepper and cucumber, finished with a light drizzle.",
    ingredients: [
      {
        items: [
          "1 bowl of watermelon cubes",
          "2 yellow bell peppers",
          "1 cup onions",
          "Pomegranate juice",
          "1 tbsp mustard paste",
          "A pinch of jeera powder",
          "A pinch of oregano",
          "10–12 olives",
          "Chopped parsley",
          "Lettuce",
          "Flax seeds",
          "Pistachios",
          "Salt & pepper",
          "2 tbsp olive oil",
        ],
      },
    ],
    directions: [
      {
        items: [
          "Pour some pomegranate juice in a bowl.",
          "Add mustard paste, oregano, jeera powder, pepper and salt and mix it well.",
          "Add olive oil. In another bowl, put watermelon cubes, yellow bell peppers, onions, cucumber, tomatoes and olives.",
          "Add parsley, salt and pepper and mix well. Add lettuce leaves, pistachios and flax seeds, then pour in the dressing and mix it properly.",
        ],
      },
    ],
    serve: "Serve chilled!",
    nutrition: [
      ["Calories", "180.1 kcal"],
      ["Total fat", "13.0 g"],
      ["Cholesterol", "33.4 mg"],
      ["Total carbohydrates", "11.1 g"],
      ["Protein", "6.8 g"],
    ],
  },
  {
    id: "beetroot-soup",
    name: "Beetroot Soup",
    tag: "Soup",
    intro:
      "Beetroot soup is one of the healthiest soups. Beetroot is a good source of potassium and is linked with healthier blood pressure, better muscle power and more stamina. It is a healthy, hearty soup which tastes best when served hot.",
    ingredients: [
      {
        items: [
          "1 cup peeled and chopped bottle gourd",
          "1 cup peeled and chopped beetroot",
          "½ cup chopped tomato",
          "½ cup chopped onion",
          "½ cup peeled and chopped potato",
          "½ tbsp sugar",
          "1 tbsp powdered black pepper",
          "Salt according to taste",
          "Cream",
          "Chopped coriander leaves",
        ],
      },
    ],
    directions: [
      {
        items: [
          "Add two cups of water to a pan and add the beetroot, bottle gourd, onion, tomato and potato.",
          "Boil until all the vegetables are soft.",
          "Let them cool down, then blend everything in a blender. Strain with a sieve.",
          "Add some sugar, salt and black pepper.",
          "Garnish with cream and coriander leaves.",
        ],
      },
    ],
    serve: "Serve hot!",
    nutrition: [
      ["Calories", "78 kcal"],
      ["Total fat", "8 g"],
      ["Cholesterol", "77 mg"],
      ["Total carbohydrates", "16 g"],
      ["Protein", "9 g"],
    ],
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
          <p className="mb-3 font-script text-2xl text-accent">
            Treat your body with healthy food
          </p>
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Vegetarian
            </span>
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              Low Carb
            </span>
            <span className="text-muted-foreground">October 25, 2018</span>
            <span className="text-muted-foreground">· 6 min read</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Healthy and Low Carb{" "}
            <span className="text-primary">Vegetarian</span> Recipes
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Five easy, home-cooked vegetarian recipes that help your
            metabolism, keep you fit and still make your taste buds happy.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="h-12 w-12 rounded-full border-2 border-background shadow"
                style={{ background: "#34d399" }}
              />
              <div>
                <div className="text-sm font-semibold">By Stella Pike</div>
                <div className="text-xs text-muted-foreground">
                  The Daily Healthy Tip
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
            src={heroBowl}
            alt="Colorful vegetarian bowl with fresh vegetables and greens"
            width={1600}
            height={1000}
            className="aspect-[16/9] w-full rounded-3xl object-cover shadow-2xl"
          />

          {/* Quick stats */}
          <div className="mx-auto -mt-10 grid max-w-3xl grid-cols-2 gap-3 rounded-3xl bg-background p-4 shadow-xl sm:grid-cols-4">
            {[
              { Icon: Utensils, label: "Recipes", value: "5 dishes" },
              { Icon: Leaf, label: "Diet", value: "Vegetarian" },
              { Icon: Flame, label: "Calories", value: "78–372 kcal" },
              { Icon: BookOpen, label: "Read time", value: "6 min" },
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
          <article className="prose-custom min-w-0">
            <p className="text-lg leading-relaxed text-foreground/85">
              Busy lives make it easy to forget about looking after our
              health. Many people work out a lot but still struggle because of
              irregular eating. Some skip meals hoping to lose weight, some
              eat more than they need, and some think junk food is fine because
              they hit the gym anyway. Once we find comfort in that kind of
              food, we keep coming back for more — and the calories add up.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              So to make your taste buds happy and your body healthy, here are
              some{" "}
              <span className="font-semibold text-foreground">
                healthy recipes you can cook at home
              </span>{" "}
              that won’t disappoint you on taste. You’ll love them.
            </p>

            {/* Recipe index */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {recipes.map((r, i) => (
                <a
                  key={r.id}
                  href={`#${r.id}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border/60 p-4 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                >
                  <div className="grid h-10 w-10 flex-none place-items-center rounded-full bg-mint font-display text-sm font-extrabold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-display font-bold leading-snug group-hover:text-primary">
                      {r.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {r.nutrition[0][1]} · {r.tag}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-50 group-hover:text-primary group-hover:opacity-100" />
                </a>
              ))}
            </div>

            {recipes.map((r, idx) => (
              <section
                key={r.id}
                id={r.id}
                className="mt-16 scroll-mt-28 border-t border-border/60 pt-12"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-script text-2xl text-accent">
                    Recipe {idx + 1}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70">
                    {r.tag}
                  </span>
                </div>
                <h2 className="mt-1 font-display text-2xl font-extrabold sm:text-3xl">
                  {r.name}
                </h2>
                <p className="mt-3 leading-relaxed text-foreground/80">
                  {r.intro}
                </p>

                <div className="mt-8 grid gap-8 sm:grid-cols-[1.4fr_1fr]">
                  {/* Ingredients */}
                  <div className="rounded-3xl bg-mint p-6">
                    <h3 className="font-display text-xl font-extrabold">
                      Ingredients
                    </h3>
                    {r.ingredients.map((g, gi) => (
                      <div key={gi} className={gi ? "mt-5" : "mt-4"}>
                        {g.title && (
                          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                            {g.title}
                          </p>
                        )}
                        <ul className="space-y-2.5 text-sm">
                          {g.items.map((i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                              <span className="text-foreground/85">{i}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Nutrition */}
                  <div className="self-start rounded-3xl border border-border/60 p-6">
                    <h3 className="font-display text-xl font-extrabold">
                      Nutrition facts
                    </h3>
                    <dl className="mt-4 space-y-3 text-sm">
                      {r.nutrition.map(([k, v]) => (
                        <div
                          key={k}
                          className="flex items-center justify-between gap-3 border-b border-border/60 pb-2 last:border-none last:pb-0"
                        >
                          <dt className="text-muted-foreground">{k}</dt>
                          <dd className="font-semibold">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <h3 className="mt-10 font-display text-xl font-extrabold">
                  Directions
                </h3>
                {r.directions.map((g, gi) => {
                  const offset = r.directions
                    .slice(0, gi)
                    .reduce((n, d) => n + d.items.length, 0);
                  return (
                    <div key={gi} className="mt-5">
                      {g.title && (
                        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                          {g.title}
                        </p>
                      )}
                      <ol className="space-y-4">
                        {g.items.map((s, si) => (
                          <li key={s} className="flex gap-4">
                            <div className="grid h-9 w-9 flex-none place-items-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground">
                              {offset + si + 1}
                            </div>
                            <p className="pt-1.5 leading-relaxed text-foreground/80">
                              {s}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  );
                })}

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-soft px-4 py-2 text-sm font-semibold text-accent">
                  <Check className="h-4 w-4" /> {r.serve}
                </div>
              </section>
            ))}

            <blockquote className="mt-16 rounded-3xl border-l-4 border-accent bg-orange-soft p-6">
              <p className="font-script text-2xl text-accent">
                Who said healthy cooking is hard?
              </p>
              <p className="mt-2 leading-relaxed text-foreground/85">
                All you need is to give your body a little time from your
                regular schedule. Make these dishes for yourself and your
                family.
              </p>
            </blockquote>

            {/* Tags + share */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
              <div className="flex flex-wrap gap-2">
                {["#vegetarian", "#lowcarb", "#healthyrecipes", "#homecooking"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70"
                    >
                      {t}
                    </span>
                  ),
                )}
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
              <div className="flex items-center gap-2 font-script text-xl text-accent">
                <ListChecks className="h-5 w-5" /> In this article
              </div>
              <ul className="mt-3 space-y-1 text-sm">
                {recipes.map((r) => (
                  <li key={r.id}>
                    <a
                      href={`#${r.id}`}
                      className="flex items-center justify-between rounded-xl px-3 py-2 hover:bg-background hover:text-primary"
                    >
                      <span className="font-medium">{r.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 flex-none opacity-60" />
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
                    className="min-w-0 flex-1 bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
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
