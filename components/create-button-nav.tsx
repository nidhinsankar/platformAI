import { ChatbotCreateButton } from "./chatbot-create-button";
import { CrawlerCreateButton } from "./crawler-create-button";
import { Icons } from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const CreateButtonNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-10 h-10 rounded-full bg-black text-white flex justify-center items-center">
        <Icons.add />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-10">
        <DropdownMenuItem>
          <ChatbotCreateButton variant={"nothing"} />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CrawlerCreateButton variant={"nothing"} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CreateButtonNav;
