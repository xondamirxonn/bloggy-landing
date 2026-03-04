"use client";

import React, { forwardRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FormItem, FormControl } from "@/components/ui/form";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

type BaseInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  mask?: string;
  inputType?: string;
  rules?: Record<string, any>;
  otpLength?: number;
  action?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      name,
      label,
      placeholder,
      required = false,
      rules,
      mask,
      inputType,
      otpLength,
      action,
      ...props
    },
    ref,
  ) => {
    const { control } = useFormContext();
    const [showPassword, setShowPassword] = useState(false)
    return (
      <Controller
        name={name}
        control={control}
        rules={rules ?? (required ? { required: true } : {})}
        render={({ field, fieldState }) => (
          <FormItem className="w-full">
            <FormControl>
              <Field data-invalid={fieldState.invalid}>
                {label && (
                  <FieldLabel htmlFor={name}>
                    {label} {action && action}
                  </FieldLabel>
                )}
    
                <Input
                  {...field}
                  ref={ref}
                  id={name}
                  placeholder={placeholder}
                  aria-invalid={fieldState.invalid ? "true" : "false"}
                  {...props}
                />
                
                {fieldState.invalid && fieldState.error && (
                  <FieldError
                    className="pt-0 min-h-0"
                    errors={fieldState.error ? [fieldState.error] : []}
                  />
                )}
              </Field>
            </FormControl>
          </FormItem>
        )}
      />
    );
  },
);

BaseInput.displayName = "BaseInput";
