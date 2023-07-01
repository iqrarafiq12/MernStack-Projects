import React from 'react'

function FooterSection() {
  return (
    <>
      <footer aria-label="Site Footer" class="bg-slate-100 dark:bg-slate-900 ">
        <div
          class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
        >
          <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-900 sm:p-3 lg:p-4"
              href="#MainContent"
            >
              <span class="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div class="lg:flex lg:items-end lg:justify-between">
            <div>

              <p
                class="mx-auto mt-6 max-w-md text-center leading-relaxed text-cyan-800 dark:text-cyan-200 lg:text-left"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quae, nisi inventore, quasi nemo quos iste, maiores et consequatur corporis sit officia ut tenetur nesciunt voluptate dolor enim. Asperiores, iusto?
              </p>
            </div>

            <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
              <ul
                class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
              >
                <li>
                  <a class="text-cyan-700 transition hover:text-cyan-700/75 dark:text-cyan-200 hover:hover:text-cyan-800">
                    About
                  </a>
                </li>

                <li>
                  <a class="text-cyan-700 transition hover:text-cyan-700/75 dark:text-cyan-200 hover:hover:text-cyan-800">
                    Services
                  </a>
                </li>

                <li>
                  <a class="text-cyan-700 transition hover:text-cyan-700/75 dark:text-cyan-200 hover:hover:text-cyan-800">
                    For Projects
                  </a>
                </li>

                <li>
                  <a class="text-cyan-700 transition hover:text-cyan-700/75 dark:text-cyan-200 hover:hover:text-cyan-800">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <p class="mt-12 text-center text-sm lg:text-right text-cyan-700 transition hover:text-cyan-700/75 dark:text-cyan-200 hover:hover:text-cyan-800 ">
            Copyright &copy; 2023. All rights reserved : Iqra Rafiq
          </p>
        </div>
      </footer>

    </>
  )
}

export default FooterSection