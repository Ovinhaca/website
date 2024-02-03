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
  if (data["bot-field"]) {
    return;
  }

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("message", data.message);
  formData.append("form-name", data["form-name"]);

  fetch("/contact-form.html", {
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
      action="/"
      method="POST"
      name="contact"
      netlify-honeypot="bot-field"
      data-netlify="true"
      @submit="handleSubmit"
    >
      <div class="grid md:grid-cols-3 gap-4 mb-4">
        <FormKit
          id="name"
          name="name"
          type="text"
          label="Nome *"
          validation="required"
          placeholder="Acrescente o seu nome completo"
          outer-class="$remove:mb-4"
        />

        <FormKit
          id="email"
          name="email"
          type="email"
          label="Email *"
          validation="required|email"
          placeholder="Adicione o seu e-mail"
          outer-class="$remove:mb-4"
        />

        <FormKit
          id="phone"
          name="phone"
          type="text"
          label="Telefone"
          placeholder=""
          outer-class="$remove:mb-4"
        />

        <FormKit
          id="message"
          name="message"
          type="textarea"
          label="Mensagem *"
          validation="required"
          placeholder="Deixe uma mensagem"
          outer-class="$remove:mb-4 md:max-w-full col-span-full"
        />
      </div>

      <p class="hidden">
        <label>
          Don’t fill this out if you’re human:
          <FormKit name="bot-field" />
        </label>
      </p>

      <FormKit type="hidden" name="form-name" value="contact" />
    </FormKit>
    <p>
      <em><small class="text-gray-400">* Campos obrigatórios</small></em>
    </p>
  </SbSection>
</template>
