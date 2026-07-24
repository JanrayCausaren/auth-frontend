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
import { Controller, useForm } from "react-hook-form";
import { registerInputSchema, type IRegister } from "../schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { showToast } from "@/components/toast";
import { useRegister } from "../hooks/auth.query";

const RegisterPage = () => {
  const [isHide, setIsHide] = React.useState(false);

  const { isPending, isError, isSuccess, error, ...registerMutation } =
    useRegister();

  const { control, handleSubmit } = useForm<IRegister>({
    resolver: zodResolver(registerInputSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: IRegister) => {
     registerMutation.mutate(data, {
      onSuccess: (data) => {
        showToast.success(data.id, {
          action: {
            label: "undo",
            onClick: () => console.log("undo"),
          },
        });
      },
      onError: (error) => {
        console.log(error.code);
        showToast.error(error.message, {
          action: {
            label: "undo",
            onClick: () => console.log("undo"),
          },
        });
      },
    });
  };

  const onError = (errors: any) => {
    console.log("Errors", errors);
  };

  return (
    <section className="p-4 h-dvh">
      <div className="flex h-full justify-center items-center">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>Create a new account</CardDescription>
          </CardHeader>
          <CardContent>
            <form id="register-form" onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="flex flex-col gap-4 pb-10">
                <Controller
                  name="username"
                  control={control}
                  render={function ({ field, fieldState, formState }) {
                    // console.log(field);
                    // console.log(fieldState);
                    // console.log(formState);

                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="username">Username</FieldLabel>
                        <InputGroup>
                          <InputGroupInput
                            aria-invalid={fieldState.invalid}
                            type="text"
                            id="username"
                            placeholder="Username"
                            {...field}
                          />
                          <InputGroupAddon>
                            <MailIcon />
                          </InputGroupAddon>
                        </InputGroup>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]}></FieldError>
                        )}
                      </Field>
                    );
                  }}
                ></Controller>

                <Controller
                  name="email"
                  control={control}
                  render={function ({
                    field,
                    fieldState,
                    formState,
                  }): React.ReactElement {
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <InputGroup>
                          <InputGroupInput
                            aria-invalid={fieldState.invalid}
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                          <InputGroupAddon>
                            <MailIcon />
                          </InputGroupAddon>
                        </InputGroup>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]}></FieldError>
                        )}
                      </Field>
                    );
                  }}
                />

                <Controller
                  control={control}
                  name="password"
                  render={function ({
                    field,
                    fieldState,
                    formState,
                  }): React.ReactElement {
                    return (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="password">Password</FieldLabel>

                        <InputGroup>
                          <InputGroupInput
                            id="password"
                            type={isHide ? "password" : "text"}
                            placeholder="Enter password"
                            aria-invalid={fieldState.invalid}
                            {...field}
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
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]}></FieldError>
                        )}
                      </Field>
                    );
                  }}
                />
              </div>
              <Button
                variant={ isPending ? "outline" : "default"}
                disabled={isPending}
                type="submit"
                className="w-full"
                form="register-form"
              >
                {isPending && <Spinner data-icon="inline-start" />}
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
