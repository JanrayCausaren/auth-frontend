import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import type z from "zod";
import { formSchema } from "../schema/auth.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "../hooks/auth.query";

const LoginPage = () => {
  const { isSuccess, isError, error, ...loginMutation } = useLogin();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    loginMutation.mutate(
      {
        username: data.username,
        password: data.password,
      },
      {
        onError: (error) => {
          console.log(error.code);
          console.log(error.message);
          
          toast(`${error.message} sfsdf`, {
            description: (
              <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                <code>{JSON.stringify(data, null, 2)}</code>
              </pre>
            ),
          });
        },
      },
    );
  }

  return (
    <section>
      {loginMutation.isPending && <p>{"this is running"}</p>}
      {isSuccess && <p>{"dsfdskfj"}</p>}
      {isError && <p>{error.message}</p>}
      <div>
        <section className="h-dvh">
          <div className="flex h-full justify-center items-center">
            <Card className="w-full sm:max-w-md">
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Explore new things</CardDescription>
              </CardHeader>
              <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <Controller
                      name="username"
                      control={form.control}
                      render={function ({ field, fieldState, formState }) {
                        return (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="form-rhf-demo-username">
                              Username or Email
                            </FieldLabel>
                            <Input
                              {...field}
                              aria-invalid={fieldState.invalid}
                              id="form-rhf-demo-username"
                              // type="text"
                              placeholder="New York"
                              autoComplete="off"
                            />
                          </Field>
                        );
                      }}
                    ></Controller>
                    <Controller
                      name="password"
                      control={form.control}
                      render={function ({ field, fieldState, formState }) {
                        return (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="form-rhf-demo-password">
                              Password
                            </FieldLabel>
                            <Input
                              {...field}
                              aria-invalid={fieldState.invalid}
                              id="form-rhf-demo-password"
                              // type="text"
                              placeholder="Password"
                              autoComplete="off"
                            />
                          </Field>
                        );
                      }}
                    ></Controller>
                  </FieldGroup>
                </form>
              </CardContent>
              <CardFooter>
                <Field orientation="horizontal">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                  >
                    Reset
                  </Button>
                  <Button type="submit" form="form-rhf-demo">
                    Submit
                  </Button>
                </Field>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </section>
  );
};

export default LoginPage;
