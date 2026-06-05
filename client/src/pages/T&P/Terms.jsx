import React from "react";

const Terms = () => {
  const termsSections = [
    {
      title: "1. Purpose",
      content:
        "Auth-X is intended for learning, prototyping, and production-ready integrations. It provides a complete auth system with email verification and password reset using modern practices.",
    },
    {
      title: "2. Fair Use",
      content:
        "By using Auth-X, you agree to the following fair usage guidelines:",
      list: [
        "Do not use Auth-X for any malicious or unethical purposes.",
        "Do not falsely claim Auth-X as your own original work.",
        "Attribution is appreciated if you use it in public or commercial projects.",
      ],
    },
    {
      title: "3. Security Disclaimer",
      content:
        "While Auth-X follows security best practices (JWT, bcrypt, env config), the responsibility to secure production deployments lies with you. Misconfiguration or misuse is not the responsibility of the creator.",
    },
    {
      title: "4. Modifications & Contributions",
      content:
        "You’re welcome to fork, modify, and contribute to the project. Pull requests and suggestions on GitHub are encouraged!",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "Auth-X is provided “as-is” without warranties. The developer is not liable for any damage, data loss, or misuse resulting from its use.",
    },
  ];

  return (
    <div className="min-h-dvh px-6 sm:px-10 md:px-20 py-12 bg-black text-white font-[Inter]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center font-[Space_Grotesk]">
          Terms of Use
        </h1>

        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
          Welcome to <strong>Auth-X</strong> — an open-source MERN stack
          authentication system built by a developer, for developers. By using
          or integrating Auth-X, you agree to the following terms.
        </p>

        {termsSections.map(({ title, content, list }, idx) => (
          <section className="mb-8" key={idx}>
            <h2 className="text-lg sm:text-xl font-medium mb-2 text-white font-[Space_Grotesk]">
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
          Built by{" "}
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

export default Terms;
