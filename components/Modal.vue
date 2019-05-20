<template>
  <div>
    <modal name="demo" height="auto" :adaptive="true" transition="pop-out">
      <div class="demo-form">
        <h4>Request a demo</h4>
        <p>
          Thanks for your interest in a demo.
          <br>We just need some basic information.
        </p>
        <!-- our signup form ===================== -->
        <form id="signup-form" @submit.prevent="processForm">
          <!-- name -->
          <div class="field">
            <label class="label">First Name</label>
            <input type="text" required class="input" name="fName" v-model="fName">
          </div>
          <!-- name -->
          <div class="field">
            <label class="label">Last Name</label>
            <input type="text" required class="input" name="lName" v-model="lName">
          </div>

          <!-- email -->
          <div class="field">
            <label class="label">Email</label>
            <input type="email" required class="input" name="email" v-model="email">
          </div>

          <!-- company -->
          <div class="field">
            <label class="label">Company</label>
            <input type="text" required class="input" name="company" v-model="company">
          </div>

          <!-- submit button -->
          <div class="field has-text-right">
            <button v-on:click.prevent="close" class="button button__teal">Cancel</button>
            <button type="submit" class="button button__teal--solid">Submit</button>
          </div>
        </form>
      </div>
      <div class="demo-form-zendesk" >
      </div>
    </modal>
    <modal name="thank-you" height="auto" :adaptive="true" transition="pop-out">
      <h4>
        Success!
        <br>Thanks for the info!
      </h4>
      <p>
        We'll send you an email shortly
        <br>with the next steps.
      </p>
      <div class="thank-you-button">
      <button v-on:click.prevent="close" class="button button__teal">Close</button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fName: "",
      lName: "",
      email: "",
      company: "",
      submitted: {
        fName: "",
        lName: "",
        email: "",
        company: ""
      }
    };
  },
  methods: {
    processForm: function(event) {
      this.submitted.fName = this.fName;
      this.submitted.lName = this.lName;
      this.submitted.email = this.email;
      this.submitted.company = this.company;

      this.fName = "";
      this.lName = "";
      this.email = "";
      this.company = "";

      event.target.reset();
      this.$modal.hide("demo");
      this.$modal.show("thank-you");
    },

    close() {
      this.$modal.hide("demo");
      this.$modal.hide("thank-you");
      this.fName = "";
      this.lName = "";
      this.email = "";
      this.company = "";
    }
  }
};
</script>

<style lang="scss">
.v--modal {
  background-color: $color_darkBlue !important;
  padding: 3rem !important;
  h4 {
    text-align: center;
    color: $color_lightBlue;
    margin-bottom: 1rem;
  }
  p {
    color: $color_white;
    text-align: center;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .field {
      width: 80%;
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
      &.has-text-right {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2rem;
      }
      input {
        width: 100%;
        font-family: $fontFamily;
        font-weight: 300;
        font-size: 1rem;
        padding: 0.4rem;
      }
      label {
        color: $color_lightBlue;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }
    }
  }
  @media (max-width: 800px) {
    padding: 1rem;
    form {
      .field {
        width: 95%;
      }
    }
  }
  .thank-you-button {
      display: flex;
      justify-content: center;
  }
}
.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}
.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
</style>
