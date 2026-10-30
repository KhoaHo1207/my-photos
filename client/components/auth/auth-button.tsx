import Loading from "../loading";

interface AuthButtonProps {
  label: string;
  type: "submit" | "button";
  className?: string;
  loading?: boolean;
}

export default function AuthButton({
  label,
  type,
  className,
  loading,
}: AuthButtonProps) {
  return (
    <button
      type={type}
      className={`auth-btn-primary ${className}`}
      disabled={loading}
    >
      {loading ? <Loading size="xs" inline /> : label}
    </button>
  );
}
