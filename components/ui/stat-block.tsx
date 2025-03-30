interface StatBlockProps {
  title: string;
  body: string;
}

export default function StatBlock({ title, body }: StatBlockProps) {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-primary-blue text-[3.5rem] sm:text-[4rem] xl:text-[5rem] leading-[3.5rem] sm:leading-[4rem] xl:leading-[5rem] tracking-[0.07rem] sm:tracking-[-0.08rem] xl:tracking-[-0.1rem] font-medium">
        {title}
      </h1>
      <p className="text-[0.938rem] sm:text-base xl:text-lg text-body font-onest tracking-[-0.023rem] leading-6 max-w-[450px] font-medium">
        {body}
      </p>
    </div>
  );
}
