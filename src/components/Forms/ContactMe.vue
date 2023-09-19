<template>
  <v-card class="mx-auto" max-width="850">
    <v-card-title> FORMULARIO DE CONTACTO </v-card-title>
    <v-divider></v-divider>

    <validation-observer ref="observer" v-slot="{ invalid }">
      <v-form @submit.prevent="showAlert">
        <validation-provider
          v-slot="{ errors }"
          name="nombre y apellido"
          rules="required|max:30|alpha_spaces"
        >
          <v-text-field
            v-model.trim="name"
            :counter="30"
            :error-messages="errors"
            label="Nombre y Apellido"
            required
            outlined
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="mail"
          rules="required|email"
        >
          <v-text-field
            v-model.trim="email"
            :error-messages="errors"
            label="Mail"
            required
            outlined
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="motivo de contacto"
          rules="required"
        >
          <v-select
            v-model="select"
            :items="items"
            :error-messages="errors"
            label="Motivo de contacto"
            data-vv-name="select"
            required
            outlined
          ></v-select>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="observaciones"
          rules="max:300"
        >
          <v-textarea
            v-model.trim="textarea"
            :counter="300"
            :error-messages="errors"
            outlined
            name="observaciones"
            label="Observaciones"
            auto-grow
            rows="1"
          ></v-textarea>
        </validation-provider>

        <v-card style="margin-bottom: 20px">
          <v-card-title outlined
            >Nivel de urgencia de la solicitud</v-card-title
          >
          <v-card-subtitle
            >Indique el plazo máximo que considera aceptable para la espera de
            una respuesta.
          </v-card-subtitle>
          <v-container fluid>
            <v-checkbox
              v-model="checkbox.noUrgente"
              label="No urgente - La respuesta podría demorar más de 10 días"
              :disabled="checkbox.critica"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox.moderada"
              label="Moderada - La respuesta podría demorar entre 5 y 10 días"
              :disabled="checkbox.critica"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox.urgente"
              label="Urgente - La respuesta podría demorar entre 2 y 5 días"
              :disabled="checkbox.critica"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox.muyUrgente"
              label="Muy urgente - La solicitud será respondida en las próximas 48hs"
              :disabled="checkbox.critica"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox.critica"
              label="Crítica - La solicitud requiere atención inmediata"
              @change="handleCriticaChange"
            ></v-checkbox>
          </v-container>
        </v-card>

        <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid || loadingAlert || confirmAlert"
        >
          Enviar
          <v-spacer style="width: 8px"></v-spacer>
          <v-icon size="24px">mdi-whatsapp</v-icon>
        </v-btn>

        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn @click="clear" color="#1E355F" v-bind="attrs" v-on="on">
              <v-icon size="24px" class="mx-4 white--text"
                >mdi-filter-remove-outline</v-icon
              >
            </v-btn>
          </template>
          <span>Limpiar campos</span>
        </v-tooltip>
        <v-alert
          v-model="loadingAlert"
          :value="loadingAlert"
          color="#ccc"
          transition="scale-transition"
          class="centered-alert"
        >
          {{ loadingText }}
          <!-- <v-spacer style="width: 10px"></v-spacer>
          <v-btn color="#1E355F" right dark @click="loadingAlert = false">
            Cerrar
          </v-btn> -->
        </v-alert>
        <v-alert
          v-model="confirmAlert"
          :value="confirmAlert"
          dark
          color="teal"
          transition="scale-transition"
          class="centered-alert"
        >
          {{ confirmText }}

          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="5">
              <v-btn color="white" right class="teal--text" @click="clear">
                Aceptar
              </v-btn>
            </v-col>
            <v-col cols="5">
              <v-btn
                color="white"
                right
                class="teal--text"
                @click="
                  editAlert = true;
                  confirmAlert = false;
                "
              >
                Editar
              </v-btn>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
        </v-alert>
        <v-alert
          v-model="editAlert"
          :value="editAlert"
          color="#ccc"
          transition="scale-transition"
          class="centered-alert"
        >
          {{ editText }}
          <v-spacer style="width: 10px"></v-spacer>
          <v-btn color="#1E355F" right dark @click="editAlert = false">
            Cerrar
          </v-btn>
        </v-alert>
        <v-alert
          v-model="errorAlert"
          :value="errorAlert"
          color="#ccc"
          transition="scale-transition"
          class="centered-alert"
        >
          {{ errorText }}
          <v-spacer style="width: 10px"></v-spacer>
          <v-btn color="#1E355F" right dark @click="errorAlert = false">
            Cerrar
          </v-btn>
        </v-alert>
      </v-form>
    </validation-observer>
  </v-card>
</template>

<script>
import axios from "axios";
import {
  required,
  digits,
  email,
  max,
  alpha_spaces,
} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
//import router from "@/router.js"

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "'{_field_}' debe contener {length} digitos",
});

extend("alpha_spaces", {
  ...alpha_spaces,
  message: "'{_field_}' puede contener únicamente caracteres alfabéticos",
});

extend("required", {
  ...required,
  message: "'{_field_}' es obligatorio",
});

extend("max", {
  ...max,
  message: "'{_field_}' no puede contener más de {length} caracteres",
});

extend("email", {
  ...email,
  message: "El mail ingresado no es válido",
});

export default {
  name: "ContactMe",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      phoneNumber: "",
      email: "",
      select: null,
      items: [
        "Conferencia de prensa",
        "Nota periodística",
        "Asesoramiento personalizado",
        "Congresos / Cumbres / Foros",
      ],
      textarea: "",
      checkbox: {
        noUrgente: true,
        moderada: false,
        urgente: false,
        muyUrgente: false,
        critica: false,
      },
      loadingAlert: false,
      loadingText: "Cargando...",
      confirmAlert: false,
      confirmText: "Su solicitud fue enviada con éxito",
      editAlert: false,
      editText: "Por favor edite los campos necesarios y reenvíe el formulario",
      errorAlert: false,
      errorText: "Ocurrió un problema, intente de nuevo más tarde",
    };
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.textarea = "";
      this.checkbox = {
        noUrgente: true,
        moderada: false,
        urgente: false,
        muyUrgente: false,
        critica: false,
      };
      this.loadingAlert = false;
      this.confirmAlert = false;
      this.editAlert = false;
      this.errorAlert = false;
      this.$refs.observer.reset();
      // scrollBehavior
      // router.scrollTo(0, 0);
      //window.scrollTo(0, 0);
    },
    handleCriticaChange() {
      if (this.checkbox.critica)
        this.checkbox.noUrgente =
          this.checkbox.moderada =
          this.checkbox.urgente =
          this.checkbox.muyUrgente =
            false;
    },
    async showAlert() {
      this.loadingAlert = true;
      if (this.loadingAlert) {
        const payload = {
          name: this.name,
          email: this.email,
          select: this.select,
          textarea: this.textarea,
          checkbox: this.checkboxSelected(),
        };
        let respuesta = await this.postContacto(payload);
        // console.log(respuesta);

        if (respuesta.status === 200) {
          const whatsappLink = this.generateWhatsAppLink();
          setTimeout(() => {
            window.open(whatsappLink, "_blank");
            this.confirmAlert = true;
          }, 1500);
        } else {
          this.errorAlert = true;
        }
        this.loadingAlert = false;
        // this.getContacto();
      }
    },
    checkboxSelected() {
      if (this.checkbox.noUrgente) {
        return "*Urgencia:* No urgente";
      } else if (this.checkbox.moderada) {
        return "*Urgencia:* Moderada";
      } else if (this.checkbox.urgente) {
        return "*Urgencia:* Urgente";
      } else if (this.checkbox.muyUrgente) {
        return "*Urgencia:* Muy urgente";
      } else if (this.checkbox.critica) {
        return "*URGENCIA: CRITICA*";
      }
    },
    generateWhatsAppLink() {
      let message = "";
      message += this.checkboxSelected();

      message += `\n*Nombre:* ${this.name}\n*Email:* ${this.email}\n*Motivo:* ${this.select}`;

      if (this.textarea.trim() !== "") {
        message += `\n*Observaciones:* ${this.textarea}`;
      }

      // const phoneNumber = "+54351153132672";

      return `https://api.whatsapp.com/send?phone=${
        this.phoneNumber
      }&text=${encodeURIComponent(message)}`;
    },
    async getPhoneNumber() {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/celContacto.json`
      );
      this.phoneNumber = response.data;
    },
    async postContacto(payload) {
      const response = await axios.post(
        `https://pil-2023-land-default-rtdb.firebaseio.com/contacto/Harrington.json`,
        payload
      );
      return response;
    },
    // async getContacto() {
    //   const response = await axios.get(
    //     `https://pil-2023-land-default-rtdb.firebaseio.com/contacto/Harrington.json`
    //   );
    //   console.log(response.data)
    // },
  },
  created() {
    this.getPhoneNumber();
  },
};
</script>

<style scoped>
.mx-auto {
  margin: 20px;
}
.v-card__title {
  background-color: #1e355f;
  color: white;
  font-size: 0.9rem;
  padding: 10px;
}
.v-card__subtitle {
  background-color: #ccc;
  padding: 10px;
  margin: 0px;
}
.v-input--checkbox {
  margin-top: 0px;
}
form {
  padding: 20px;
}
.container--fluid {
  padding: 10px 20px 0px;
}
.centered-alert {
  margin: 10px 250px 0px;
  width: 300px;
  text-align: center;
  padding: 10px;
}
</style>
