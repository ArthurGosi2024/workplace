"use client";
import ButtonRedirect from "@/components/button-redirect";
import { ROUTER_STAGES } from "../../app/(public)/sign-up/routerConfig";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

interface IFooterNextPaginationProps {
  stage: number;
}

export default function FooterNextPagination({
  stage,
}: IFooterNextPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePrevious = useCallback(() => {}, [stage]);

  const handleNext = useCallback(() => {
    const nextStage = stage + 1;
    const findNextStage = ROUTER_STAGES.find((stage) => stage.id === nextStage);
    if (findNextStage) {
      router.replace(`/sign-up/${nextStage}/${findNextStage?.router}`);
    }
  }, [stage, router, pathname]);

  return (
    <footer className="flex justify-between items-center h-[84px] w-full">
      {stage > 1 ? (
        <ButtonRedirect
          label="Anterior"
          bgTransparent={true}
          icon="formkit:arrowleft"
          shandow={false}
          reverse={true}
          action={handlePrevious}
        />
      ) : (
        <div></div>
      )}
      <ButtonRedirect
        label="Proximo"
        icon="formkit:arrowright"
        action={handleNext}
      />
    </footer>
  );
}
