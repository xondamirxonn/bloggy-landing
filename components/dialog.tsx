import {
  Dialog as UiDialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
interface DialogProps {
  open?: string | boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  okText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  loading?: boolean;
}
const Dialog = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  okText,
  cancelText,
  onConfirm,
  loading,
}: DialogProps) => {
  const handleConfirm = async () => {
    if (!onConfirm) return;

    await onConfirm();

    onOpenChange(false);
  };

  return (
    <div>
      <UiDialog open={Boolean(open)} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description || ""}</DialogDescription>
          </DialogHeader>
          {children}
          <DialogFooter>
            <DialogClose asChild>
              {cancelText && <Button variant={"outline"}>{cancelText}</Button>}
            </DialogClose>
            {okText && (
              <Button onClick={handleConfirm} disabled={loading}>
                {loading ? <Spinner /> : okText}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </UiDialog>
    </div>
  );
};

export default Dialog;
