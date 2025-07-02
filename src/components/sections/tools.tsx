export const ToolsAndTechnologiesSection = () => {
  return (
    <div className="mt-28">
      <h3 className="text-2xl font-semibold relative inline">
        Tools, Technologies & Skills
        <div className="absolute left-0 bottom-0 h-0.5 bg-primary-text w-[55px]" />
      </h3>

      <p className="mt-8 text-secondary-text">
        <strong className="text-primabg-primary-text">🖥 Frontend:</strong>
        <br />
        React, Next.js, Tailwind CSS, TypeScript
        <br />
        <br />
        <strong className="text-primabg-primary-text">🗄 Backend:</strong>
        <br />
        Node.js, Express, PostgreSQL, Prisma
        <br />
        <br />
        <strong className="text-primabg-primary-text">🛠 DevOps & Infra:</strong>
        <br />
        Docker, GitHub Actions, Vercel, Nginx, Linux CLI
        <br />
        <br />
        <strong className="text-primabg-primary-text">⚙️ Tools & Misc:</strong>
        <br />
        Git, Figma, Postman, REST, Zod
      </p>
    </div>
  );
};
