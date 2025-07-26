import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "../../utils/formschema";

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(
      `Name: ${data?.name}\nEmail: ${data?.email}\nPhone: ${data?.phone}\nCompany: ${data?.company}\nForm has been submitted successfully!👌`
    );
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4">
      <h1 className="text-2xl font-bold text-[#4532FC] mb-4">Contact us</h1>
      <p className="text-gray-600 mb-8 text-center">
        Speak with our team to see how we can help your business.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl flex flex-col items-center-safe  gap-4"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              value={field.value ?? ""}
              placeholder="Your name"
              className="border border-gray-300 w-full rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#4532FC]"
            />
          )}
        />
        {errors.name && (
          <p className="text-red-500 text-sm w-full">{errors.name.message}</p>
        )}

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              value={field.value ?? ""}
              placeholder="Email"
              className="border  w-full border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#4532FC]"
            />
          )}
        />
        {errors.email && (
          <p className="text-red-500 text-sm w-full">{errors.email.message}</p>
        )}

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              value={field.value ?? ""}
              placeholder="Your best contact number"
              className="border w-full border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#4532FC]"
            />
          )}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm w-full">{errors.phone.message}</p>
        )}

        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              value={field.value ?? ""}
              placeholder="Business or company name"
              className="border w-full border-gray-300 rounded-xl p-4 h-40 resize-none outline-none focus:ring-2 focus:ring-[#4532FC]"
            />
          )}
        />
        {errors.company && (
          <p className="text-red-500 text-sm w-full">
            {errors.company.message}
          </p>
        )}

        <button
          type="submit"
          className="bg-[#4532FC] sm:w-fit !px-14  text-white rounded-full py-3 font-semibold hover:bg-[#3422e0] transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
