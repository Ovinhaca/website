<script setup lang="ts">
import { reset } from "@formkit/core";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

import type { ContactFormStoryblok } from "../component-types-sb";

type Props = {
  blok: ContactFormStoryblok;
};

const props = defineProps<Props>();

const success = ref(false);

const handleSubmit = (data: any) => {
  const formData = new FormData();
  formData.append("bot-field", data["bot-field"]);
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("message", data.message);
  formData.append("form-name", data["form-name"]);

  fetch("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData as any).toString(),
  })
    .then(() => {
      success.value = true;
      reset("contact");
    })
    .catch((error) => alert(error));
};
</script>

<template>
  <SbSection maxw="5xl">
    <component
      :is="props.blok.headline_rank"
      v-if="props.blok.headline"
      class="text-2xl leading-tight font-medium uppercase text-neutral-800 tracking-wide mb-6"
    >
      {{ props.blok.headline }}
    </component>
    <div v-if="success" class="rounded-md bg-green-50 p-4 mb-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-green-800">
            Thank you for your message!
          </h3>
          <div class="mt-2 text-sm text-green-700">
            <p>We will get back to you as soon as possible.</p>
          </div>
        </div>
      </div>
    </div>
    <FormKit
      id="contact"
      type="form"
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      method="post"
      @submit="handleSubmit"
    >
      <div class="grid md:grid-cols-3 gap-4 mb-4">
        <FormKit
          id="name"
          type="text"
          name="name"
          label="Name *"
          validation="required"
          placeholder="Please add your full name"
          outer-class="$remove:mb-4"
        />

        <FormKit
          id="email"
          type="email"
          name="email"
          label="Email *"
          validation="required|email"
          placeholder="Please add your email"
          outer-class="$remove:mb-4"
        />

        <FormKit
          id="phone"
          type="text"
          name="phone"
          label="Phone"
          placeholder=""
          outer-class="$remove:mb-4"
        />

        <FormKit
          id="message"
          type="textarea"
          name="message"
          label="Message *"
          validation="required"
          placeholder="Please leave a message"
          outer-class="$remove:mb-4 md:max-w-full col-span-full"
        />
      </div>

      <p class="hidden">
        <label>
          Don’t fill this out if you’re human:
          <FormKit type="text" name="bot-field" />
        </label>
      </p>

      <FormKit type="hidden" name="form-name" value="contact" />
    </FormKit>
    <p>
      <em><small class="text-gray-400">* Mandatory fields</small></em>
    </p>
  </SbSection>
</template>
