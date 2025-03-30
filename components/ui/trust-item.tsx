interface TrustItemProps {
  reason: string;
  description: string;
}

export default function TrustItem({ reason, description }: TrustItemProps) {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex items-center gap-x-4">
        <div className="w-1 h-full bg-primary-blue rounded-sm" />
        <h1 className="font-onest font-medium text-dark text-[1.875rem] tracking-[-0.075rem] leading-[2.25rem]">
          {reason}
        </h1>
      </div>

      <p className="font-medium font-onest text-body text-xl tracking-[-0.025rem] leading-7">
        {description}
      </p>
    </div>
  );
}
