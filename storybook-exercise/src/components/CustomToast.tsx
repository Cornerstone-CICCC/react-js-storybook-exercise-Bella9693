type ToastStatus = "success" | "warning" | "error";

interface CustomToastProps {
  status: ToastStatus;
  text: string;
  hasIcon: boolean;
}

const statusStyles: Record<ToastStatus, { bg: string; icon: string }> = {
  success: {
    bg: "lightgreen",
    icon: "✅",
  },
  warning: {
    bg: "moccasin",
    icon: "⚠️",
  },
  error: {
    bg: "lightcoral",
    icon: "❌",
  },
};

const CustomToast = ({ status, text, hasIcon }: CustomToastProps) => {
  const { bg, icon } = statusStyles[status];

  return (
    <div
      style={{
        backgroundColor: bg,
        padding: "16px 24px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "16px",
        minWidth: "250px",
      }}
    >
      {hasIcon && <span>{icon}</span>}
      <span>{text}</span>
    </div>
  );
};

export default CustomToast;
