import React from "react";


export default function CardLogin() {
    const { form, onChange, cleanFields } = useForm({
      email: '',
      senha: ''
      
    })

    const enviaFormulario = (event) => {
        event.preventDefault()
        console.log('Formulário enviado com sucesso!', form)
        cleanFields()
      }
      return(
          <form onSubmit={enviaFormulario}>
              <input
          name={'nome'}
          value={form.nome}
          onChange={onChange}
          placeholder={'Nome'}
          required
          pattern={'^.{8,}'}
          title={''}
        />

          </form>
)}