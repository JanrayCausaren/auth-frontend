import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { EyeOffIcon, MailIcon, EyeDashedIcon } from "lucide-react";
import React from "react";

const RegisterPage = () => {
  const [isHide, setIsHide] = React.useState(false);
  return (
    <section className="p-4 h-dvh">
      <div className="flex h-full justify-center items-center">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>Create a new account</CardDescription>
          </CardHeader>
          <CardContent>
            <form action="">
             <div className="flex flex-col gap-4 pb-10">
               <InputGroup>
                 <InputGroupInput type="text" placeholder="Username" />
                 <InputGroupAddon>
                   <MailIcon />
                 </InputGroupAddon>
               </InputGroup>
               <InputGroup>
                 <InputGroupInput type="email" placeholder="Enter your email" />
                 <InputGroupAddon>
                   <MailIcon />
                 </InputGroupAddon>
               </InputGroup>
               <InputGroup>
                 <InputGroupInput
                   id="inline-end-input"
                   type={isHide ? "password" : "text"}
                   placeholder="Enter password"
                 />
                 <InputGroupAddon align="inline-end">
                   <InputGroupButton
                     aria-label="Copy"
                     title="Copy"
                     size="icon-xs"
                     onClick={() => {
                       console.log("hide clicked");
                       setIsHide(!isHide);
                       // copyToClipboard("https://x.com/shadcn");
                     }}
                   >
                     {isHide ? <EyeOffIcon /> : <EyeDashedIcon />}
                   </InputGroupButton>
                 </InputGroupAddon>
               </InputGroup>
             </div>
              <Button variant="default" disabled type="submit" className="w-full">
                <Spinner data-icon="inline-start" />
                Create
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegisterPage;
