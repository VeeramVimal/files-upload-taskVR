import React from "react";
import Layout from "../../components/layout";

const Home = () => {
  return (
    <Layout>
      <div class="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white dark:bg-slate-800">
        <div data-theme="teal" class="mx-auto max-w-6xl">
          <h2 class="sr-only">Featured case study</h2>
          <section class="font-sans text-black">
            <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div class="h-full">
                  <article class="h-full">
                    <div class="h-full">
                      <img
                        class="h-full object-cover"
                        src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
                        width="733"
                        height="412"
                        alt='""'
                        typeof="foaf:Image"
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div class="p-6 bg-grey">
                <div class="leading-relaxed">
                  <h2 class="leading-tight text-4xl font-bold">
                    CXcon: Experience Transformation
                  </h2>
                  <p class="mt-4">
                    Our second CXcon in October was dedicated to experience
                    transformation. The free one-day virtual event&nbsp;brought
                    together 230+ heads of digital, thought leaders, and UX
                    practitioners to discuss all aspects of experience design..
                  </p>
                  <p class="mt-4">
                    In a jam-packed day filled with keynote sessions, panels,
                    and virtual networking we explored topics including design
                    leadership, UX ethics, designing for emotion and innovation
                    at scale.
                  </p>
                  <p>
                    <a
                      class="mt-4 button button--secondary"
                      href="https://inviqa.com/cxcon-experience-transformation"
                    >
                      Explore this event
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
