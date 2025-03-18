import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface Props {
  children: React.ReactNode;
  content: React.ReactNode;
}
const SheetCustom = ({ children, content }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="bg-black">{content}</SheetContent>
    </Sheet>
  );
};

export default SheetCustom;
