<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <h1 class="text-h3 q-mb-md">Contact Us</h1>
        
        <q-card flat bordered class="q-mb-lg">
          <q-card-section>
            <p class="text-body1 q-mb-lg">
              Have questions or want to get involved? We'd love to hear from you!
            </p>

            <q-form @submit="onSubmit" class="q-gutter-md">
              <q-input
                filled
                v-model="form.name"
                label="Your Name *"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Please enter your name']"
              />

              <q-input
                filled
                v-model="form.email"
                label="Your Email *"
                type="email"
                lazy-rules
                :rules="[
                  val => val && val.length > 0 || 'Please enter your email',
                  val => val && val.includes('@') || 'Please enter a valid email'
                ]"
              />

              <q-input
                filled
                v-model="form.subject"
                label="Subject *"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Please enter a subject']"
              />

              <q-input
                filled
                v-model="form.message"
                label="Message *"
                type="textarea"
                rows="6"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Please enter a message']"
              />

              <div>
                <q-btn label="Send Message" type="submit" color="primary" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>

        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 q-mb-sm">
                  <q-icon name="email" /> Email
                </div>
                <p class="text-body2">contact@nsbejr.org</p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-sm-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 q-mb-sm">
                  <q-icon name="location_on" /> Location
                </div>
                <p class="text-body2">Your City, State</p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'ContactPage',
  setup() {
    const $q = useQuasar()
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const onSubmit = () => {
      // In production, this would send the form data to a backend service
      $q.notify({
        type: 'positive',
        message: 'Thank you for your message! We will get back to you soon.',
        position: 'top'
      })
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }

    return {
      form,
      onSubmit
    }
  }
}
</script>

