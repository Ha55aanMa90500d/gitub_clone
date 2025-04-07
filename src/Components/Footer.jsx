import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div class="BackToTop BackToTop--visible">
        <a href="#root" aria-label="Back to top">
          <svg
            aria-hidden="true"
            focusable="false"
            class="octicon octicon-arrow-up"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
            display="inline-block"
            overflow="visible"
          >
            <path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z"></path>
          </svg>
        </a>
      </div>
      <footer
        role="contentinfo"
        class="footer pt-6 position-relative"
        data-analytics-visible='{"category":"Footer","action":"visible","label":"text: Marketing footer"}'
      >
        <h2 class="sr-only">Site-wide Links</h2>
        <div class="container-xl p-responsive">
          <div class="d-flex flex-wrap py-5 mb-5">
            <section class="col-12 col-lg-4 mb-5">
              <a
                href="/"
                data-analytics-event='{"category":"Footer","action":"go to home","label":"text:home"}'
                class="color-fg-default d-inline-block"
                aria-label="Go to GitHub homepage"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 367.4 90"
                  class="footer-logo-mktg d-block"
                  height="30"
                >
                  <g fill="currentColor">
                    <path d="m46.1 0c-25.5 0-46.1 20.6-46.1 46.1 0 20.4 13.2 37.7 31.5 43.8 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.7-.1-8.6-11.6 2.1-14.6-2.8-15.5-5.4-.5-1.3-2.8-5.4-4.7-6.5-1.6-.9-3.9-3-.1-3.1 3.6-.1 6.2 3.3 7.1 4.7 4.2 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.2-10.3-1.2-21-5.1-21-22.8 0-5 1.8-9.2 4.7-12.4-.5-1.2-2.1-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.6-1.6 11.5-1.6s7.8.5 11.5 1.6c8.8-6 12.7-4.7 12.7-4.7 2.5 6.3.9 11.1.5 12.2 2.9 3.2 4.7 7.3 4.7 12.4 0 17.7-10.8 21.6-21.1 22.8 1.7 1.4 3.1 4.2 3.1 8.5 0 6.2-.1 11.1-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.2-6.1 31.4-23.4 31.4-43.8.3-25.4-20.4-46-45.9-46z"></path>
                    <path d="m221.6 67.1h-.1zm0 0c-.5 0-1.8.3-3.2.3-4.4 0-5.9-2-5.9-4.6v-17.5h8.9c.5 0 .9-.4.9-1.1v-9.5c0-.5-.4-.9-.9-.9h-8.9v-11.7c0-.4-.3-.7-.8-.7h-12c-.5 0-.8.3-.8.7v12.1s-6.1 1.5-6.5 1.6-.7.5-.7.9v7.6c0 .6.4 1.1.9 1.1h6.2v18.3c0 13.6 9.5 15 16 15 3 0 6.5-.9 7.1-1.2.3-.1.5-.5.5-.9v-8.4c.1-.6-.3-1-.8-1.1zm132.2-12.2c0-10.1-4.1-11.4-8.4-11-3.3.2-6 1.9-6 1.9v19.6s2.7 1.9 6.8 2c5.8.2 7.6-1.9 7.6-12.5zm13.6-.9c0 19.1-6.2 24.6-17 24.6-9.1 0-14.1-4.6-14.1-4.6s-.2 2.6-.5 2.9c-.2.3-.4.4-.8.4h-8.3c-.6 0-1.1-.4-1.1-.9l.1-62c0-.5.4-.9.9-.9h11.9c.5 0 .9.4.9.9l-.1 20.9s4.6-3 11.3-3h.1c6.8-0 16.7 2.5 16.7 21.7zm-48.7-20.2h-11.7c-.6 0-.9.4-.9 1.1v30.3s-3.1 2.2-7.3 2.2-5.4-1.9-5.4-6.1v-26.5c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v28.5c0 12.3 6.9 15.3 16.3 15.3 7.8 0 14.1-4.3 14.1-4.3s.3 2.2.4 2.5.5.5.9.5h7.5c.6 0 .9-.4.9-.9l.1-41.7c-.1-.4-.6-.9-1.2-.9zm-132.2 0h-11.9c-.5 0-.9.5-.9 1.1v40.9c0 1.1.7 1.5 1.7 1.5h10.7c1.1 0 1.4-.5 1.4-1.5v-41.1c0-.5-.5-.9-1-.9zm-5.8-18.9c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7c4.2 0 7.6-3.4 7.6-7.7s-3.4-7.7-7.6-7.7zm92-1.4h-11.8c-.5 0-.9.4-.9.9v22.8h-18.5v-22.7c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v62c0 .5.5.9.9.9h11.9c.5 0 .9-.4.9-.9v-26.6h18.5l-.1 26.5c0 .5.4.9.9.9h11.9c.5 0 .9-.4.9-.9v-62c0-.4-.4-.9-.9-.9zm-105.3 27.5v32c0 .2-.1.6-.3.7 0 0-7 5-18.5 5-13.9 0-30.3-4.4-30.3-33 0-28.7 14.4-34.6 28.4-34.5 12.2 0 17.1 2.7 17.8 3.2.2.3.3.5.3.8l-2.3 9.9c0 .5-.5 1.1-1.1.9-2-.6-5-1.8-12.1-1.8-8.2 0-17 2.3-17 20.8s8.4 20.6 14.4 20.6c5.1 0 7-.6 7-.6v-12.8h-8.2c-.6 0-1.1-.4-1.1-.9v-10.3c0-.5.4-.9 1.1-.9h20.9c.6-.1 1 .4 1 .9z"></path>
                  </g>
                </svg>
              </a>

              <h3 class="h5 mt-4 mb-0" id="subscribe-to-newsletter">
                Subscribe to our developer newsletter
              </h3>
              <p class="f5 color-fg-muted mb-3">
                Get tips, technical guides, and best practices. Twice a month.
                Right in your inbox.
              </p>
              <a
                class="btn-mktg mb-4 btn-muted-mktg"
                data-analytics-event='{"category":"Subscribe","action":"click to Subscribe","label":"ref_cta:Subscribe;"}'
                href="https://resources.github.com/newsletter/"
              >
                Subscribe
              </a>
            </section>

            <nav
              class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-lg-0 pl-lg-4"
              aria-labelledby="footer-title-product"
            >
              <h3
                class="h5 mb-3 text-mono color-fg-muted text-normal"
                id="footer-title-product"
              >
                Product
              </h3>

              <ul class="list-style-none color-fg-muted f5">
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"features","context":"product","tag":"link","label":"features_link_product_footer"}'
                    href="/features"
                  >
                    Features
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"enterprise","context":"product","tag":"link","label":"enterprise_link_product_footer"}'
                    href="/enterprise"
                  >
                    Enterprise
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"copilot","context":"product","tag":"link","label":"copilot_link_product_footer"}'
                    href="/features/copilot"
                  >
                    Copilot
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"security","context":"product","tag":"link","label":"security_link_product_footer"}'
                    href="/security"
                  >
                    Security
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"pricing","context":"product","tag":"link","label":"pricing_link_product_footer"}'
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"team","context":"product","tag":"link","label":"team_link_product_footer"}'
                    href="/team"
                  >
                    Team
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"resources","context":"product","tag":"link","label":"resources_link_product_footer"}'
                    href="https://resources.github.com"
                  >
                    Resources
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"roadmap","context":"product","tag":"link","label":"roadmap_link_product_footer"}'
                    href="https://github.com/github/roadmap"
                  >
                    Roadmap
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"compare","context":"product","tag":"link","label":"compare_link_product_footer"}'
                    href="https://resources.github.com/devops/tools/compare"
                  >
                    Compare GitHub
                  </a>
                </li>
              </ul>
            </nav>

            <nav
              class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4"
              aria-labelledby="footer-title-platform"
            >
              <h3
                class="h5 mb-3 text-mono color-fg-muted text-normal"
                id="footer-title-platform"
              >
                Platform
              </h3>

              <ul class="list-style-none f5">
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"dev-api","context":"platform","tag":"link","label":"dev-api_link_platform_footer"}'
                    href="https://docs.github.com/get-started/exploring-integrations/about-building-integrations"
                  >
                    Developer API
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"partners","context":"platform","tag":"link","label":"partners_link_platform_footer"}'
                    href="https://partner.github.com"
                  >
                    Partners
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"edu","context":"platform","tag":"link","label":"edu_link_platform_footer"}'
                    href="https://github.com/edu"
                  >
                    Education
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"cli","context":"platform","tag":"link","label":"cli_link_platform_footer"}'
                    href="https://cli.github.com"
                  >
                    GitHub CLI
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"desktop","context":"platform","tag":"link","label":"desktop_link_platform_footer"}'
                    href="https://desktop.github.com"
                  >
                    GitHub Desktop
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"mobile","context":"platform","tag":"link","label":"mobile_link_platform_footer"}'
                    href="https://github.com/mobile"
                  >
                    GitHub Mobile
                  </a>
                </li>
              </ul>
            </nav>

            <nav
              class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4"
              aria-labelledby="footer-title-support"
            >
              <h3
                class="h5 mb-3 text-mono color-fg-muted text-normal"
                id="footer-title-support"
              >
                Support
              </h3>

              <ul class="list-style-none f5">
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"docs","context":"support","tag":"link","label":"docs_link_support_footer"}'
                    href="https://docs.github.com"
                  >
                    Docs
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"community","context":"support","tag":"link","label":"community_link_support_footer"}'
                    href="https://github.community"
                  >
                    Community Forum
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"services","context":"support","tag":"link","label":"services_link_support_footer"}'
                    href="https://services.github.com"
                  >
                    Professional Services
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"premium_support","context":"support","tag":"link","label":"premium_support_link_support_footer"}'
                    href="/enterprise/premium-support"
                  >
                    Premium Support
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"skills","context":"support","tag":"link","label":"skills_link_support_footer"}'
                    href="https://skills.github.com"
                  >
                    Skills
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"status","context":"support","tag":"link","label":"status_link_support_footer"}'
                    href="https://www.githubstatus.com"
                  >
                    Status
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"contact_github","context":"support","tag":"link","label":"contact_github_link_support_footer"}'
                    href="https://support.github.com?tags=dotcom-footer"
                  >
                    Contact GitHub
                  </a>
                </li>
              </ul>
            </nav>

            <nav
              class="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4"
              aria-labelledby="footer-title-company"
            >
              <h3
                class="h5 mb-3 text-mono color-fg-muted text-normal"
                id="footer-title-company"
              >
                Company
              </h3>

              <ul class="list-style-none f5">
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"about","context":"company","tag":"link","label":"about_link_company_footer"}'
                    href="https://github.com/about"
                  >
                    About
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"customer_stories","context":"company","tag":"link","label":"customer_stories_link_company_footer"}'
                    href="/customer-stories?type=enterprise"
                  >
                    Customer stories
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"blog","context":"company","tag":"link","label":"blog_link_company_footer"}'
                    href="https://github.blog"
                  >
                    Blog
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"readme","context":"company","tag":"link","label":"readme_link_company_footer"}'
                    href="/readme"
                  >
                    The ReadME Project
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"careers","context":"company","tag":"link","label":"careers_link_company_footer"}'
                    href="https://github.careers"
                  >
                    Careers
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"newsroom","context":"company","tag":"link","label":"newsroom_link_company_footer"}'
                    href="/newsroom"
                  >
                    Newsroom
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"inclusion","context":"company","tag":"link","label":"inclusion_link_company_footer"}'
                    href="/about/diversity"
                  >
                    Inclusion
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"social_impact","context":"company","tag":"link","label":"social_impact_link_company_footer"}'
                    href="https://socialimpact.github.com"
                  >
                    Social Impact
                  </a>
                </li>
                <li class="lh-condensed mb-3">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"shop","context":"company","tag":"link","label":"shop_link_company_footer"}'
                    href="https://shop.github.com"
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="color-bg-subtle">
          <div class="container-xl p-responsive f6 py-4 d-md-flex justify-between flex-items-center">
            <nav aria-label="Legal and Resource Links" className="legal">
              <ul class="list-style-none d-flex flex-wrap color-fg-muted">
                <li class="mx-2">
                  © <time datetime="2025">2025</time> GitHub, Inc.
                </li>

                <li class="mx-2">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"terms","context":"subfooter","tag":"link","label":"terms_link_subfooter_footer"}'
                    href="https://docs.github.com/site-policy/github-terms/github-terms-of-service"
                  >
                    Terms
                  </a>
                </li>

                <li class="mx-2">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"privacy","context":"subfooter","tag":"link","label":"privacy_link_subfooter_footer"}'
                    href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
                  >
                    Privacy
                  </a>
                  (
                  <a
                    href="https://github.com/github/site-policy/pull/582"
                    class="Link--secondary"
                  >
                    Updated <time datetime="2022-08">02/2024</time>
                  </a>
                  )
                </li>

                <li class="mx-2">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"sitemap","context":"subfooter","tag":"link","label":"sitemap_link_subfooter_footer"}'
                    href="/sitemap"
                  >
                    Sitemap
                  </a>
                </li>

                <li class="mx-2">
                  <a
                    class="Link--secondary"
                    data-analytics-event='{"location":"footer","action":"what_is_git","context":"subfooter","tag":"link","label":"what_is_git_link_subfooter_footer"}'
                    href="/git-guides"
                  >
                    What is Git?
                  </a>
                </li>

                <li class="mx-2">
                  <cookie-consent-link data-catalyst="">
                    <button
                      type="button"
                      class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent"
                      data-action="click:cookie-consent-link#showConsentManagement"
                      data-analytics-event='{"location":"footer","action":"cookies","context":"subfooter","tag":"link","label":"cookies_link_subfooter_footer"}'
                    >
                      Manage cookies
                    </button>
                  </cookie-consent-link>
                </li>

                <li class="mx-2">
                  <cookie-consent-link data-catalyst="">
                    <button
                      type="button"
                      class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent"
                      data-action="click:cookie-consent-link#showConsentManagement"
                      data-analytics-event='{"location":"footer","action":"dont_share_info","context":"subfooter","tag":"link","label":"dont_share_info_link_subfooter_footer"}'
                    >
                      Do not share my personal information
                    </button>
                  </cookie-consent-link>
                </li>
              </ul>
            </nav>
            <nav aria-label="GitHub's Social Media Links" class="mt-3 mt-md-0 icons_nav">
              <ul class="list-style-none d-flex items-center lh-condensed-ultra justify-between">
                <li class="ml-md-3">
                  <a
                    href="https://www.linkedin.com/company/github"
                    class="footer-social-icon d-block Link--outlineOffset"
                    data-analytics-event='{"category":"Footer","action":"go to Linkedin","label":"text:text:linkedin"}'
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 19 18"
                      aria-hidden="true"
                      class="d-block"
                      width="19"
                      height="18"
                    >
                      <path
                        d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span class="sr-only">GitHub on LinkedIn</span>
                  </a>
                </li>
                <li class="ml-3">
                  <a
                    href="https://www.instagram.com/github"
                    class="footer-social-icon d-block Link--outlineOffset"
                    data-analytics-event='{"category":"Footer","action":"go to Instagram","label":"text:text:instagram"}'
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="d-block"
                      width="18"
                      height="18"
                    >
                      <title>Instagram</title>
                      <path
                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span class="sr-only">GitHub on Instagram</span>
                  </a>
                </li>
                <li class="ml-3">
                  <a
                    href="https://www.youtube.com/github"
                    class="footer-social-icon d-block Link--outlineOffset"
                    data-analytics-event='{"category":"Footer","action":"go to YouTube","label":"text:text:youtube"}'
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 19.17 13.6"
                      aria-hidden="true"
                      class="d-block"
                      width="23"
                      height="16"
                    >
                      <path
                        d="M18.77 2.13A2.4 2.4 0 0 0 17.09.42C15.59 0 9.58 0 9.58 0a57.55 57.55 0 0 0-7.5.4A2.49 2.49 0 0 0 .39 2.13 26.27 26.27 0 0 0 0 6.8a26.15 26.15 0 0 0 .39 4.67 2.43 2.43 0 0 0 1.69 1.71c1.52.42 7.5.42 7.5.42a57.69 57.69 0 0 0 7.51-.4 2.4 2.4 0 0 0 1.68-1.71 25.63 25.63 0 0 0 .4-4.67 24 24 0 0 0-.4-4.69zM7.67 9.71V3.89l5 2.91z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span class="sr-only">GitHub on YouTube</span>
                  </a>
                </li>
                <li class="ml-3">
                  <a
                    href="https://x.com/github"
                    class="footer-social-icon d-block Link--outlineOffset"
                    data-analytics-event='{"category":"Footer","action":"go to X","label":"text:text:x"}'
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 1227"
                      fill="currentColor"
                      aria-hidden="true"
                      class="d-block"
                      width="16"
                      height="16"
                    >
                      <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path>
                    </svg>

                    <span class="sr-only">GitHub on X</span>
                  </a>
                </li>
                <li class="ml-3">
                  <a
                    href="https://www.tiktok.com/@github"
                    class="footer-social-icon d-block Link--outlineOffset"
                    data-analytics-event='{"category":"Footer","action":"go to tiktok","label":"text:text:tiktok"}'
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="d-block"
                      width="18"
                      height="18"
                    >
                      <title>TikTok</title>
                      <path
                        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span class="sr-only">GitHub on TikTok</span>
                  </a>
                </li>
                <li class="ml-3">
                  <a
                    href="https://www.twitch.tv/github"
                    class="footer-social-icon d-block Link--outlineOffset"
                    data-analytics-event='{"category":"Footer","action":"go to Twitch","label":"text:text:twitch"}'
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="d-block"
                      width="18"
                      height="18"
                    >
                      <title>Twitch</title>
                      <path
                        d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span class="sr-only">GitHub on Twitch</span>
                  </a>
                </li>
                <li class="ml-3">
                  <a
                    href="https://github.com/github"
                    class="footer-social-icon d-block Link--outlineOffset"
                    data-analytics-event='{"category":"Footer","action":"go to github&apos;s org","label":"text:text:github"}'
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 16 16"
                      width="20"
                      aria-hidden="true"
                      class="d-block"
                    >
                      <path
                        fill="currentColor"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>

                    <span class="sr-only">GitHub’s organization on GitHub</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
