import Link from "next/link";

interface AuthPromptProps {
  label: string;
  link: string;
  linkText: string;
}

export default function AuthPrompt({ label, link, linkText }: AuthPromptProps) {
  return (
    <div className="mt-8 text-center text-xs text-slate-600 sm:text-sm">
      {label}
      <Link
        href={link}
        className="ml-1 font-medium text-slate-900 hover:underline"
      >
        {linkText}
      </Link>
    </div>
  );
}
