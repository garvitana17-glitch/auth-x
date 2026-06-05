import React from "react";

const Privacy = () => {
  const privacySection = [
    {
      title: "1. Data Collection",
      content:
        "Auth-X collects only the essential information required for authentication:",
      list: [
        "Email address",
        "Password (securely hashed using bcrypt)",
        "Token-based session identifiers (JWT)",
      ],
    },
    {
      title: "2. Data Usage",
      content:
        "Auth-X only uses your data to authenticate and authorize users. No analytics, third-party tracking, or profiling is performed.",
    },
    {
      title: "3. Third-Party Services",
      content:
        "During development, Mailtrap is used to handle test emails securely. No data is shared with external services beyond what is necessary for functionality.",
    },
    {
      title: "4. Data Security",
      content:
        "Auth-X uses environment variables to manage sensitive credentials. Passwords are never stored in plain text. JWT tokens are signed with secure secrets.",
    },
    {
      title: "5. Developer Responsibility",
      content:
        "While Auth-X provides a secure base, production use demands proper deployment practices. As the implementer, you are responsible for configuring HTTPS, CORS, cookie policies, and secure hosting.",
    },
    {
      title: "6. Open Source Ethics",
      content:
        "Auth-X does not collect or store any analytics or telemetry. You have full control over your data and code.",
    },
  ];
  return (
    <div className="min-h-dvh px-6 sm:px-10 md:px-20 py-12 bg-black text-white font-[Inter]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
          This Privacy Policy explains how <strong>Auth-X</strong> handles your
          data. As a developer-first open-source authentication system, privacy
          and security are built into the foundation.
        </p>

        {/* Section Template */}
        {privacySection.map(({ title, content, list }, idx) => (
          <section className="mb-8" key={idx}>
            <h2 className="text-lg sm:text-xl font-medium mb-2 text-white font-[Sora]">
              {title}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-[Inter]">
              {content}
            </p>
            {list && (
              <ul className="list-disc list-inside text-neutral-400 mt-2 space-y-1 text-sm sm:text-base">
                {list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <footer className="text-center mt-12 text-xs sm:text-sm text-zinc-500 font-[JetBrains_Mono]">
          <br />
          Built with developer privacy in mind by{" "}
          <span className="text-white font-semibold">
            Harshit Parmar
          </span> •{" "}
          <a
            href="mailto:parmarharshit441@gmail.com"
            className="text-blue-400 underline hover:text-blue-300 transition"
          >
            Contact Me
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Privacy;
