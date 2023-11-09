import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal Generation | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a
              href="https://linkedin.com/in/gabrielsopimentel"
              target="_blank"
              className="hover:opacity-30"
            >
              <LinkedinLogo size={48} weight="bold" />
            </a>
            <a
              href="https://github.com/gabrielsopimentel"
              target="_blank"
              className="hover:opacity-30"
            >
              <GithubLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
