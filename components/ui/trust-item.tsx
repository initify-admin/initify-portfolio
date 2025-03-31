interface TrustItemProps {
  reason: string;
  description: string;
}

export default function TrustItem({ reason, description }: TrustItemProps) {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex items-center gap-x-4">
        <div className="w-1 h-full bg-primary-blue rounded-sm" />
        <h1 className="font-onest font-medium text-dark text-[1.625rem] sm:text-[1.75rem] xl:text-[1.875rem] tracking-[-0.065rem] sm:tracking-[-0.07rem] xl:tracking-[-0.075rem] leading-[1.95rem] sm:leading-[2.1rem] xl:leading-[2.25rem]">
          {reason}
        </h1>
      </div>

      <p className="font-medium font-onest text-body text-base sm:text-lg xl:text-xl tracking-[-0.02rem] sm:tracking-[-0.023rem] xl:tracking-[-0.025rem] leading-[1.4rem] sm:leading-[1.575rem] xl:leading-7">
        {description}
      </p>
    </div>
  );
}
