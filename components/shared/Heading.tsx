interface Props {
  title: string;
  description?: string;
  textAlign?: "start" | "end" | "center";
  className?: string;
}

const Heading = ({
  title,
  description,
  textAlign = "center",
  className,
}: Props) => {
  return (
    <div
      className={`flex flex-col gap-3 
      ${
        textAlign === "start"
          ? "text-start"
          : textAlign === "end"
          ? "text-end"
          : "text-center"
      }
      ${className}
      `}
    >
      <h1 className="text-xl sm:text-2xl font-semibold leading-none tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default Heading;
